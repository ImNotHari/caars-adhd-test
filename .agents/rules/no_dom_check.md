---
trigger: always_on
---

# UI Verification Rule: No Automated DOM Inspection

## Directives
- **Do not inspect the DOM**: Do not launch browser subagents or use automated DOM checking tools to verify frontend/UI pages for the time being.
- **Instruct User to Check**: Whenever UI, HTML, CSS, or client-side JavaScript changes are applied, verify code correctness and unit tests locally, and output a confirmation message instructing the user to check and test the changes in their active browser.
- **Provide Checklist**: Provide the user with a concise list of what to inspect in the browser (e.g. at `http://localhost:8080/`).
