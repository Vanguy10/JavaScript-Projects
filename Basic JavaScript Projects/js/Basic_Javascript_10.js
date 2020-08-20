var text= "";
var i = 0;
while (i < 10) {
    text += "<br>The number is " + i;
    i++;
}
document.getElementById("demo").innerHTML = text;

function myFunction() {
    var str="Hello World!";
    var n=str.length;
    document.getElementById("demo").innerHTML=n;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content= "";
var Y;
function for_Loop() {
    for (Y=0; Y<Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML=Content;
}

function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture[0]="sleeping";
    Cat_Picture[1]="playing";
    Cat_Picture[2]="eating";
    Cat_Picture[3]="purring";
    document.getElementById("Cat").innerHTML="In this picture, the cat is " +
        Cat_Picture[2] + ".";
}

function array_Function() {
var cars=["Benz", "BMW", "Lexus"];
document.getElementById("Array").innerHTML= cars;
}

function constant_function() {
    const Musical_Instrument={type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color="blue";
    Musical_Instrument.price="$900";
    document.getElementById("Constant").innerHTML="The cost of the "+Musical_Instrument.type +" was "
    + Musical_Instrument.price;
}

function myFunction() {
    return Math.PI;
}
document.getElementById("Return").innerHTML=myFunction();

let car= {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description: function() {
        return "The car is a "+this.year+this.color+this.make+this.model;
    }
}
document.getElementById("Car_Object").innerHTML= car.description();

function myFunction() {
    var text="";
    var i;
    for (i=0; i<5; i++) {
        if (i ===3) {
            break;
        }
        text += "The number is "+i+ "<br>";
    }
    document.getElementById("Break").innerHTML= text;
}

function myFunction() {
    var text="";
    var i;
    for (i=0; i<5; i++) {
        if (i===3) {
            continue;
        }
        text += "the number is "+i+"<br>";   
    }
    document.getElementById("demo").innerHTML=text;
}
