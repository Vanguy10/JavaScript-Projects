window.alert(Math.random() * 100);

function subtraction_function() {
    var Subtraction=5-2;
    document.getElementById("Math").innerHTML="5-2="+Subtraction;
}

function multiplication () {
    var simple_Math=6*8;
    document.getElementById("Math").innerHTML = "6x8="+simple_Math;
}

function division () {
    var simple_Math= 48/6;
    document.getElementById("Math").innerHTML="48 / 6 = "+simple_Math;
}

function more_Math() {
    var simple_Math= (1+2)*10/2 -5;
    document.getElementById("Math").innerHTML="1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals"+ simple_Math;
} 

function modulus_Operator() {
    var simple_math= 25%6;
    document.getElementById("Math").innerHTML="When you divide 25 by 6 you have a remainder of: "+simple_math;
}

function negation_Operator() {
    var x= 10;
    document.getElementById("Math").innerHTML= -x;
}

var x=5;
x++;
document.write(x+"<br><br>");

var x=5.25;
x--;
document.write(x);
