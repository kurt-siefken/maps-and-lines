function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}



function startwheel() {

	document.getElementById("questionlist").innerHTML = "";
if (document.getElementById('questioncheckbox').checked) {
	shuffle(AskQuestion);
	for (let i = 0; i < 3; i++) {
	AskQuestion.forEach(creatediv);
	} 
} else {
	shuffle(DiscQuestion);
	for (let i = 0; i < 3; i++) {
	DiscQuestion.forEach(creatediv);
	}
}


document.getElementById("questionlist").classList.remove("stopanimation"); 
document.getElementById("questionlist").classList.add("startanimation");
document.getElementById("startbutton").classList.add("startbuttonon");
document.getElementById("stopbutton").classList.remove("stopbuttonon");
document.getElementById("flipswitch").classList.add("flipswitchoff");
document.getElementById("flipswitch").classList.remove("flipswitchon");
}





function creatediv(questionnumber) {

document.getElementById("questionlist").innerHTML += "<div>" + questionnumber + "</div>";

}








function stopwheel() {
document.getElementById("questionlist").classList.remove("startanimation");
document.getElementById("questionlist").classList.add("stopanimation");
document.getElementById("startbutton").classList.remove("startbuttonon");
document.getElementById("stopbutton").classList.add("stopbuttonon");
document.getElementById("flipswitch").classList.remove("flipswitchoff");
document.getElementById("flipswitch").classList.add("flipswitchon");

}

















