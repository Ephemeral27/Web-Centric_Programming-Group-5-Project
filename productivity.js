/*Get The Date */
var date = new Date();

var currentMonth = date.getMonth();
var currentDay = date.getDay();
var currentDate = date.getDate();
var currentYear = date.getFullYear();

/*Important for dates */
var months = [
    "January", 
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

/*Set the correct month */
var title = document.getElementById("title");
title.innerHTML = months[currentMonth];

/*update calendar info */
var habitTitle = document.getElementById("habitTitle");
habitTitle.onclick = function(){
    let habits = prompt("Whats your habit", habitTitle.innerHTML);
    if(habits.length == 0){
        habitTitle.innerHTML = "Click to set your habit";
    } else{
        habitTitle.innerHTML = habits;
    }
}

/*SET THE TOTAL DAYS*/
var daysInTheMonthList = [
    31, // January
    28, // February
    31, // March
    30, // April
    31, // May
    30, // June
    31, // July
    31, // August
    30, // September
    31, // October
    30, // November
    31  // December
];

var daysInThisMonth = daysInTheMonthList[currentMonth];
var daysCompleted = 0;
var totalDays = document.getElementById("totalDays");
totalDays.innerHTML = "0/"+ daysInThisMonth;
/*SET UP THE CALENDAR DAYS*/
var dayCount = 0;
var rowCount = 0;
var days = document.getElementsByClassName("days");

for(var i=0; i<days.length; i++){
    var day = days[rowCount].getElementsByClassName("day");
    for(var j=0; j<day.length; j++){
        if(dayCount == currentDate -1){
            //add a border to the current date
            day[j].setAttribute("style", "color:rgb(234,1,144);");
            day[j].setAttribute("style","border:3px solid rgb(191,219,247)");
            //day[j].style.color = "rgb(234,1,144)";
            //day[j].style.border = "2px solid yellow";
        }
        //update the correct date number and id and hide any excess numbers
        if (dayCount <daysInThisMonth){
            day[j].innerHTML = dayCount +1;
            day[j].setAttribute("id","day" + (dayCount+1));
            dayCount++;//repeat for every day
        }
        else{
            day[j].innerHTML = "";
            day[j].setAttribute("style","background-color:#111827;");
        }
    }
    rowCount++;
}

/*INITIALIZE COMPLETED ARRAY */
var completed = new Array(31);
for (var i=0; i< dayCount; i++){
    var tempString = ""+ (currentMonth +1)+"-"+(i+1)+"-"+currentYear;
    console.log("storing date"+ tempString);
    var tempDay = localStorage.getItem(tempString);
    console.log(tempDay);
    if(tempDay == null|| tempDay == "false"){
        localStorage.setItem(tempString, "false");
    }
    else if(tempDay == "true") {
        daysCompleted++;
    }
    //totalDays.innerHTML = daysCompleted + "/"+daysInThisMonth;
    
}

console.log("completed array: "+completed);
console.log("total days completed: "+daysCompleted);

/*CHECK STORAGE AND UPDATE COMPLETED ARRAY */
for(var i=0; i<currentDate;i++){
//for (var i=0; i<dayCount;i++){
    var tempString = "" + (currentMonth +1) + "-" + (i+1) + "-" + currentYear;
    console.log(tempString);

    var chosenDay = localStorage.getItem(tempString);
    console.log(i+1+ ": "+chosenDay);
    var chosenDayDiv = document.getElementById("day"+(i+1));
    if (chosenDay ==="true"){
        chosenDayDiv.style.backgroundColor = "pink";
    }
    else if(chosenDay === "false"){
        chosenDayDiv.style.backgroundColor = "white";
    }
}

/*UPDATE COMPLETED ON CALENDAR*/
var dayDivs = document.querySelectorAll(".day");
for (var i=0; i<currentDate;i++){
    dayDivs[i].onclick = function (e){
        var num = e.target.innerText;
        var selectedDate = document.getElementById(e.target.id);
        var storageString = ""+(currentMonth + 1)+"-"+ num+"-"+currentYear;

        if(localStorage.getItem(storageString)==="false"){
            selectedDate.style.backgroundColor = "pink";
            localStorage.setItem(storageString, true);
            daysCompleted++;
            //daysCompleted--;
        }
        else if (localStorage.getItem(storageString)==="true"){
            selectedDate.style.backgroundColor = "White";
            //this.localStorage.setItem(storageString,false);
            localStorage.setItem(storageString,false);
            daysCompleted--;
            //daysCompleted++;
        }

        //totalDays.innerHTML = daysCompleted + "/"+dayCount;
        totalDays.innerHTML = daysCompleted + "/" + daysInThisMonth;
        console.log(daysCompleted, currentDate);
        if(daysCompleted === currentDate){
            alert("great progress");
        }
    }
}
//check if the calendar work until the 29th tomorrow. 
//add the colors so it is the old color when they are not clicked, then maybe a light blue when clicked

/*RESET BUTTON*/
var resetButton = document.getElementById("resetButton");
resetButton.onclick = function(){
    for(var i=0;i<dayCount; i++){
        var tempStrings = ""+(currentMonth+1)+"-"+(i+1)+"-"+currentYear;
        console.log(tempString);
        localStorage.setItem(tempStrings, "false");
        var curDay = document.getElementById("day"+(i+1));
        curDay.style.backgroundColor = "white";
    }
    daysCompleted = 0;
    totalDays.innerHTML = daysCompleted + "/"+daysInThisMonth;
};

//TODO LIST
document.addEventListener("DOMContentLoaded", ()=>{
    //added
    //toggleEmptyState();
    //continue
    const taskInput = document.getElementById("task-input");
    //const addTaskBtn = document.getElementById("add-task-btn");
    const addTaskBtn = document.getElementById("add-task");
    const taskList = document.getElementById("task-list");

    const emptyImage = document.querySelector('.empty-image');
    const todosContainer = document.querySelector(".todos-container");

    const toggleEmptyState = () => {
        todosContainer.style.width = taskList.children.length> 0? '100%' : '50%';
        if (!emptyImage) return; // stops if emptyImage is null
        emptyImage.style.display = taskList.children.length === 0 ? "block" : "none";
    };

    const addTask = (event) => {
        event.preventDefault();
        const taskText = taskInput.value.trim();
        if(!taskText){
            return;
        }
        const li = document.createElement("li");
        li.innerHTML = `
        <input type="checkbox" class="checkbox">
        <span>${taskText}</span>
        <div class="task-buttons">
            <button class="edit-btn"><i class="fa-solid fa-pen"></i></button>
            <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>
        </div>
        `;
        const checkbox = li.querySelector('.checkbox');
        const editBtn = li.querySelector('.edit-btn');
        editBtn.addEventListener('click', ()=>{
            if(!checkbox.checked){
                taskInput.value = li.querySelector('span').textContent;
                li.remove();
                toggleEmptyState();
            }
        });

        li.querySelector('.delete-btn').addEventListener('click',()=>{
            li.remove();
            toggleEmptyState();
        })

        //li.textContent = taskText;
        taskList.appendChild(li);
        taskInput.value = '';
        //added
        toggleEmptyState();
    };

    addTaskBtn.addEventListener("click",addTask);
    taskInput.addEventListener("keypress", (e)=>{
        if(e.key ==="Enter"){
            addTask(e);
        }
    })
})


/*  POMODORO */
const POMODORO = 1500;
const SHORT_BREAK = 300;
const LONG_BREAK = 1500;

const timerButtons = document.querySelectorAll(".timer-btn");
const circle = document.querySelector(".circle");
const innerCircle = document.querySelector(".inner-circle");
const countdownElement = document.querySelector(".countdown h1");
const playPauseElement = document.querySelector(".play-pause");

let timer;
let countdown;
let currentDuration;
let isPaused = true;
let isStarted = false;
let endTime;
let pausedTimeRemaining;

/*const COLORS = {
    [POMODORO]:{
        bg:"rgb(230, 203, 207)",
        border: "rgb(164, 19, 60)",
        shadow: "rgba(149, 9, 41,0.7)",
    },
    [SHORT_BREAK]: {
        bg:"rgb(191, 219, 247)",
        border: "rgb(71, 18, 107)",
        shadow: "rgba(53, 13, 79, 0.7)",
    },
    [SHORT_BREAK]: {
        bg:"rgb(147, 197, 253)",
        border: "rgb(17, 24, 39)",
        shadow: "rgba(10, 14, 23, 0.7)",
    },

};*/
const COLORS = {
    [POMODORO]: {
        //bg:"rgb(230, 203, 207)",
        //border: "rgb(164, 19, 60)",
        //shadow: "rgba(149, 9, 41,0.7)",
    },
    [SHORT_BREAK]: {
        //bg:"rgb(147, 197, 253)",
        //border: "rgb(17, 24, 39)",
        //shadow: "rgba(10, 14, 23, 0.7)",
    },
    [LONG_BREAK]: {
       // bg:"rgb(191, 219, 247)",
        //border: "rgb(71, 18, 107)",
        //shadow: "rgba(53, 13, 79, 0.7)",
    },
};

function startTimer(){
    if (!isStarted){
        isStarted = true;
        endTime = Date.now() + countdown *1000;

        timer = setInterval(()=>{
            if(!isPaused){
                const currentTime = Date.now();
                const remainingTime = Math.ceil((endTime - currentTime)/1000);

                if(remainingTime <= 0){
                    clearInterval(timer);
                    handleTimerEnd();
                    return;
                }

                countdown = remainingTime;
                updateDisplay(countdown);
                const progress = (countdown/currentDuration) * 360;
                updateInnerCircle(progress);
            }
        },1000);
    }
}

function handleTimerEnd(){
    countdown = 0;
    playPauseElement.style.display = "none";
    updateDisplay(0);
    updateInnerCircle(0);

    setTimeout(()=> {
        resetTimer(POMODORO);
        currentDuration = POMODORO;
        countdown = POMODORO;
        isPaused = true;
        playPauseElement.textContent = "Play";
    },5000);
}

function updateDisplay(timeInSeconds){
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    countdownElement.textContent = `${minutes}:${seconds <10 ? "0" : ""}${seconds}`;
}
function updateInnerCircle(progress){
    const color =   COLORS[currentDuration].bg;
    innerCircle.style.background = `conic-gradient(${color} ${progress}deg, transparent 0%)`
}

function resetTimer(duration){
    clearInterval(timer);
    isStarted = false;
    isPaused = true;

    countdown = duration;
    currentDuration = duration;

    updateDisplay(duration);
    playPauseElement.style.display = "block";
    playPauseElement.textContent = "Play";

    /*const {bg, border, shadow} = COLORS[duration];
    innerCircle.style.background = `conic-gradient(${bg} 360deg, transparent 0%)`;
    circle.style.borderColor = border;
    circle.style.boxShadow = `0 0 40px 20px ${shadow}`;*/
}

timerButtons.forEach((button)=>{
    button.addEventListener("click", ()=>{
        timerButtons.forEach((btn)=> btn.classList.remove("active"));
        button.classList.add("active");

        const newDuration = parseInt(button.dataset.time);
        resetTimer(newDuration);
    });
});

playPauseElement.addEventListener("click", ()=>{
    //buttonSound.play();
    isPaused = !isPaused;
    playPauseElement.textContent = isPaused ? "Play" : "Pause";

    if (isPaused){
        pausedTimeRemaining = Math.ceil((endTime - Date.now())/1000);
    }
    else{
        endTime = Date.now() + pausedTimeRemaining *1000;
    }

    if(!isStarted){
        startTimer();
    }
});
resetTimer(POMODORO);

