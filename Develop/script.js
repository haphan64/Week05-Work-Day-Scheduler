// Today

$("#currentDay").text(moment().format('dddd, MMMM Do YYYY'));



// console.log(currentHour);

var saveButtons = $(".saveBtn"),
    tasks = JSON.parse(localStorage.getItem("tasks")) || {};

console.log(tasks);


// Load data from local storage into html
saveButtons.each(function() {

    var buttonHour = $(this).data("hour");

    var taskInput = $("#task-" + buttonHour);

    taskInput.val(tasks["task" + buttonHour]);

});


// Save tasks to local storage
saveButtons.on("click", function() {

    var buttonHour = $(this).data("hour");

    var taskInput = $("#task-" + buttonHour);
    var taskValue = taskInput.val();

    tasks["task" + buttonHour] = taskValue;

    localStorage.setItem("tasks",JSON.stringify( tasks));
               
    // console.log(tasks);
})

   

// Get current hour to compare to calendar block

    // Get current hour

var currentHour = moment().hour();

if (currentHour > 12) {
    currentHour = currentHour - 12;
}

    // Determine if each block is past/present/future

// for ( i = 0; i < saveButtons.length; i ++) {
//     var hour = saveButtons[i];
//     var hourData = $(this).data("hour");
//     console.log(hour);
// }

var hour10 = parseInt($("#10").data("hour"));
console.log(hour10 > currentHour);

if ( hour10 > currentHour) {
    console.log ("future");
    $("#task-" + hour10).addClass("future")
    
} else if ( hour10 < currentHour ) {
    $("#task-" + hour10).addClass("past")
} else {
    $("#task-" + hour10).addClass("present")
};