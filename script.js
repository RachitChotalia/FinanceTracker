document.addEventListener('DOMContentLoaded', () => {
    // Expense Tracker
    const expenseForm = document.getElementById('expense-form');
    const expenseTableBody = document.querySelector('.expense-table tbody');
    const totalExpensesElement = document.getElementById('total-expenses');
    let totalExpenses = 0;

    if (expenseForm) {
        expenseForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const expenseName = document.getElementById('expense-name').value;
            const expenseAmount = parseFloat(document.getElementById('expense-amount').value);

            if (expenseName && !isNaN(expenseAmount)) {
                totalExpenses += expenseAmount;
                totalExpensesElement.textContent = totalExpenses.toFixed(2);
                const row = expenseTableBody.insertRow();
                row.innerHTML = `<td>${expenseName}</td><td>$${expenseAmount.toFixed(2)}</td>`;
                expenseForm.reset();
            }
        });
    }

    // Budget Tracker
    const budgetForm = document.getElementById('budget-form');
    const budgetTableBody = document.querySelector('.budget-table tbody');

    if (budgetForm) {
        budgetForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const budgetName = document.getElementById('budget-name').value;
            const budgetAmount = parseFloat(document.getElementById('budget-amount').value);

            if (budgetName && !isNaN(budgetAmount)) {
                const row = budgetTableBody.insertRow();
                row.innerHTML = `<td>${budgetName}</td><td>$${budgetAmount.toFixed(2)}</td>`;
                budgetForm.reset();
            }
        });
    }

    // Savings Tracker
    const savingsForm = document.getElementById('savings-form');
    const savingsTableBody = document.querySelector('.savings-table tbody');

    if (savingsForm) {
        savingsForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const savingsName = document.getElementById('savings-name').value;
            const savingsAmount = parseFloat(document.getElementById('savings-amount').value);

            if (savingsName && !isNaN(savingsAmount)) {
                const row = savingsTableBody.insertRow();
                row.innerHTML = `<td>${savingsName}</td><td>$${savingsAmount.toFixed(2)}</td>`;
                savingsForm.reset();
            }
        });
    }
});