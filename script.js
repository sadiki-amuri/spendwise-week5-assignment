
let totalBudget = 0;       
let totalExpenses = 0;     
let remainingBalance = 0;  

const currencySymbol = "KES"; 
const expensesList = [];      



function calculateBalance() {
    remainingBalance = totalBudget - totalExpenses;
    return remainingBalance;
}

function addExpense(description, amount) {
    // Basic data type sanitation validation
    if (isNaN(amount) || amount <= 0) {
        console.error(` Data Error: Dropping invalid payment entry structure for: "${description}".`);
        return;
    }

    
    expensesList.push({
        description: description,
        amount: amount
    });

    
    totalExpenses += amount;
    
    
    calculateBalance();
    
    console.log(` Expense Logged: "${description}" -> ${amount.toFixed(2)} ${currencySymbol}`);
}


function displayBudgetSummary() {
    console.log("\n==========================================");
    console.log("SPENDWISE REAL-TIME BUDGET ACCOUNTING ");
    console.log("==========================================");
    console.log(`Initial Allowed Limit:  ${totalBudget.toFixed(2)} ${currencySymbol}`);
    console.log(`Aggregated Expenses:    ${totalExpenses.toFixed(2)} ${currencySymbol}`);
    console.log(`Available Net Balance:  ${remainingBalance.toFixed(2)} ${currencySymbol}`);
    console.log("------------------------------------------");
    
    if (remainingBalance < 0) {
        console.log(" BUDGET ALERT: Deficit Warning! You have overspent your parameters.");
    } else if (remainingBalance === 0) {
        console.log(" STATUS ALERT: High Warning level. Funds remaining hit zero balance.");
    } else {
        console.log("FINANCIAL STATUS: OK. Safely working inside established guidelines.");
    }
    console.log("==========================================\n");
}

function runSpendWiseEngine() {
    console.log("Launching SpendWise Engine Interactivity Modules...");

    let rawBudgetInput = prompt("Step 1 of 3: Enter your primary Total Budget limit (Numbers only):");
    
    totalBudget = parseFloat(rawBudgetInput);

    if (isNaN(totalBudget) || totalBudget <= 0) {
        console.log(" Setup Terminated: Invalid structural number provided for budget target. Please reload.");
        return;
    }

    calculateBalance();
    console.log(`Pipeline Initialized: Budget confirmed at ${totalBudget} ${currencySymbol}.`);

  
    let exp1Name = prompt("Step 2 of 3: Name your first major expense (e.g., Rent):");
    let exp1Cost = parseFloat(prompt(`Enter the total budget expense cost amount for "${exp1Name}":`));
    addExpense(exp1Name, exp1Cost);

    let exp2Name = prompt("Step 3 of 3: Name your second expense item (e.g., Groceries):");
    let exp2Cost = parseFloat(prompt(`Enter the total budget expense cost amount for "${exp2Name}":`));
    addExpense(exp2Name, exp2Cost);

    displayBudgetSummary();
}


window.onload = runSpendWiseEngine;
