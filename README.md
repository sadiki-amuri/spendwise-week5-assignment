# SpendWise - Budget & Expense Processing Tracker

SpendWise is a lightweight front-end web application that tracks individual spending limits against real-time operational expenses. Originally established as a static visual layout, this current framework introduces an interactive JavaScript data processing foundation that handles data storage, calculations, and evaluation tracking dynamically.

## What Your SpendWise Project Does
* Initialized via synchronous user-driven prompt capture flows.
* Automatically records fixed target baseline financial boundaries.
* Safely inputs individual tracking transactions, updating memory tracking objects securely.
* Evaluates data integrity boundaries, checking inputs for numerical correctness.
* Returns readable metrics tracking financial statuses via the browser console developer console tools.

## The JavaScript Concepts Implemented

### 1. How Variables Are Being Used
`let`: Leveraged dynamically for fluid state variables (`totalBudget`, `totalExpenses`, `remainingBalance`) which update based on calculations and dynamic values tracking user interactions.
`const`: Applied to fixed configuration properties (`currencySymbol`) and complex composite tracking arrays (`expensesList`) to prevent reference mutations.

### 2. How User Input Is Collected
* User data collections are completed natively using the synchronous `prompt()` window methods.
* String collection sequences are parsed through explicit casting methods (`parseFloat()`) to safely normalize standard textual variables directly into workable JS numeric float data values before analytical tracking calculations run.

### 3. How Calculations Are Performed
* Fundamental mathematical operators (`-`, `+=`) manipulate active balances.
* The application processes logic via `totalBudget - totalExpenses` tracking structures to derive final remaining limits.
* Formatted currency visualization filters are handled via the native prototype method `.toFixed(2)`.

### 4. How Functions Help Organize the Code
The source program divides system tasks clean into individual, single-responsibility functions:
* `calculateBalance()`: Handles background balance processing.
* `addExpense()`: Validates transaction items, pushes items into memory arrays, updates the total spent, and triggers the recalculator.
* `displayBudgetSummary()`: Separates application styling output flows from active tracking computations.
* `runSpendWiseEngine()`: Orchestrates sequence pipelines on startup safely.
