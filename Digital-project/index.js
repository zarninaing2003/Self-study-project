// function showTime(){
//     var date = new Date();
//     var h = date.getHours();
//     var m  =date. getMinutes();
//     var s = date.getSeconds();

//     var session  = "AM";

//     if(h==0){
//         h=12;
//     }
//     if(h>12){
//         h = h-12;
//         // h= 13-12 = 1
//          session = "PM";
//     }

//     h = (h<10) ? "0" + h : h;
//     h = (m<10) ? "0" + m : m;
//     h=  (s<10) ? "0" + s : s;

//     var time =  h +":" + m + ":" + s + " " + session;
//     document.getElementById("myClockDisplay").innerHTML = time;
//     setTimeout(showTime,1000);
// }

// showTime();

