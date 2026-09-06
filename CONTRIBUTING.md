# Contributing to Orbytes Global Solutions (Orbytes Platform)

Thank you for your interest in contributing to the Orbytes / Orbytes Global Solutions enterprise platform.

## Code of Conduct

All contributors are expected to maintain professional, respectful, and collaborative interactions.

## Development Workflow

1. **Fork or Clone the Repository**:
   ```bash
   git clone https://github.com/darshankrishnakumar/RBit-Global-Infosolution-.git
   cd RBit-Global-Infosolution-
   ```

2. **Branch Naming Conventions**:
   - `feature/feature-name` for new capabilities or visual components.
   - `fix/issue-description` for bug and layout fixes.
   - `perf/optimization` for animation, framerate, or asset performance work.
   - `refactor/scope` for non-functional code reorganization.

3. **Install Dependencies**:
   ```bash
   npm install
   ```

4. **Local Development**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the application in the browser.

5. **Linting and Type Checking**:
   Ensure all TypeScript types and ESLint rules pass cleanly before submitting changes:
   ```bash
   npm run lint
   npm run build
   ```

6. **Submitting a Pull Request**:
   - Write clear, imperative commit messages (`feat: add real-time telemetry console`).
   - Describe the changes, motivation, and include before/after screenshots for visual adjustments.
   - Ensure the automated GitHub Actions CI checks pass.
