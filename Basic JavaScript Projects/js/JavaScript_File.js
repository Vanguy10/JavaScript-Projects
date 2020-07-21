function My_First_Function() {   //Definig a function and naaming it
    var str="This text is green!";//defining a variable and giving it a string value
    var result=str.fontcolor("green"); //using the fontcolor method on str variable
    document.getElementById("Green_Text").innerHTML=result; //putting the value of result int HTML element with "Green_Text" id
}

function myFunction () {
    var sentence="I am learning";
    sentence += "a lot from this book!";
    document.getElementById("Concatenate").innerHTML=sentence;
}