/**
 * SkillPilot AI — Client-Side Core Module
 * Pure Vanilla JavaScript & Fetch API
 */

document.addEventListener('DOMContentLoaded', () => {
  const statusBadge = document.getElementById('system-status-badge');
  const statusDot = statusBadge ? statusBadge.querySelector('.pulse-dot') : null;
  const statusLabel = statusBadge ? statusBadge.querySelector('.status-label') : null;
  const healthStatusEl = document.getElementById('health-status');
  const healthJsonEl = document.getElementById('health-json-output');
  const refreshBtn = document.getElementById('refresh-health-btn');

  /**
   * Fetches the /api/health endpoint and updates the UI indicators.
   */
  async function checkSystemHealth() {
    if (statusLabel) statusLabel.textContent = 'Checking API...';

    try {
      const response = await fetch('/api/health');
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      const data = await response.json();

      // Update Header Badge
      if (statusDot) statusDot.classList.add('healthy');
      if (statusLabel) statusLabel.textContent = 'API Online';

      // Update Page Elements
      if (healthStatusEl) {
        healthStatusEl.textContent = 'System Healthy (Level 0 Verified)';
        healthStatusEl.className = 'status-val text-success';
      }

      if (healthJsonEl) {
        healthJsonEl.textContent = JSON.stringify(data, null, 2);
      }
    } catch (err) {
      console.error('SkillPilot Health Check Failed:', err);

      if (statusDot) statusDot.classList.remove('healthy');
      if (statusLabel) statusLabel.textContent = 'API Offline';

      if (healthStatusEl) {
        healthStatusEl.textContent = 'Connection Error';
        healthStatusEl.className = 'status-val text-danger';
      }

      if (healthJsonEl) {
        healthJsonEl.textContent = JSON.stringify({
          error: 'Failed to communicate with Flask backend',
          message: err.message
        }, null, 2);
      }
    }
  }

  // Initial check
  checkSystemHealth();

  // Refresh button event listener
  if (refreshBtn) {
    refreshBtn.addEventListener('click', () => {
      checkSystemHealth();
    });
  }
});
