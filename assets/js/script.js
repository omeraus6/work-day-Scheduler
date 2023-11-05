var reformatDate = dayjs().format('dddd, MMMM D');
$('#currentDay').text(reformatDate);

//var advancedFormat = require('dayjs/plugin/advancedFormat');
//dayjs().extend(advancedFormat);

//var reformatDate = dayjs('2020-11-03').format('dddd, MMMM D YYYY, h:mm:ss a');

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  
  for(var i=1;i<=12;i++)
  {
    if($.parseJSON(localStorage.getItem("hour-"+i))!== null)
    {
      $('#hour-'+i).find('textarea').val($.parseJSON(localStorage.getItem("hour-"+i)));
      
    }
  }

  $('button').on('click', function (event) {
    event.preventDefault();
    var attr= this.id;
    //var divattr= $('<div>').id('hour-9');

    for(var i=1;i<=12;i++)
    {
      //if(i<=5 || i>=9)
      //{
        if(attr == "hour"+i)
        {
          alert('helloooo: ' + attr);
          //$('#hour-'+i).find('textarea').val(localStorage.setItem(attr,JSON.stringify(storedata)));
          var storedata = $('#hour-'+i).find('textarea').val();
          localStorage.setItem('hour-'+i,JSON.stringify(storedata));
        }
    }


        
        //JSON.parse(localStorage.getItem("index"+index));
        //para.textContent = JSON.parse(localStorage.getItem("index"+ i)) ;
        //localStorage.setItem(attr,JSON.stringify(storedata));
        //alert($('<div>').id =);
      //}
     // if(attr == "hour9")
      //{
        //alert("heloooo button");
      //}

      //$("<div>").each(function(){
        //if($(this).attr("id")== attr){
         //alert('helooooooo div');
        //}
       //});

  //}
  
  




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


