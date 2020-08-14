function full_sentence() {
    var part_1="I have ";
    var part_2="made this ";
    var part_3="into a complete ";
    var part_4="sentence.";
    var whole_sentence=part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML=whole_sentence;
}

function slice_Method() {
    var Sentence= "All work and no play makes Johnny a dull boy.";
    var Section= Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML=Section;
}

function myFunction() {
    var str="Hello World!";
    var res= str.toUpperCase();
    document.getElementById("Upper").innerHTML=res;
}

function myFunction() {
    var str="Visit Us";
    var n= str.search("Visit Us");
    document.getElementById("Search").innerHTML=n;
}

function string_Method() {
    var X=182;
    document.getElementById("Numbers_to_string").innerHTML=X.toString();
}

function precision_Method() {
    var X=12938.3012987376112;
    document.getElementById("Precision").innerHTML=X.toPrecision(10);
}

function myFunction() {
    var num=5.56789;
    var n=num.toFixed(2);
    document.getElementById("Fixed Method").innerHTML=n;
}

function myFunction() {
    var str="Hello World";
    var res=str.valueOf();
    document.getElementById("valueof").innerHTML=res;
}

function countdown() {
    var seconds=document.getElementById("seconds").value;

    function tick() {
        seconds=seconds -1;
        timer.innerHTML=seconds;
        setTimeout(tick,1000);
    if(seconds == 1){
        alert("Time's up!");
    }
    }
    tick();
}