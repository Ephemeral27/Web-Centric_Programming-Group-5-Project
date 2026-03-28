const logButton = document.getElementById("logToday");

const waterInput = document.getElementById("water");
const sleepInput = document.getElementById("sleep");
const exerciseInput = document.getElementById("exercise");
const mealsInput = document.getElementById("meals");

const waterError = document.getElementById("waterError");
const sleepError = document.getElementById("sleepError");
const exerciseError = document.getElementById("exerciseError");
const mealsError = document.getElementById("mealsError");

const hydrationStatus = document.getElementById("hydrationStatus");
const sleepStatus = document.getElementById("sleepStatus");
const activityStatus = document.getElementById("activityStatus");

const feedback = document.getElementById("feedback");

const emoji = {
  water: "\u{1F4A7}",
  strong: "\u{1F4AA}",
  idea: "\u{1F4A1}",
  star: "\u{1F31F}",
  warning: "\u{26A0}",
  sleep: "\u{1F634}",
  cross: "\u{274C}",
  okay: "\u{1F44D}"
};

// REAL-TIME VALIDATION
waterInput.addEventListener("input", validateWater);
sleepInput.addEventListener("input", validateSleep);
exerciseInput.addEventListener("input", validateExercise);
mealsInput.addEventListener("input", validateMeals);

function validateWater() {
  const value = waterInput.value.trim();
  const water = Number(value);

  if (value === "") {
    waterError.textContent = "Water amount is required.";
    waterInput.classList.add("input-error");
    return false;
  } else if (water < 0) {
    waterError.textContent = "Water amount cannot be negative.";
    waterInput.classList.add("input-error");
    return false;
  } else {
    waterError.textContent = "";
    waterInput.classList.remove("input-error");
    return true;
  }
}

function validateSleep() {
  const value = sleepInput.value.trim();
  const sleep = Number(value);

  if (value === "") {
    sleepError.textContent = "Sleep hours are required.";
    sleepInput.classList.add("input-error");
    return false;
  } else if (sleep < 0) {
    sleepError.textContent = "Sleep hours cannot be negative.";
    sleepInput.classList.add("input-error");
    return false;
  } else {
    sleepError.textContent = "";
    sleepInput.classList.remove("input-error");
    return true;
  }
}

function validateExercise() {
  const value = exerciseInput.value.trim();
  const exercise = Number(value);

  if (value === "") {
    exerciseError.textContent = "Exercise minutes are required.";
    exerciseInput.classList.add("input-error");
    return false;
  } else if (exercise < 0) {
    exerciseError.textContent = "Exercise minutes cannot be negative.";
    exerciseInput.classList.add("input-error");
    return false;
  } else {
    exerciseError.textContent = "";
    exerciseInput.classList.remove("input-error");
    return true;
  }
}

function validateMeals() {
  const value = mealsInput.value.trim();

  if (value !== "" && !/[a-zA-Z]/.test(value)) {
    mealsError.textContent = "Meal notes should contain letters.";
    mealsInput.classList.add("input-error");
    return false;
  } else {
    mealsError.textContent = "";
    mealsInput.classList.remove("input-error");
    return true;
  }
}

// LOG BUTTON
logButton.addEventListener("click", function () {
  const waterValid = validateWater();
  const sleepValid = validateSleep();
  const exerciseValid = validateExercise();
  const mealsValid = validateMeals();

  if (!waterValid || !sleepValid || !exerciseValid || !mealsValid) {
    return;
  }

  let water = Number(waterInput.value);
  let sleep = Number(sleepInput.value);
  let exercise = Number(exerciseInput.value);

  // HYDRATION
  if (water >= 8) {
    hydrationStatus.textContent = "Excellent " + emoji.water;
  } else if (water >= 5) {
    hydrationStatus.textContent = "Okay " + emoji.okay;
  } else {
    hydrationStatus.textContent = "Low " + emoji.warning;
  }

  // SLEEP
  if (sleep >= 7 && sleep <= 9) {
    sleepStatus.textContent = "Healthy " + emoji.sleep;
  } else if (sleep >= 5) {
    sleepStatus.textContent = "Needs improvement";
  } else {
    sleepStatus.textContent = "Poor " + emoji.cross;
  }

  // ACTIVITY
  if (exercise >= 30) {
    activityStatus.textContent = "Great " + emoji.strong;
  } else if (exercise >= 10) {
    activityStatus.textContent = "Moderate";
  } else {
    activityStatus.textContent = "Too low " + emoji.warning;
  }

  // FEEDBACK
  if (water >= 8 && sleep >= 7 && exercise >= 30) {
    feedback.textContent = "Amazing work today! Keep it up " + emoji.star;
  } else {
    feedback.textContent = "Good start! Try improving one habit tomorrow " + emoji.idea;
  }
});