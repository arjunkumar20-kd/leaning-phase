# JavaScript Logic & Mini-Projects Suite

A collection of foundational JavaScript programs demonstrating core programming concepts, including conditional logic, user input handling, type conversion, basic data structures, and mathematical algorithms.

## 🚀 Projects Included

### 1. Age Classification System
*   **File:** `ageClassifier.js`
*   **Description:** Takes a user's age via a prompt window and categorizes them into life stages (Child, Adult, Senior Citizen) while strictly validating against negative or non-numeric inputs.
*   **Key Concepts:** Multi-condition `if-else if` trees, logical operators (`&&`), input validation.

### 2. Console Grade Checker
*   **File:** `gradeChecker.js`
*   **Description:** An interactive utility that evaluates student test scores from `0` to `100` and displays their corresponding letter grade alongside motivational performance feedback.
*   **Key Concepts:** Boundary validation, string concatenation, variable management, evaluation thresholds.

### 3. Odd or Even Number Checker
*   **File:** `oddEvenChecker.js`
*   **Description:** Determines if an entered integer is odd, even, or zero using basic arithmetic evaluations.
*   **Key Concepts:** Modulus operator (`%`), strict equality checks (`===`), arithmetic logic.

### 4. Simple Two-Sum Logic
*   **File:** `twoSum.js`
*   **Description:** A fundamental introduction to algorithmic problem solving. The program collects two separate inputs, handles the explicit numeric type conversion, and checks if their sum matches a target configuration value (`9`).
*   **Key Concepts:** Type casting (`Number()`), data type mutation, algorithmic target tracking.

---

## 🛠️ Tech Stack & Requirements

*   **Language:** JavaScript (ES6+)
*   **Environment:** Web Browser Console (e.g., Chrome DevTools) or any environment supporting standard browser runtime APIs (`prompt`, `console`).

---

## 💻 How to Run Locally

### Method 1: Browser Console (Quickest)
1. Copy the code snippet from any file.
2. Open your preferred web browser.
3. Right-click anywhere on the page and select **Inspect** (or press `F12`) to open the Developer Tools.
4. Click on the **Console** tab.
5. Paste the code and hit `Enter` to run the interactive prompt session.

### Method 2: Local HTML Integration
Create a simple `index.html` file in your project folder and link your script:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JavaScript Core Logic Lab</title>
</head>
<body>
    <h1>Check your browser console to interact with the programs!</h1>
    <!-- Link whichever file you want to test below -->
    <script src="twoSum.js"></script>
</body>
</html>
```

---

## 💡 Key Learnings Applied

*   **Type Management:** Transitioned from native string prompt collection to clean numeric primitives using explicit conversion to prevent unwanted string concatenation errors.
*   **Robust Edge-Case Filtering:** Constructed specific boundary logic to elegantly catch invalid system data inputs (e.g., scores out of bounds or negative age tracking).
