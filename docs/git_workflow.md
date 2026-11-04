# SkillPilot AI — Git & GitHub Team Collaboration Workflow

## 1. Branching Strategy
The team uses a standard Git feature-branching model centered on GitHub.

```
       [main] (Production-ready, protected, merged only via PR)
         │
         ├─── [frontend] ── (Amit Singh — UI, templates, styles, client JS)
         ├─── [backend]  ── (Shared / Lakshya — Models, DB, Flask routes)
         └─── [ai-ml]    ── (Keshav Gupta — NLP, PyMuPDF, spaCy, Gemini API)
```

---

## 2. Developer Working Rules
1. **Never Commit Directly to `main`**: All features must be merged via approved Pull Requests (PRs) reviewed by Lakshya.
2. **Pull Before Starting**: Always sync your local branch before creating new commits:
   ```bash
   git checkout <branch_name>
   git pull origin <branch_name>
   ```
3. **Conventional Commit Messages**: Use clear, concise commit messages:
   - `feat: implement resume parsing service`
   - `fix: correct adaptive question scoring logic`
   - `docs: add database ER diagram`
   - `test: add assessment route smoke tests`
   - `style: refine dashboard design tokens`
4. **Never Commit Secrets or Sensitive Files**:
   - `.env` files or API keys (Gemini, DB passwords)
   - Real student PDF resumes (`uploads/resumes/*` is ignored)
   - SQLite databases (`instance/*.db`) or Python caches (`__pycache__`, `.pytest_cache`)

---

## 3. Pull Request Review Protocol
1. Push branch to GitHub:
   ```bash
   git push origin <branch_name>
   ```
2. Open a Pull Request targeting `main`.
3. Provide a summary of:
   - What was implemented.
   - Files changed.
   - Tests run.
   - Screenshots (for UI changes).
4. **Lakshya Khandelwal** reviews code, checks tests, and executes the merge.
