


//Display current Date at top of page
function getDate() {
    var currentDate = moment().format('MMMM Do, YYYY');
    console.log("Today's date is " +  currentDate);
    $('#currentDay').text(currentDate)
}

setInterval(getDate,1)

//change color of timeblocks based on what time it is


function timeblockColor() {
    var currentTime = Number(moment().format('HH'));
    console.log("Current Hour is " + currentTime);
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
    console.log(this.siblings("input"));
})