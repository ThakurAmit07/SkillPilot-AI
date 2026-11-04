# SkillPilot AI 🚀

### AI-Powered Student Skill, Career & Placement Readiness Platform

SkillPilot AI is an AI-powered web platform that helps students understand their career and placement readiness. It analyzes a student's resume, skills, coding performance, communication, mock interviews, projects, and target job requirements to identify skill gaps and provide personalized recommendations.

---

## 🎯 Problem Statement

Students often have a gap between:
1. Skills they mention on their resume (**Claimed Skills**).
2. Skills they actually understand.
3. Skills they can practically demonstrate (**Verified Skills**).
4. Skills required by their target job role (**Job-Required Skills**).

SkillPilot AI addresses this problem by bringing resume intelligence, adaptive skill testing, practical coding assessment, AI mock interviews, communication analysis, project/viva evaluation, and job-skill matching into one unified platform.

---

## 💡 Proposed Solution

SkillPilot AI converts a static resume into a continuously updated, evidence-based student profile.

The platform:
- Extracts skills, education, projects, certifications, and experience from resumes.
- Tests technical and practical skills dynamically.
- Evaluates coding and problem-solving ability in an isolated environment.
- Conducts AI-powered technical and HR mock interviews.
- Analyzes communication and presentation performance.
- Compares student skills with job description requirements.
- Identifies critical skill gaps and pain points.
- Provides personalized recommendations and next-best actions.
- Tracks improvement through a **Test → Diagnose → Improve → Retest** cycle.

---

## 🧩 Core Modules

1. **Resume Intelligence** (PyMuPDF + spaCy NLP extraction)
2. **Adaptive Skill Testing** (Topic-wise dynamic MCQ engine)
3. **Practical Coding Assessment** (Isolated execution & test cases)
4. **AI Mock Interview** (Gemini-powered technical & HR interviews)
5. **Communication & Speech Analysis** (Pace, filler words, clarity)
6. **Presentation Analysis** (Visual presence & delivery structure)
7. **Project / Viva Mode** (Deep project architecture defense)
8. **Job Description Analyzer** (JD skill extraction & gap analysis)
9. **Placement Readiness Analysis** (Multi-factor readiness index)
10. **AI Mentor & Live Recommendations** (Explainable next-best action)

---

## 🔄 System Workflow

```
Resume Upload ➔ NLP Profile ➔ Skill Testing ➔ Coding ➔ AI Interview ➔ Communication Analysis ➔ Job & Career Matching ➔ Pain Point Detection ➔ Personalized Recommendation ➔ Retest ➔ Live Profile Update
```

---

## 🛠️ Technology Stack (Fixed Architecture)

- **Frontend:** HTML5, CSS3 (Modern Design Tokens), Vanilla JavaScript (ES6+), Fetch API, Chart.js
- **Backend:** Python 3, Flask (Application Factory), Flask-SQLAlchemy, Flask-Migrate
- **Database:** PostgreSQL (Production) / SQLite fallback (`instance/skillpilot.db` for local dev)
- **NLP & Resume Processing:** PyMuPDF (`fitz`), spaCy, Regular Expressions
- **Data Science & ML:** Pandas, NumPy, Scikit-learn
- **Generative AI:** Google Gemini API (Server-side integration only)
- **Testing:** Pytest

---

## 👥 Development Team Structure

- **Lakshya Khandelwal** — Team Leader *(Project coordination, QA, review, final demo)*
- **Amit Singh** — Design, Frontend & Integration *(UI/UX, semantic HTML/CSS, Vanilla JS, API integration)*
- **Keshav Gupta** — AI/ML & NLP *(Resume parsing, adaptive logic, Gemini API, JD analyzer)*

---

## 🚀 Quickstart Local Setup Guide

### 1. Prerequisites
- Python 3.10+ installed
- Git installed

### 2. Setup Virtual Environment
```bash
# Clone the repository
git clone https://github.com/ThakurAmit07/SkillPilot-AI.git
cd SkillPilot-AI

# Create a virtual environment
python3 -m venv venv

# Activate virtual environment
# On macOS / Linux:
source venv/bin/activate
# On Windows:
# venv\Scripts\activate
```

### 3. Install Dependencies
```bash
pip install --upgrade pip
pip install -r requirements.txt
```

### 4. Configure Environment
```bash
cp .env.example .env
# Edit .env if you wish to configure a PostgreSQL database or Gemini API key
```

### 5. Run Smoke Tests
```bash
pytest
```

### 6. Run Development Server
```bash
python run.py
```
Open your browser and navigate to:
- **Web Interface:** [http://127.0.0.1:5000](http://127.0.0.1:5000)
- **Health Check API:** [http://127.0.0.1:5000/api/health](http://127.0.0.1:5000/api/health)

---

## 📂 Project Directory Structure

```
SkillPilot-AI/
├── app/
│   ├── __init__.py                # Flask Application Factory
│   ├── config.py                  # Dev / Testing / Prod configs
│   ├── extensions.py              # db, migrate, cors instances
│   ├── routes/
│   │   ├── __init__.py
│   │   └── main_routes.py         # Landing, health check, status endpoints
│   ├── models/                    # SQLAlchemy models (Level 3)
│   ├── services/                  # Business & AI services (Level 4-9)
│   ├── utils/                     # Sanitization & security helpers
│   ├── templates/
│   │   ├── base.html              # Base Jinja2 layout with semantic HTML5
│   │   └── index.html             # Initial landing/health view
│   └── static/
│       ├── css/style.css          # Design tokens & base CSS
│       └── js/main.js             # Base client-side JavaScript (Fetch API)
├── docs/
│   ├── architecture.md            # Architecture & technology specs
│   ├── database_design.md         # Schema, tables, relationships
│   ├── api_documentation.md       # API endpoints catalog
│   ├── git_workflow.md            # Team branch & PR guidelines
│   └── task_ownership.md          # Roles: Lakshya, Amit, Keshav
├── tests/
│   ├── __init__.py
│   └── test_basic.py              # Application factory & route smoke tests
├── uploads/
│   └── resumes/                   # Secure local resume uploads
├── instance/                      # Local SQLite instance (gitignored)
├── run.py                         # Local development server entry point
├── requirements.txt               # Pinned dependencies for fixed tech stack
├── .env.example                   # Environment configuration template
├── .gitignore                     # Updated ignore rules
└── README.md                      # Project documentation
```

---

## 📌 Project Ethos
- **Never Treat Claims as Proof**: A skill on a resume is `Claimed` until demonstrated through tests, code or viva (`Verified`).
- **Safe Code Execution**: Student-submitted code is never executed inside the main Flask process.
- **Explainable Guidance**: AI recommendations provide actionable rationales and next-best actions.
