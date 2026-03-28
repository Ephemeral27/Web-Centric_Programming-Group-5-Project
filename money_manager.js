const addExpenseButton = document.getElementById("addExpense");
const calculateButton = document.getElementById("calculate");
const incomeInput = document.getElementById("income");
const incomeError = document.getElementById("incomeError");

const expenseList = document.getElementById("expenseList");
const totalExpensesSpan = document.getElementById("totalExpenses");
const remainingBudgetSpan = document.getElementById("remainingBudget");

// REAL-TIME VALIDATION FOR INCOME
incomeInput.addEventListener("input", validateIncome);

function validateIncome() {
  const value = incomeInput.value.trim();
  const income = Number(value);

  if (value === "") {
    incomeError.textContent = "Income is required.";
    incomeInput.classList.add("input-error");
    return false;
  } else if (income < 0) {
    incomeError.textContent = "Income cannot be negative.";
    incomeInput.classList.add("input-error");
    return false;
  } else {
    incomeError.textContent = "";
    incomeInput.classList.remove("input-error");
    return true;
  }
}

// REAL-TIME VALIDATION FOR EXPENSES
expenseList.addEventListener("input", function (event) {
  const row = event.target.closest(".expense");

  if (event.target.classList.contains("expense-category")) {
    validateCategory(row);
  }

  if (event.target.classList.contains("expense-amount")) {
    validateAmount(row);
  }
});

function validateCategory(row) {
  const categoryInput = row.querySelector(".expense-category");
  const categoryError = row.querySelector(".category-error");
  const value = categoryInput.value.trim();

  if (value === "") {
    categoryError.textContent = "Category is required.";
    categoryInput.classList.add("input-error");
    return false;
  } else if (!/[a-zA-Z]/.test(value)) {
    categoryError.textContent = "Category must contain letters.";
    categoryInput.classList.add("input-error");
    return false;
  } else {
    categoryError.textContent = "";
    categoryInput.classList.remove("input-error");
    return true;
  }
}

function validateAmount(row) {
  const amountInput = row.querySelector(".expense-amount");
  const amountError = row.querySelector(".amount-error");
  const value = amountInput.value.trim();
  const amount = Number(value);

  if (value === "") {
    amountError.textContent = "Amount is required.";
    amountInput.classList.add("input-error");
    return false;
  } else if (amount < 0) {
    amountError.textContent = "Amount cannot be negative.";
    amountInput.classList.add("input-error");
    return false;
  } else {
    amountError.textContent = "";
    amountInput.classList.remove("input-error");
    return true;
  }
}

// ADD EXPENSE ROW
addExpenseButton.addEventListener("click", function () {
  const newExpense = document.createElement("div");
  newExpense.className = "expense";

  newExpense.innerHTML = `
    <div class="field-group">
      <input type="text" class="expense-category" placeholder="Category">
      <small class="error category-error"></small>
    </div>

    <div class="field-group">
      <input type="number" class="expense-amount" min="0" placeholder="Amount">
      <small class="error amount-error"></small>
    </div>

    <button type="button" class="deleteExpense">Delete</button>
  `;

  expenseList.appendChild(newExpense);
});

// DELETE EXPENSE ROW
expenseList.addEventListener("click", function (event) {
  if (event.target.classList.contains("deleteExpense")) {
    const expenseRow = event.target.closest(".expense");
    expenseRow.remove();

    if (expenseList.children.length === 0) {
      addExpenseButton.click();
    }
  }
});

// CALCULATE BUDGET
calculateButton.addEventListener("click", function () {
  const rows = document.querySelectorAll(".expense");
  let totalExpenses = 0;
  let allValid = true;

  const incomeValid = validateIncome();
  if (!incomeValid) {
    return;
  }

  const income = Number(incomeInput.value);

  for (let i = 0; i < rows.length; i++) {
    const categoryValid = validateCategory(rows[i]);
    const amountValid = validateAmount(rows[i]);

    if (!categoryValid || !amountValid) {
      allValid = false;
    } else {
      const amount = Number(rows[i].querySelector(".expense-amount").value);
      totalExpenses += amount;
    }
  }

  if (!allValid) {
    return;
  }

  totalExpensesSpan.textContent = totalExpenses;
  remainingBudgetSpan.textContent = income - totalExpenses;
});