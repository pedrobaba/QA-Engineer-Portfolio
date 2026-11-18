# Day 77 — Introduction to Automation Testing

## Overview

Day 77 introduced Automation Testing and prepared me for browser automation using Playwright.

The objective was to understand how automated testing works, why QA engineers use automation, how automation frameworks are structured, and how Playwright interacts with web applications.

This day focused on foundational knowledge and environment readiness. Actual Playwright installation and test execution are scheduled for Day 78.

---

## Learning Objectives

By the end of Day 77, I learned how to:

- Explain automation testing and its purpose.
- Distinguish manual testing from automation testing.
- Understand the benefits and limitations of test automation.
- Identify common types of automation testing.
- Understand the purpose of an automation framework.
- Recognise the components of a basic automation project.
- Understand the Page Object Model at an introductory level.
- Explain the Arrange–Act–Assert testing pattern.
- Understand Playwright's architecture and workflow.
- Identify the main components of Playwright.
- Understand headed and headless browser execution.
- Identify the JavaScript concepts required for Playwright.
- Verify my development environment before automation setup.

---

## 1. Understanding Automation Testing

Automation testing is the use of software tools and scripts to execute test cases and verify whether an application behaves as expected.

Instead of manually performing every test step, a QA engineer writes instructions that an automation tool can execute.

### Manual Testing vs Automation Testing

| Manual Testing | Automation Testing |
|---|---|
| A tester performs test steps manually. | Scripts execute test steps automatically. |
| Often suitable for exploratory testing. | Useful for repeatable and regression testing. |
| Can require significant repeated effort. | Can reduce repeated execution effort. |
| Results depend on the tester's actions. | Provides consistent execution of scripted steps. |
| Usually requires direct human interaction. | Can run with limited human intervention. |

### Benefits of Automation Testing

- Faster execution of repetitive tests.
- Improved consistency.
- Reusable test scripts.
- Support for regression testing.
- Easier integration with CI/CD pipelines.
- Ability to run tests across supported browsers.

### Common Types of Automation Testing

- Unit Testing
- API Testing
- UI Testing
- Integration Testing
- Regression Testing
- End-to-End Testing

### Introduction to Playwright

Playwright is an open-source browser automation framework developed by Microsoft.

It supports automation across:

- Chromium
- Firefox
- WebKit

It can automate browser interactions such as opening websites, filling forms, clicking buttons, navigating pages, and verifying application behaviour.

Official website: https://playwright.dev/

---

## 2. Understanding Automation Frameworks and Test Architecture

An automation framework provides an organised structure, tools, reusable components, and conventions for creating and maintaining automated tests.

### Automation Tool vs Framework

| Component | Purpose |
|---|---|
| Automation tool | Software used to automate testing. |
| Test framework | Provides structure and conventions for organising tests. |
| Test runner | Executes and manages test cases. |
| Assertion library | Verifies whether actual results match expected results. |

Playwright provides browser automation capabilities and the Playwright Test runner.

### Basic Automation Project Structure

A possible project structure is:

```text
qa-playwright-project/
│
├── tests/
│   └── login.spec.js
│
├── test-data/
│
├── pages/
│   └── LoginPage.js
│
├── playwright.config.js
├── package.json
└── README.md
```

### Purpose of Important Files and Folders

| File/Folder | Purpose |
|---|---|
| tests/ | Stores automated test files. |
| login.spec.js | Contains login-related automated tests. |
| test-data/ | Stores test data. |
| pages/ | Stores reusable page-related code. |
| LoginPage.js | Can contain reusable login-page actions. |
| playwright.config.js | Stores Playwright configuration. |
| package.json | Stores project information and dependencies. |
| README.md | Explains the project and how to use it. |

### Page Object Model (POM)

Page Object Model is a design pattern used in test automation.

It separates page interactions from test logic.

For example, login actions can be placed in a reusable LoginPage class instead of repeating the same instructions in multiple test files.

Benefits include:

- Reduced code duplication.
- Easier maintenance.
- Better organisation.
- Reusable page interactions.

### Arrange–Act–Assert (AAA)

AAA is a common pattern for organising test cases.

1. Arrange — Prepare the test environment and required data.
2. Act — Perform the action being tested.
3. Assert — Verify whether the expected result occurred.

---

## 3. Understanding Playwright Architecture and Workflow

Playwright automates browser interactions through a set of components that work together.

### Basic Execution Flow

```text
Test Script
    |
    v
Playwright Test Runner
    |
    v
Browser Automation
    |
    v
Web Application
    |
    v
Assertions and Test Results
```

### Main Playwright Components

| Component | Purpose |
|---|---|
| Browser | Runs the web application. |
| Browser Context | Provides an isolated browser session. |
| Page | Represents an individual browser tab. |
| Locator | Identifies elements on a webpage. |
| Assertion | Checks expected application behaviour. |
| Fixture | Provides reusable test resources. |
| Reporter | Displays test execution results. |

### Browser Context

A browser context provides an isolated browsing session.

Separate contexts can help prevent different users' cookies, storage, and sessions from interfering with each other.

### Page

A Page represents an individual browser tab.

Example:

```javascript
await page.goto('https://www.saucedemo.com/');
```

### Locator

A locator identifies an element on a webpage.

Example:

```javascript
page.locator('#login-button');
```

### Assertion

An assertion verifies whether the expected result occurred.

Example:

```javascript
await expect(page).toHaveURL(/inventory/);
```

### Headed vs Headless Execution

| Headed Mode | Headless Mode |
|---|---|
| Browser window is visible. | Browser runs without displaying its graphical window. |
| Useful for observing test execution. | Useful for automated execution and CI/CD. |
| Helps beginners understand browser interactions. | Commonly used in automated pipelines. |

### Basic Playwright Workflow

1. Install Node.js.
2. Create a Playwright project.
3. Install Playwright Test.
4. Install the required browsers.
5. Write test scripts.
6. Execute tests.
7. Observe browser interactions.
8. Verify assertions.
9. Review reports.
10. Investigate failures and maintain tests.

---

## 4. Preparing the Environment and JavaScript Knowledge

Playwright automation requires a development environment capable of running JavaScript and managing project dependencies.

### Required Tools

| Tool | Purpose |
|---|---|
| Node.js | Runs JavaScript outside the browser. |
| npm | Manages JavaScript packages and dependencies. |
| Visual Studio Code | Code editor for writing automation tests. |
| Playwright | Browser automation framework. |
| Git | Tracks changes to the automation project. |
| GitHub | Stores and showcases the project. |

### JavaScript Concepts Required

| Concept | Application in Playwright |
|---|---|
| Variables | Store test data. |
| Functions | Organise reusable instructions. |
| Arrays | Store multiple test values. |
| Objects | Group related data. |
| Conditions | Handle different test situations. |
| Promises | Represent operations that complete asynchronously. |
| Async/Await | Handle asynchronous browser operations. |
| Import/Export | Reuse code across files. |

### Understanding Async/Await

Browser automation involves operations that take time, such as navigating to a page, waiting for an element, and clicking a button.

JavaScript uses async and await to handle asynchronous operations.

Example:

```javascript
async function openWebsite(page) {
  await page.goto('https://www.saucedemo.com/');
}
```

- `async` declares an asynchronous function.
- `await` waits for the asynchronous operation to complete before continuing.

### Basic Terminal Commands

| Command | Purpose |
|---|---|
| `node -v` | Checks Node.js version. |
| `npm -v` | Checks npm version. |
| `git --version` | Checks Git version. |
| `mkdir project-name` | Creates a directory. |
| `cd project-name` | Changes directory. |
| `npm init -y` | Creates a basic package.json file. |
| `code .` | Opens the current folder in VS Code. |

---

## 5. Environment Verification

The following development tools were confirmed on my Windows computer:

| Requirement | Verified Version/Status |
|---|---|
| Operating System | Windows |
| Visual Studio Code | Installed |
| Node.js | v24.14.0 |
| npm | 11.9.0 |
| Git | 2.53.0.windows.1 |

The environment is prepared for the Playwright installation process scheduled for Day 78.

### Current Setup Status

- Node.js: Installed.
- npm: Installed.
- Git: Installed.
- VS Code: Installed.
- Playwright: Not yet installed.
- Playwright browsers: Not yet installed.
- Automated browser tests: Not yet executed.

---

## Key Takeaways

1. Automation testing uses scripts to execute repeatable tests.
2. Manual and automation testing serve different purposes.
3. Automation frameworks help organise and maintain test scripts.
4. Page Object Model supports reusable page interactions.
5. Arrange–Act–Assert provides a clear test structure.
6. Playwright supports Chromium, Firefox, and WebKit.
7. Browser contexts provide isolated sessions.
8. Locators identify webpage elements.
9. Assertions verify expected outcomes.
10. Async/await is important when working with browser operations.
11. Node.js, npm, VS Code, and Git are important tools in our automation environment.
12. My development environment has been verified and is ready for Playwright setup.

