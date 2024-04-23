

/*---------Takes URL and parses into list-------------*/
function CheckURL() {
var parksdone = getParameterByName('parks')
if (parksdone != null) {
	var ar=parksdone.split(",");

	for (let i = 0; i < ar.length; i++) {
		TogglePark(ar[i]);
	}
}
}
/*---------------------------------------------------*/





/*---------Takes URL and parses into map-------------*/
function CheckURLLights() {


var x = document.getElementsByClassName("parkdot");
var i;
for (i = 0; i < x.length; i++) {
  document.getElementById(x[i].id).classList.toggle("parkdotoff");
  x[i].innerHTML = '<div class="tooltiptext">' + x[i].innerHTML + '</div>';  
}

AddNames();
var parksdone = getParameterByName('parks')
if (parksdone != null) {
	var ar=parksdone.split(",");

	for (let i = 0; i < ar.length; i++) {
		TurnParkOn(ar[i]);
	}
}
GetURLmap();

}
/*---------------------------------------------------*/


/*----------------Gets URL variables--------------------*/
function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
/*---------------------------------------------------*/





/*----------------Toggles visited park map (on loading)--------------------*/
function TurnParkOn(ParkBox) {

	document.getElementById(ParkBox).classList.toggle("parkdoton");
	document.getElementById(ParkBox).classList.toggle("parkdotoff");
	var ParkCounter = document.getElementById("ParkCounter").innerHTML * 1;
	var ParkList = 	document.getElementById("ParkList").innerHTML;

	ParkCounter = ParkCounter + 1;
	ParkList += ParkBox + ",";

	        document.getElementById("ParkCounter").innerHTML = ParkCounter;
	        document.getElementById("ParkPercent").innerHTML = ((ParkCounter / 429) * 100).toFixed(1);
		document.getElementById("ParkList").innerHTML = ParkList;
}
/*---------------------------------------------------*/


/*----------------Toggles visited park map (on click)--------------------*/
function ClickDot(ParkBox) {
	ParkCounter = document.getElementById("ParkCounter").innerHTML;
	ParkList = document.getElementById("ParkList").innerHTML;
	if (document.getElementById(ParkBox.id).classList.contains("parkdoton") == true) {
		ParkCounter = ParkCounter - 1;
		ParkList = ParkList.replace(ParkBox.id +",", "");
			if (document.getElementById("ToggleUnvisited").innerHTML == "Show Unvisited") {
			document.getElementById(ParkBox.id).classList.add("parkdothidden");
			}
	} else {
		ParkCounter = (ParkCounter * 1) + 1;
		ParkList += ParkBox.id + ",";
	}

	document.getElementById(ParkBox.id).classList.toggle("parkdoton");
	document.getElementById(ParkBox.id).classList.toggle("parkdotoff");



		document.getElementById("ParkList").innerHTML = ParkList;
	        document.getElementById("ParkCounter").innerHTML = ParkCounter;
	        document.getElementById("ParkPercent").innerHTML = ((ParkCounter / 429) * 100).toFixed(1);

		GetURLmap();

}
/*---------------------------------------------------*/


/*----------------Toggles visited park list--------------------*/
function TogglePark(ParkBox) {


	if (typeof ParkBox.id != 'undefined') {
		ParkName = ParkBox.id.replace("Click-", "");
	} else {
		ParkName = ParkBox;
	}

	var ParkBoxName = "Click-" + ParkName;

	var ParkCounter = document.getElementById("ParkCounter").innerHTML * 1;
	var ParkList = 	document.getElementById("ParkList").innerHTML;

	if (document.getElementById(ParkBoxName).classList.contains("ClickBoxOn") == true) {
		ParkCounter = ParkCounter - 1;
		ParkList = ParkList.replace(ParkName +",", "");
	} else {
		ParkCounter = ParkCounter + 1;
		ParkList += ParkName + ",";
	}

	document.getElementById(ParkBoxName).classList.toggle("ClickBoxOn");  


	        document.getElementById("ParkCounter").innerHTML = ParkCounter;
	        document.getElementById("ParkPercent").innerHTML = ((ParkCounter / 429) * 100).toFixed(1);
		document.getElementById("ParkList").innerHTML = ParkList;

		GetURL();
}
/*---------------------------------------------------*/



/*----------------Gets URL for list--------------------*/
function GetURL() {
var TotalParksList = document.getElementById("ParkList").innerHTML;
TotalParksList = TotalParksList.substring(0, TotalParksList.length - 1);
window.history.replaceState('', 'National Park Units Checklist', 'parkslist.html?parks=' + TotalParksList);

        var link = document.getElementById("ViewAsMap");
	if (TotalParksList != '' && TotalParksList != 'null') {
        link.setAttribute('href', 'index.html?parks=' + TotalParksList);
	} else {
        link.setAttribute('href', 'index.html');
	}

}
/*---------------------------------------------------*/

/*----------------Gets URL for map--------------------*/
function GetURLmap() {
var TotalParksList = document.getElementById("ParkList").innerHTML;
TotalParksList = TotalParksList.substring(0, TotalParksList.length - 1);
window.history.replaceState('', 'National Park Units Checklist', 'index.html?parks=' + TotalParksList);

        var link = document.getElementById("ViewAsList");
	if (TotalParksList != '' && TotalParksList != 'null') {
        link.setAttribute('href', 'parkslist.html?parks=' + TotalParksList);
	} else {
        link.setAttribute('href', 'parkslist.html');
	}
}
/*---------------------------------------------------*/




/*----------------Copies URL to clipboard--------------------*/
function copyURL() {

	var dummy = document.createElement('input'),
	text = window.location.href;

	document.body.appendChild(dummy);
	dummy.value = text;
	dummy.select();
	document.execCommand('copy');
	document.body.removeChild(dummy);

        alert('The direct link has been copied to your clipboard.');
}


/*---------------------------------------------------*/




/*----------------Gets names for map rollover--------------------*/
function AddNames() {

	var x = document.getElementsByClassName("parkdot");
	var i;
	for (i = 0; i < x.length; i++) {
		AddNames2(x[i]);	
	}
}
/*---------------------------------------------------*/


/*----------------Adds listener for map rollover--------------------*/
function AddNames2(DotName) {

	DotName.addEventListener("mouseover",  function(){
		var ParkName = document.getElementById(DotName.id).innerHTML;
		document.getElementById("ParkName").innerHTML = ParkName;
		});

	DotName.addEventListener("mouseout",  function(){
		document.getElementById("ParkName").innerHTML = "";
		});

	DotName.addEventListener("click",  function(){
		ClickDot(DotName);
		});

}
/*---------------------------------------------------*/



/*----------------print button--------------------*/
function print_onclick() {
    window.print();
    return false;
}
/*---------------------------------------------------*/


/*----------------toggle unvisited--------------------*/
function ToggleUnvisited() {

if (document.getElementById("ToggleUnvisited").innerHTML == "Hide Unvisited") {
	document.getElementById("ToggleUnvisited").innerHTML = "Show Unvisited";
	var x = document.getElementsByClassName("parkdotoff");
	var i;
	for (i = 0; i < x.length; i++) {
	  document.getElementById(x[i].id).classList.remove("parkdotdim");
	  document.getElementById(x[i].id).classList.add("parkdothidden");
	}
} else if (document.getElementById("ToggleUnvisited").innerHTML == "Dim Unvisited") {
	document.getElementById("ToggleUnvisited").innerHTML = "Hide Unvisited";
	var x = document.getElementsByClassName("parkdotoff");
	var i;
	for (i = 0; i < x.length; i++) {
	  document.getElementById(x[i].id).classList.add("parkdotdim");
	}


} else {
	document.getElementById("ToggleUnvisited").innerHTML = "Dim Unvisited";
	var x = document.getElementsByClassName("parkdot");
	var i;
	for (i = 0; i < x.length; i++) {
	  document.getElementById(x[i].id).classList.remove("parkdothidden");
	}
}



}
/*---------------------------------------------------*/

