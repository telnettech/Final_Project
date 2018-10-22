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

// var images=['../img/thomas-jensen-596085-unsplash.png',
//             '../img/markus-spiske-207946-unsplash.png',
//             '../img/markus-spiske-357131-unsplash.png',
//             '../img/110-PunchDown-Block.jpg'
//           ];
//
// for (var = i; i<images.length; i++){
//   	body.style.backgroundImage(url(images[i]));
// }


// var url=0;
//
// setInterval(function(){
//    url+=1;
//   if(url==4){
//     url=0;
//   }
//   document.body.style.backgroundImage = 'url('+images[url]+')';
//   // document.body.style.backgroundRepeat = "no-repeat";
// },3000);

// END BACKGROUND IMAGE
