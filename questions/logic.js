function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}



function startwheel() {

	document.getElementById("questionlist").innerHTML = ""
shuffle(AskQuestion);
for (let i = 0; i < 3; i++) {
AskQuestion.forEach(creatediv);
}

document.getElementById("questionlist").classList.remove("stopanimation"); 
 document.getElementById("questionlist").classList.add("startanimation");
}





function creatediv(questionnumber) {

document.getElementById("questionlist").innerHTML += "<div>" + questionnumber + "</div>";

}








function stopwheel() {
document.getElementById("questionlist").classList.remove("startanimation");
document.getElementById("questionlist").classList.add("stopanimation");

}