window.onload = function (){
var seconds = "00";
var tens = "00";

    // selector

    var appendTens = document.getElementById("tens");
    var appendSeconds =  document.getElementById("seconds");

    var btnStart = document.getElementById("btn-start");
    var btnStop = document.getElementById("btn-stop");
    var btnReset =  document.getElementById("btn-reset");

    btnStart.onclick = function(){
        InterVal = setInterval(startTimer, 10);
    };
// Stop Button 
    btnStop.onclick = function(){
        clearInterval(InterVal)
    };

    btnReset.onclick = function(){
        clearInterval(InterVal);
        tens = "00";
        seconds ="00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
    };

    function startTimer(){
        tens++;//plus 1 every 10 millions
        if( tens<= 9){
            appendTens.innerHTML = "0" + tens;
        }else{
            appendTens.innerHTML = tens;
        }
        if(tens> 99){
            console.log("seconds");
            seconds++; //plus 1 every tens>99
            appendSeconds.innerHTML =  "0" +seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }
        if(seconds>9){
            appendSeconds.innerHTML = seconds;
        }
    }
}