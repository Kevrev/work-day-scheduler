$(document).ready(function() {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

  // Puts localStorage data into its respective boxes upon page load
   function loadLocalStorage() {
      $('.time-block').each(function() {
        var hour = $(this).attr('id');
        var memo = localStorage.getItem(hour);
        $(this).children('.description').val(memo);
      });
    }
  
  loadLocalStorage()
    
  $('.saveBtn').on('click', function() { 
    var hour = $(this).closest('section').attr('id');
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

  function blockUpdater() { 
    var realHour = dayjs().hour();

    // Spliting number (hour) from ID
    $('.time-block').each(function() { 
      var currentBlock = parseInt($(this).attr('id').split('-')[1]);

      if (currentBlock < realHour) {
        $(this).addClass('past');
      } else if (currentBlock === realHour) {
        $(this).addClass('present');
        $(this).removeClass('past');
      } else {
        $(this).addClass('future');
        $(this).removeClass('present');
        $(this).removeClass('past');
      }
    });
  }

  blockUpdater();

  // Variable is set and static upon page load so previousHour is the page time we are leaving behind
  let previousHour = dayjs().hour();

  // Simplifiable but should be accurate to real world hour changes
  setInterval(function() {
    // current hour here is a more accurate representation of the time as it updates witht the interval
    let currentHour = dayjs().hour();
    if (currentHour !== previousHour) {
      blockUpdater();
      previousHour = currentHour;
    }
  // updates every 5 seconds
  }, 5000); 

  // Todo: add clear button
  $('#clear-all').on('click', function() {
    localStorage.clear();
    $('.description').val('')
  });

  // Date and time
  $('#currentDay').text(dayjs().format('h:mmA, dddd, MMMM D, YYYY'));

});


