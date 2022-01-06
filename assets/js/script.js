//Display current Date at top of page
function getDate() {
    var currentDate = moment().format('MMMM Do, YYYY');
    console.log("Today's date is " +  currentDate);
    $('#currentDay').text(currentDate)
}
setInterval(getDate,1)

//change color of timeblocks based on what time it is
function timeblockColor() {
    var timeArray = [8,9,10,11,12,13,14,15,16,17]
    var timeBlockElArray = [$('#8am'),$('#9am'),$('#10am'),$('#11am'),$('#12pm'),$('#1pm'),$('#2pm'),$('#3pm'),$('#4pm'),$('#5pm')] 
    var currentTime = Number(moment().format('HH'));
    console.log("Current Hour is " + currentTime);

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
setInterval(timeblockColor(),1000)  //will update color when hour changes without having to refresh

//save button
$('.container').on('click','.saveBtn', function(event) {
    console.log("click");
    console.log(typeof(event.target))
    localStorage.setItem("event", $(event.target).siblings("input").val());
})
var savedBlanks = ["","","","","","","","","",""]
localStorage.getItem("event")