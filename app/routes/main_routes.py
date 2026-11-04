"""
Main Routes Blueprint.
Serves landing page, system health check, and runtime info.
"""
from flask import Blueprint, render_template, jsonify, current_app

main_bp = Blueprint('main', __name__)


@main_bp.route('/')
def index():
    """Serves the foundational landing view."""
    return render_template('index.html')


@main_bp.route('/api/health')
def health_check():
    """System health check endpoint for monitoring and smoke testing."""
    return jsonify({
        'status': 'healthy',
        'application': 'SkillPilot AI',
        'version': '1.0.0',
        'domain': 'AI-Powered Student Skill, Career & Placement Readiness Platform',
        'team': {
            'lead': 'Lakshya Khandelwal',
            'frontend': 'Amit Singh',
            'ai_ml': 'Keshav Gupta'
        },
        'stack': {
            'frontend': 'HTML5 / CSS3 / Vanilla JavaScript / Chart.js',
            'backend': 'Python Flask / SQLAlchemy ORM',
            'nlp_ai': 'PyMuPDF / spaCy / Gemini API'
        }
    }), 200
