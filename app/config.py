"""
Application Configuration Module.
Supports Development, Testing, and Production environments with PostgreSQL
and automatic SQLite fallback for zero-friction local development.
"""
import os
from pathlib import Path
from dotenv import load_dotenv

BASE_DIR = Path(__file__).resolve().parent.parent
load_dotenv(BASE_DIR / '.env')


class Config:
    """Base configuration with safe defaults."""
    SECRET_KEY = os.getenv('SECRET_KEY', 'dev-secret-key-skillpilot-ai')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    
    # Database: Use DATABASE_URL if configured, fallback to instance SQLite
    DATABASE_URL = os.getenv('DATABASE_URL')
    if DATABASE_URL:
        # Normalize postgres:// to postgresql:// for modern SQLAlchemy
        if DATABASE_URL.startswith("postgres://"):
            DATABASE_URL = DATABASE_URL.replace("postgres://", "postgresql://", 1)
        SQLALCHEMY_DATABASE_URI = DATABASE_URL
    else:
        SQLALCHEMY_DATABASE_URI = f"sqlite:///{BASE_DIR / 'instance' / 'skillpilot.db'}"

    # File Upload Configuration
    MAX_CONTENT_LENGTH = int(os.getenv('MAX_CONTENT_LENGTH', 16 * 1024 * 1024))
    UPLOAD_FOLDER = str(BASE_DIR / os.getenv('UPLOAD_FOLDER', 'uploads/resumes'))
    ALLOWED_EXTENSIONS = {'pdf'}

    # Gemini API Key (Server-Side Only)
    GEMINI_API_KEY = os.getenv('GEMINI_API_KEY', '')


class DevelopmentConfig(Config):
    """Development environment configuration."""
    DEBUG = True
    ENV = 'development'


class TestingConfig(Config):
    """Testing environment configuration."""
    TESTING = True
    DEBUG = True
    ENV = 'testing'
    SQLALCHEMY_DATABASE_URI = 'sqlite:///:memory:'
    WTF_CSRF_ENABLED = False


class ProductionConfig(Config):
    """Production environment configuration."""
    DEBUG = False
    ENV = 'production'


config_by_name = {
    'development': DevelopmentConfig,
    'testing': TestingConfig,
    'production': ProductionConfig,
    'default': DevelopmentConfig
}
