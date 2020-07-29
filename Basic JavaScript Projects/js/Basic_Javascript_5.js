function my_Function() {
    document.getElementById("Test").innerHTML=0/0;
    }

function not_Function() {
    document.getElementById("Not").innerHTML= !(5>10);
    }


document.write(2E310);
document.write("<br>");

document.write("<br>");
document.write(10>2);
document.write("<br>");

document.write("<br>");
console.log(2+2);
document.write("<br>");

document.write("<br>");
document.write("10"+5);
document.write("<br>");

document.write("<br>");
console.log(4>6);
document.write("<br>");

document.write("<br>");
document.write(10==10);
document.write("<br>");

document.write("<br>");
document.write(10==12);
document.write("<br>");

document.write("<br>");
x=10;
y=10;
document.write(x===y);
document.write("<br>");

document.write("<br>");
x=82;
y="82";
document.write(x===y)
document.write("<br>");

document.write("<br>");
document.write(5>2 && 10>4);
document.write(5>10 && 10>4);
document.write(5>10 || 10>4);
document.write(5>10 || 10>20);
document.write("<br>");

document.write("<br>");
document.write(Bigger=(5>1)?"Left number is bigger":"Right number is bigger");
document.write("<br>");

function Ride_Function() {
    var Height, Can_Ride;
    height=document.getElementById("Height").value;
    Can_Ride=(Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML=Can_Ride+"To ride.";
}