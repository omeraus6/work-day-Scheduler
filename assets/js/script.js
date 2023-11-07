// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

   //add date for today
  var reformatDate = dayjs().format('dddd, MMMM D');
  $('#currentDay').text(reformatDate);

  //return the event from localstorage and show them in sheduler
  for(var i=1;i<=12;i++)
  {

    var data= $.parseJSON(localStorage.getItem("hour-"+i));
    $('#hour-'+i).css("background-color", "#77dd77");
    
    if(data !== null && data != "")
    {
      
      $('#hour-'+i).find('textarea').val($.parseJSON(localStorage.getItem("hour-"+i)));

      if(parseInt(dayjs().format("hh")) > i)
      {
        $('#hour-'+i).css("background-color", "#d3d3d3");
      }
      else if(parseInt(dayjs().format("hh")) == i)
      {
        $('#hour-'+i).css("background-color", "#ff6961");
      }
    }
    else
    {
      $('#hour-'+i).css("background-color", "#77dd77");
    }
    
  }


  // save button "addEventListener"
  $('button').on('click', function (event) {
    event.preventDefault();
    var attr= this.id;

    for(var i=1;i<=12;i++)
    {
        if(attr == "hour"+i)
        {
          var storedata = $('#hour-'+i).find('textarea').val();
          localStorage.setItem('hour-'+i,JSON.stringify(storedata));
          $('#savemsg').text("Appoiment add to localstorage");
          $('#savemsg').css('color' , '#dc3545');
          
        }
    }


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
    // TODO: Add code to display the current date in the header of the page.
  });

});


