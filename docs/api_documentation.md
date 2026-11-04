# SkillPilot AI — REST API Specification

This document details the planned REST API contracts for all modules, served by Flask Blueprints and consumed by Vanilla JavaScript via the Fetch API.

---

## 1. System Health & Environment
| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/health` | System status, version & environment | No |

---

## 2. Authentication & User Profile
| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/auth/register` | Register new student account | No |
| `POST` | `/api/auth/login` | Session login with salted verification | No |
| `POST` | `/api/auth/logout` | Terminate session | Yes |
| `GET` | `/api/auth/me` | Fetch active user credentials & role | Yes |
| `GET/PUT` | `/api/profile` | Retrieve / Update student profile & target role | Yes |

---

## 3. Resume Intelligence (PyMuPDF + spaCy)
| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/resume/upload` | Upload PDF resume (Max 16MB) | Yes |
| `GET` | `/api/resume/parsed/<id>`| Retrieve extracted claims & skills | Yes |
| `POST` | `/api/resume/confirm` | Student confirms or corrects parsed claims | Yes |

---

## 4. Adaptive Skill Testing
| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/assessments` | List topic-wise assessments | Yes |
| `POST` | `/api/assessments/<id>/start` | Begin attempt, fetch initial question | Yes |
| `POST` | `/api/assessments/<id>/next` | Submit answer & retrieve adapted question | Yes |
| `POST` | `/api/assessments/<id>/finish` | Complete attempt, calculate topic scores | Yes |

---

## 5. Practical Coding Assessment
| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/coding/problems` | List problems by difficulty & topic | Yes |
| `POST` | `/api/coding/run` | Execute code against sample test cases | Yes |
| `POST` | `/api/coding/submit` | Evaluate against hidden test cases & score | Yes |

---

## 6. AI Mock Interview & Viva (Gemini API)
| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/interview/create` | Generate interview session from resume & JD | Yes |
| `POST` | `/api/interview/<id>/answer` | Submit speech/text answer | Yes |
| `POST` | `/api/interview/<id>/evaluate` | Generate comprehensive feedback & score | Yes |
| `POST` | `/api/viva/create` | Generate project viva questions | Yes |

---

## 7. Job Description Analyzer & Placement Readiness
| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/job/analyze` | Parse JD and calculate match vs verified skills | Yes |
| `GET` | `/api/readiness/dashboard` | Fetch multi-factor readiness scores & radar | Yes |
| `GET` | `/api/recommendations` | Get prioritized next-best actions | Yes |
| `POST` | `/api/mentor/chat` | Query contextual AI Mentor advice | Yes |
