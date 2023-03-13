// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function() {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  $('.saveBtn').on('click', function() { 
    var hour = $(this).closest('div').attr('id');
    var memo = $(this).siblings('.description').val();

    localStorage.setItem(hour, memo);

    $('.notification').css("display", "block");
    $('.notification').fadeOut(2300);
  });

  // Testing save all button
  // $('.saveAllBtn').on('click', function () { 
  //   var hour = $(this).closest('div').attr('id');
  //   var memo = $(this).siblings('.description').val();

  //   localStorage.setItem(hour, memo);

  //   $('.notification').css("display", "block");
  //   $('.notification').fadeOut(2300);
  // });


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //

  function blockColor() { 
    var realHour = dayjs().hour();

    // Spliting number (hour) from ID
    $('.time-block').each(function() { 
      var currentBlock = parseInt($(this).attr('id').split('-')[1]);

      if (currentBlock < realHour) {

      }

    });



  }


  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  $('#hour-9').children('.description').val(localStorage.getItem('hour-9'));
  $('#hour-10').children('.description').val(localStorage.getItem('hour-10'));
  $('#hour-11').children('.description').val(localStorage.getItem('hour-11'));
  $('#hour-12').children('.description').val(localStorage.getItem('hour-12'));
  $('#hour-13').children('.description').val(localStorage.getItem('hour-13'));
  $('#hour-14').children('.description').val(localStorage.getItem('hour-14'));
  $('#hour-15').children('.description').val(localStorage.getItem('hour-15'));
  $('#hour-16').children('.description').val(localStorage.getItem('hour-16'));
  $('#hour-17').children('.description').val(localStorage.getItem('hour-17'));



  // TODO: Add code to display the current date in the header of the page.
  $('#currentDay').text(dayjs().format('h:mmA, dddd, MMMM D, YYYY'));

});
