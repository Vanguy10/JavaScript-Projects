function () {
    document.getElementById("Nested_Function").innerHTML=Count();
    function Count() {
        var starting_point=9;
        function Plus_one() {Starting_point += 1;}
        Plus_one ();
        return STarting_point;
    }
}