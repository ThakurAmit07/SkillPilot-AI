"""
Flask Application Factory.
Initializes the Flask app instance, registers extensions, and attaches blueprints.
"""
import os
from flask import Flask
from app.config import config_by_name
from app.extensions import db, migrate, cors


def create_app(config_name=None):
    """
    Factory pattern to create and configure a Flask application instance.
    """
    if config_name is None:
        config_name = os.getenv('FLASK_ENV', 'development')
        
    app = Flask(__name__)
    app.config.from_object(config_by_name.get(config_name, config_by_name['default']))
    
    # Ensure instance and upload directories exist
    os.makedirs(app.instance_path, exist_ok=True)
    os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)
    
    # Initialize extensions
    db.init_app(app)
    migrate.init_app(app, db)
    cors.init_app(app, resources={r"/api/*": {"origins": "*"}})
    
    # Register blueprints
    from app.routes.main_routes import main_bp
    app.register_blueprint(main_bp)
    
    return app
