// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentDate = dayjs();
var dateString = currentDate.format("dddd, MMMM D YYYY, h:mm:ss a");
document.getElementById("currentDay").innerHTML = dateString;

// Get a reference to the text areas and save buttons
var textAreas = document.querySelectorAll("textarea");
var saveButtons = document.querySelectorAll("button");


$(".saveBtn").click(function() {
var text = $(this).siblings(".description").val();
var time = $(this).parent().attr("id");
localStorage.setItem(time, text);
})








$("#hour-9 .description ").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-1 .description").val(localStorage.getItem("hour-1"));
$("#hour-2 .description").val(localStorage.getItem("hour-2"));
$("#hour-3 .description").val(localStorage.getItem("hour-3"));
$("#hour-4 .description").val(localStorage.getItem("hour-4"));
$("#hour-5 .description").val(localStorage.getItem("hour-5"));


var hours = ['hour-9', 'hour-10', 'hour-11', 'hour-12', 'hour-1', 'hour-2', 'hour-3', 'hour-4', 'hour-5'];


var currentHour = dayjs().hour();


for (let i = 0; i < hours.length; i++) {
 
  if (hours[i] >= 9 && hours[i] < 17) {
    
    document.getElementById(`hour-${i}`).classList.add('present');
  } else {
    
    if (hours[i] < 9) {
      document.getElementById(`hour-${i}`).classList.add('past');
    } else {
      document.getElementById(`hour-${i}`).classList.add('future');
    }
  }

 
  if (hours[i] === currentHour) {

    document.getElementById(`hour-${i}`).classList.add('present');
  }
}




// I know it's not entirely complete, i need some help with the jquery to add and remove the past present and future class
//can you comment on a way to make it work because i assumed a for loop would be it.


$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
  });