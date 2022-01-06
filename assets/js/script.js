//Display current Date at top of page
function getDate() {
    var currentDate = moment().format('MMMM Do, YYYY');
    console.log("Today's date is " +  currentDate);
    $('#currentDay').text(currentDate)
}

setInterval(getDate,1)

//change color of timeblocks based on what time it is

// var eightAMEl = $('#8am');
// var nineAMEl = $('#9am');
// var tenAMEl = $('#10am');
// var elevenAMEl = $('#11am');
// var twelvePMEl = $('#12pm');
// var onePMEl = $('#1pm');
// var twoPMEl = $('#2pm');
// var threePMEl = $('#3pm');
// var fourPMEl = $('#4pm');
// var fivePMEl = $('#5pm');


var timeblockArray = [$('#8am'),$('#9am'),$('#10am'),$('#11am'),$('#12pm'),$('#1pm'),$('#2pm'),$('#3pm'),$('#4pm'),$('#5pm')] 

timeblockColor()
function timeblockColor() {
    var timeArray = [8,9,10,11,12,13,14,15,16,17]
    var currentTime = Number(moment().format('HH'));
    console.log("Current Hour is " + currentTime);

    for(var i = 0; i < timeArray.length; i++) {
        if (currentTime < timeArray[i]) {
            timeblockArray[i].addClass('future')
        } else if (currentTime == timeArray[i]) {
            timeblockArray[i].addClass('present')
        } else if (currentTime > timeArray[i]) {
            timeblockArray[i].addClass('past')
        }
    }


    //if "currentTime" is < "scheduledTime"
    //then change class to "future"
    //if "currentTime" is == "scheduledTime"
    //then change class to "present"
    //if "currentTime" is > "scheduledTime"
    //then chnage class to "past"
}

//save button

$('.container').on('click','.saveBtn', function(event) {
    console.log("click");
    console.log(typeof(event.target))
    console.log($(event.target).siblings("input"));
})