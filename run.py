"""
SkillPilot AI — Application Entry Point.
Executes the development server using the Application Factory pattern.
"""
import os
from app import create_app

app = create_app(os.getenv('FLASK_ENV', 'development'))

if __name__ == '__main__':
    port = int(os.getenv('PORT', 5000))
    debug = os.getenv('FLASK_DEBUG', 'true').lower() in ('1', 'true', 'yes')
    print(f"\n=======================================================")
    print(f"  SkillPilot AI — Development Server Running")
    print(f"  URL: http://127.0.0.1:{port}")
    print(f"  Health: http://127.0.0.1:{port}/api/health")
    print(f"=======================================================\n")
    app.run(host='0.0.0.0', port=port, debug=debug)
