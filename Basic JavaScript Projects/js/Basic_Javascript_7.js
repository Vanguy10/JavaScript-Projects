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

