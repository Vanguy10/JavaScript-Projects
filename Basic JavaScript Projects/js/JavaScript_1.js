var day;
switch (new Date().getDay()) {
    case 0: day="Sunday"; break;
    case 1: day="Monday"; break;
    case 2: day="Tuesday"; break;
    case 3: day="Wednesday"; break;
    case 4: day="Thursday"; break;
    case 5: day="Friday"; break;
    case 6: day="Saturday"; break;
}
document.getElementById("demo").innerHTML="Today is "+day;

document.write(3+"3"+3);

x=5;
document.write(5);
var x=10;

function Hello_World_Function() {
    var A=document.getElementsByClassName("Click");
    A[0].innerHTML="The text has changed";
}

var c=document.getElementById("ID_Name");
var ctx=c.getContext("2d");
ctx.font="30px Arial";
ctx.fillText("Hello World", 10, 50);

var c=document.getElementById("ID_Name");
var ctx= c.getContext("2d");
var grd=ctx.createLinearGradient(0,0,170,0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");
ctx.fillStyle=grd;
ctx.fillRect(20, 20, 150, 100);