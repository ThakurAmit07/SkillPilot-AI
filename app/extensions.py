"""
Centralized Flask Extensions initialization module.
Extensions are initialized here and attached to the app instance in create_app().
"""
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS

db = SQLAlchemy()
migrate = Migrate()
cors = CORS()
