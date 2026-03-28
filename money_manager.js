// money manager
const calculateButton = document.getElementById("calculate");
const incomeInput = document.getElementById("income");
const expenseAmounts = document.querySelectorAll(".expense-amount");
const totalExpensesSpan = document.getElementById("totalExpenses");
const remainingBudgetSpan = document.getElementById("remainingBudget");

calculateButton.addEventListener("click", function () {
  let income = Number(incomeInput.value);
  let totalExpenses = 0;

  for (let i = 0; i < expenseAmounts.length; i++) {
    totalExpenses += Number(expenseAmounts[i].value);
  }

  let remainingBudget = income - totalExpenses;

  totalExpensesSpan.textContent = totalExpenses;
  remainingBudgetSpan.textContent = remainingBudget;
});
