function Nested_Function {
    document.getElementById("Nested_Function").innerHTML=Count();
    function Count() {
        var starting_point=9;
        function Plus_one() {Starting_point += 1;}
        Plus_one ();
        return STarting_point;
    }
}

function Person(first, last, age, eye) {
    this.firstName=first;
    this.lastName=last;
    this.age=age;
    this.eyeColor=eye;
}
var myFather = new Person("John", "Doe" 50, "blue");
document.getElementById("demo").innerHTML=
"My father is "+myFather.age+".";