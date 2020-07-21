function My_firstfunction() {   //Definig a function and naaming it
    var str="This text is green!";//defining a variable and giving it a string value
    var result=str.fontcolor("green"); //using the fontcolor method on str variable
    document.getElementById("Green_Text").innerHTML=result; //putting the value of result int HTML element with "Green_Text" id
}