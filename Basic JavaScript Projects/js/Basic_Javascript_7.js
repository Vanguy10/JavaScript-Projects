function Time_function () {
    var Time=new Date().getHours();
    var Reply;
    if (Time<12==Time>0) {
        Reply="It is morning time!";
    }
    else if (Time>12==Time<18){
        Reply="It id the afternoon";
    }
    else {
        Reply="It is evening time";
    }
    document.getElementById("Time_of_day").innerHTML=Reply;
}

function Full_Year () {
var d= new Date();
document.getElementById("demo").innerHTML= d.getFullYear();
}

if (2<3) {
    document.write("<br>"+"It is a good day")
}

function Age_Function () {
    Age= document.getElementById("Age").value;
    if (Age>=21) {
        Vote="You are old enough to drink";
    }
    else {
        Vote= "You are not old enough to drink";
    }
    document.getElementById("How_old_are_you?").innerHTML=Vote;
}

function full_sentence() {
    var part_1="I have ";
    var part_2="made this ";
    var part_3="into a complete ";
    var part_4="sentence.";
    var whole_sentence=part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML=whole_sentence;
}

var X=10;
function Add_numbers_1() {
    document.write(20+X+"<br>");
}
function Add_numbers_2() {
    document.write(X+100);
}
Add_numbers_1();
Add_numbers_2();

console.log("It is a nice day");