/* Code for Hamburger Menu */

var wrapperMenu = document.querySelector('.wrapper-menu');

wrapperMenu.addEventListener('click', function(){
  wrapperMenu.classList.toggle('open');
})


/*Code for Atomic Clock callback*/

function getTime(zone, success) {
    var url = 'http://json-time.appspot.com/time.json?tz=' + zone,
        ud = 'json' + (+new Date());
    window[ud]= function(o){
        success && success(new Date(o.datetime));
    };
    document.getElementsByTagName('head')[0].appendChild((function(){
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.src = url + '&callback=' + ud;
        return s;
    })());
}

getTime('GMT', function(time){
    // This is where you do whatever you want with the time:
    alert(time);
});

