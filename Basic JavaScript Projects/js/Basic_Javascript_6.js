function Nested_Function() {
    document.getElementById("Nested_Function").innerHTML=Count();
    function Count() {
        var Starting_point=9;
        function Plus_one() {Starting_point += 1;}
        Plus_one ();
        return Starting_point;
    }
}

function Person(first, last, age, eye) {
    this.firstName=first;
    this.lastName=last;
    this.age=age;
    this.eyeColor=eye;
}

function Person_Funk() {
var myFather = new Person("John", "Doe", 50, "blue");
document.getElementById("demo").innerHTML=
"My father is "+myFather.age+".";
}

var x=10;
function Add_numbers_1() {
    document.write(20+x+"<br>");
}
function Add_numbers_2() {
    document.write(x+100);
}
Add_numbers_1();
Add_numbers_2();