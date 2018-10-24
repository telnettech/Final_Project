// START CLOCK SCRIPT

function startTime() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
    hr = (hr == 0) ? 12 : hr;
    hr = (hr > 12) ? hr - 12 : hr;
    //Add a zero in front of numbers<10
    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("clock").innerHTML = hr + ":" + min + ":" + sec + " " + ap;

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var curWeekDay = days[today.getDay()];
    var curDay = today.getDate();
    var curMonth = months[today.getMonth()];
    var curYear = today.getFullYear();
    var date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;
    document.getElementById("date").innerHTML = date;

    var time = setTimeout(function(){ startTime() }, 500);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

// END CLOCK SCRIPT

// START BACKGROUND IMAGE
// https://css-tricks.com/forums/topic/change-body-background-every-10-sec/

$(function() {
    var body = $('body');
    var backgrounds = [
"url('img/thomas-jensen-596085-unsplash.jpg')",
"url('img/markus-spiske-207946-unsplash.jpg')",
"url('img/markus-spiske-357131-unsplash.jpg')",
"url('img/110-PunchDown-Block.jpg')"
    ];
var current = 0;

function nextBackground() {
body.css(
'background-image',
backgrounds[++current % backgrounds.length]
);

setTimeout(nextBackground, 10000);
}
setTimeout(nextBackground, 10000);
body.css('background-image', backgrounds[0]);
});

// END BACKGROUND IMAGE


// START HAMBURGER MENU  https://www.youtube.com/watch?v=JoU-Tv6jIUI

$(document).ready(function(){
    $('.hamburgerIcon').click(function(){
        console.log(this);
        $(this).toggleClass('open')
    });
});

// END HAMBURGER MENU