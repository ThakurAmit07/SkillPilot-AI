"""
SkillPilot AI — Level 0 Smoke & Health Tests
Verifies application factory creation, route availability, and health endpoints.
"""
import pytest
from app import create_app


@pytest.fixture
def app():
    """Create and configure a clean testing app instance."""
    app = create_app('testing')
    yield app


@pytest.fixture
def client(app):
    """Test client for making HTTP requests."""
    return app.test_client()


def test_app_creation(app):
    """Verify app instance initializes with testing config."""
    assert app is not None
    assert app.config['TESTING'] is True
    assert app.config['SQLALCHEMY_DATABASE_URI'] == 'sqlite:///:memory:'


def test_index_route(client):
    """Verify landing page serves HTTP 200 with title."""
    response = client.get('/')
    assert response.status_code == 200
    assert b'SkillPilot AI' in response.data


def test_health_check_endpoint(client):
    """Verify /api/health returns valid JSON with healthy status and team info."""
    response = client.get('/api/health')
    assert response.status_code == 200
    json_data = response.get_json()
    assert json_data['status'] == 'healthy'
    assert json_data['application'] == 'SkillPilot AI'
    assert 'team' in json_data
    assert json_data['team']['lead'] == 'Lakshya Khandelwal'
    assert json_data['team']['frontend'] == 'Amit Singh'
    assert json_data['team']['ai_ml'] == 'Keshav Gupta'


def test_non_existent_route(client):
    """Verify unknown routes return HTTP 404."""
    response = client.get('/non-existent-endpoint-xyz')
    assert response.status_code == 404
