var audio=new Audio("clock alarm.mpeg");
audio.loop=true;

var time=document.getElementById('clock');
var alarmTime=null;
var alarmTimeout=null;


function updatetime(){
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    time.innerHTML =  h + ":" + m + ":" + s;
}

setInterval(updatetime,1000);


// add zero in front of numbers < 10
function checkTime(i) {
    if (i < 10) {i = "0" + i};  
    return i;
}

function setAlarmTime(value){
    alarmTime=value;
    
}

function setAlarm(){
    if(alarmTime){
        var current=new Date();
        var timeToAlarm=new Date(alarmTime);

        if(timeToAlarm>current){
            var timeout=timeToAlarm.getTime()-current.getTime();
            alarmTimeout=setTimeout(()=> audio.play(),timeout);
            alert('Alarm is Set');
        }
    }
    
}

function clearAlarm(){
    audio.pause();
    if (alarmTimeout){
        clearTimeout(alarmTimeout);
        alert('Alarm is Cleared')
    }
}




