# Dealls QA Software Engineer / SDET Challenge
This repository is my submission for the **QA Software Engineer / SDET Challenge** from Dealls.
The goal of this project is to demonstrate my approach to quality assurance, test strategy design, UI automation, and CI setup using GitHub Actions.
---
## Overview
This repository covers:
- Test strategy and high-level test scenarios for the Mentoring feature
- UI automation testing using Cypress
- Basic CI setup to run automation tests automatically
The focus is not only on automation, but also on how testing is planned and structured.
---
## Challenge 1 – Test Strategy & Scenarios
### Feature
**Mentoring feature** on the Dealls platform.
### Scope of Testing
- User authentication (register & login)
- Mentor listing and search
- Mentor detail page
- Mentoring request and scheduling
- Error handling and UI behavior
### Types of Testing
- Functional testing  
- UI testing  
- Integration testing  
- Regression testing  
- Exploratory testing  
The complete test strategy, assumptions, high-level test scenarios, and testing schedule are explained in the submission document.
---
## Challenge 2 – UI Automation Testing
### Tooling
- **Framework:** Cypress  
- **Language:** JavaScript  
### Automated Scenarios
The following scenarios are automated as part of this challenge:
- User login with valid credentials
- Search mentor by name
- Open mentor detail page
These scenarios were chosen as core user flows and high-priority paths.
---
### Project Structure
.github/
 └── workflows/
     └── cypress.yml

cypress/
 ├── downloads/
 ├── e2e/
 │   └── e2e_mentoring.cy.js
 ├── fixtures/
 └── support/

node_modules/

.gitignore
cypress.config.js
package.json
package-lock.json
README.md
### How to Run Automation Locally
#### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn
#### Installation
```bash
npm install
Run Cypress Tests
Open Cypress Test Runner:
npx cypress open
Run tests in headless mode:
npx cypress run
```
Bonus – Exploratory Testing & Bug Analysis
The exploratory testing section includes:
Steps to investigate intermittent issues
Information needed to diagnose problems
Possible root causes across different layers (UI, API, network, backend)
Strategy to reproduce and verify fixes
Full details are available in the submission document.
```
CI/CD – GitHub Actions
This repository uses GitHub Actions to run Cypress tests automatically.
The pipeline will:
Install dependencies
Run Cypress tests in headless mode
Fail the workflow if any test fails
Workflow file:
.github/workflows/cypress.yml
```
Notes
Automation scripts are available in this repository and also included as text in the submission document, as requested.
This README is intended to keep things simple and easy to understand.