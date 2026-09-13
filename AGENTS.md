# Workspace Agent Rules

## UI Verification & DOM Checking Constraint (Temporary)

1. **Do NOT inspect the DOM or run browser subagents**:
   - For the time being, do NOT use `browser_subagent`, `browser_get_dom`, or automated browser click/DOM loops to check or verify web pages.
   - Avoid long automated browser evaluation sessions.

2. **Output Confirmation Asking the User to Check**:
   - After implementing or modifying any frontend code (HTML, CSS, JavaScript):
     - Validate code syntax, logic, and automated tests via terminal/CLI (e.g. Node.js).
     - Instead of checking the DOM yourself, output a clear, concise confirmation message telling the user to inspect and test the changes directly in their open browser (`http://localhost:8080/`).
     - List the specific items or behaviors for the user to check.
