const logButton = document.getElementById("logToday");

const waterInput = document.getElementById("water");
const sleepInput = document.getElementById("sleep");
const exerciseInput = document.getElementById("exercise");

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


logButton.addEventListener("click", function () {

  let water = Number(waterInput.value);
  let sleep = Number(sleepInput.value);
  let exercise = Number(exerciseInput.value);

  // HYDRATION
  if (water >= 8) {
    hydrationStatus.textContent = "Excellent "+ emoji.water;
  } else if (water >= 5) {
    hydrationStatus.textContent = "Okay " + emoji.okay;
  } else {
    hydrationStatus.textContent = "Low " + emoji.warning;
  }

  // SLEEP
  if (sleep >= 7 && sleep <= 9) {
    sleepStatus.textContent = "Healthy +emoji.sleep";
  } else if (sleep >= 5) {
    sleepStatus.textContent = "Needs improvement";
  } else {
    sleepStatus.textContent = "Poor "+ emoji.cross;
  }

  // ACTIVITY
  if (exercise >= 30) {
    activityStatus.textContent = "Great "+ emoji.strong;
  } else if (exercise >= 10) {
    activityStatus.textContent = "Moderate";
  } else {
    activityStatus.textContent = "Too low "+emoji.warning;
  }

  // FEEDBACK
  if (water >= 8 && sleep >= 7 && exercise >= 30) {
    feedback.textContent = "Amazing work today! Keep it up "+ emoji.star;
  } else {
    feedback.textContent = "Good start! Try improving one habit tomorrow "+ emoji.idea;
  }

});