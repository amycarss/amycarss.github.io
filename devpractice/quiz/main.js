/* 
function response(){
    document.getElementById("explain").style.visibility = "visible"; //make the explainer visible only after quiz is submitted
} */
function checker(){
    var adjuncts = document.quiz.adjuncts.value;
    var lecturers = document.quiz.lecturers.value;
    var postdocs = document.quiz.postdocs.value;
    var profPractice =document.quiz.profpractice.value;
    var researchers = document.quiz.researchers.value;
    var tenureTrack = document.quiz.tenuretrack.value;
    var counter = 0;
    if (lecturers.checked){
        counter++;
}
    console.log(counter);
    if (profPractice.checked){
        counter++;
}
    console.log(counter);
    if (researchers.checked){
        counter++;
}
    console.log(counter);
    if (tenureTrack.checked){
        counter++;
}
    console.log(counter);
    document.getElementById("explain").style.visibility = "visible"; //make the explainer visible only after quiz is submitted
    document.getElementById("result").innerHTML = "You got " + counter + " of 4 correct.";
}

