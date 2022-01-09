//Display current Date at top of page
function getDate() {
    var currentDate = moment().format('MMMM Do, YYYY');
    console.log("Today's date is " +  currentDate);
    $('#currentDay').text(currentDate)
}
getDate()

//change color of timeblocks based on what time it is
function timeblockColor() {
    var timeArray = [8,9,10,11,12,13,14,15,16,17]
    var timeBlockElArray = [$('#8am'),$('#9am'),$('#10am'),$('#11am'),$('#12pm'),$('#1pm'),$('#2pm'),$('#3pm'),$('#4pm'),$('#5pm')] 
    var currentTime = Number(moment().format('HH'));
    console.log("Test")

    for(var i = 0; i < timeArray.length; i++) {
        if (currentTime < timeArray[i]) {               //if "currentTime" is "scheduledTime"   
            timeBlockElArray[i].addClass('future')        //then change class to "future"
        } else if (currentTime == timeArray[i]) {       //if "currentTime" is == "scheduledTime"
            timeBlockElArray[i].addClass('present')       //then change class to "present"
        } else if (currentTime > timeArray[i]) {        //if "currentTime" is > "scheduledTime"
            timeBlockElArray[i].addClass('past')          //then chnage class to "past"
        }
    }
}
setInterval(timeblockColor(), 1000)  //will update color when hour changes without having to refresh

// var savedEvents = ["","","","","","","","","",""]

//save button
$('.container').on('click','.save', function(event) {   //uses event delegation to save value of input when clicking save icon
    console.log($(event.target))
    var index = $(event.target).parents().siblings("input").attr("data-index")      //used to recieve position of event 
    var userInput = $(event.target).parents().siblings("input").val()       //stores what user typed into variable
    console.log("The user inputted: " + userInput)
    savedEvents.splice(index, 1, userInput)     //creates new array with values meant to be saved
    console.log(savedEvents)
    localStorage.setItem("savedEvents", JSON.stringify(savedEvents))    //saves array as string in localstorage
})
var savedEvents = JSON.parse(localStorage.getItem("savedEvents")) || ["","","","","","","","","",""]    //retrieves stored array or creates a new one if blank
console.log(savedEvents)

renderSavedEvents()
function renderSavedEvents() {
    for (var i = 0; i<savedEvents.length; i++) {
        var event = savedEvents[i];
        console.log(event)
        $('.container').children().eq(i).children('input').attr('value', event)     //sets value to what is saved in local storage
       
    }
}
