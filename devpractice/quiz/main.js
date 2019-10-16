/* 
function response(){
    document.getElementById("explain").style.visibility = "visible"; //make the explainer visible only after quiz is submitted
} */
function checker(){
    //var adjunct = document.getElementById("adjuncts").checked;
    var lecturer = document.getElementById("lecturers").checked;
    //var postdoc = document.getElementById("postdocs").checked;
    var profPractice =document.getElementById("profpractice").checked;
    var researcher = document.getElementById("researchers").checked;
    var tenureTrack = document.getElementById("tenuretrack").checked;
    var counter = 0;
    
    document.getElementById("quiz").style.display = "none"; //make the quiz disappear after submission
    console.log(lecturer);
    if (lecturer==true) {
        counter++;
}
    console.log(counter);
    if (profPractice==true){
        counter++;
}
    console.log(counter);
    if (researcher==true){
        counter++;
}
    console.log(counter);
    if (tenureTrack==true){
        counter++;
}
    console.log(counter);
    document.getElementById("explain").style.visibility = "visible"; //make the explainer visible only after quiz is submitted
    document.getElementById("result").innerHTML = "You got " + counter + " of 4 correct.";
}

