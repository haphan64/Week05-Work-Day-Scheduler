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

var currentHour = parseInt(moment().hour());

console.log(currentHour);

    // Determine if each block is past/present/future

saveButtons.each(function() {
    
    var hourValue = parseInt($(this).data("hour"));

    if ( hourValue > currentHour) {
        
        $("#task-" + hourValue).addClass("future")
        
    } else if ( hourValue < currentHour ) {
        
        $("#task-" + hourValue).addClass("past")

    } else {
        
        $("#task-" + hourValue).addClass("present")

    };
    
    console.log(hourValue);

});