var ParkDotStatus;



function CheckURL() {

var x = document.getElementsByClassName("parkdot");
var i;
for (i = 0; i < x.length; i++) {
  document.getElementById(x[i].id).classList.toggle("parkdotoff");
  x[i].innerHTML = '<div class="tooltiptext">' + x[i].innerHTML + '</div>';  
}

var parksdone = getParameterByName('parks')
if (parksdone != '' && parksdone != null) {
	var ar=parksdone.split(",");

	for (let i = 0; i < ar.length; i++) {
		TogglePark(ar[i]);
	}
}

AddNames();

}


function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}






function TogglePark(ParkBox) {

	if (typeof ParkBox.id != 'undefined') {
		ParkName = ParkBox.id.replace("Click-", "");
	} else {
		ParkName = ParkBox;
	}


	var ParkBoxName = "Click-" + ParkName;

	var ParkCounter = document.getElementById("ParkCounter").innerHTML * 1;
	var ParkList = 	document.getElementById("ParkList").innerHTML;

	document.getElementById(ParkName).classList.toggle("parkdoton");
	document.getElementById(ParkName).classList.toggle("parkdotoff");

	if (document.getElementById(ParkName).classList.contains("parkdoton") == true) {
		document.getElementById(ParkBoxName).style.color = "#19325a";
		ParkCounter = ParkCounter + 1;
		ParkList += ParkName + ","
		document.getElementById(ParkName).classList.remove("parkdotdim");
		document.getElementById(ParkName).classList.remove("parkdothidden");
	} else {
		document.getElementById(ParkBoxName).style.color = "#999999";
		ParkCounter = ParkCounter - 1;
		ParkList = ParkList.replace(ParkName +",", "");
		if (ParkDotStatus == "Hide") {document.getElementById(ParkName).classList.add("parkdothidden");}
		if (ParkDotStatus == "Dim") {document.getElementById(ParkName).classList.add("parkdotdim");}
	}



	        document.getElementById("ParkCounter").innerHTML = ParkCounter;
	        document.getElementById("ParkPercent").innerHTML = ((ParkCounter / 63) * 100).toFixed(0);
	document.getElementById("ParkList").innerHTML = ParkList;
	GetURL();
}



function SaveAsText() {

	var PageContent = document.getElementById("ParkList").innerHTML;

  const a = document.createElement('a');
  const file = new Blob([PageContent], {type: "text/plain"});
  
  a.href= URL.createObjectURL(file);
  a.download = "NationalParksList.txt";
  a.click();
  
  URL.revokeObjectURL(a.href);
	
}


function GetURL() {
var TotalParksList = document.getElementById("ParkList").innerHTML;
TotalParksList = TotalParksList.substring(0, TotalParksList.length - 1);
window.history.replaceState('', 'National Parks Checklist', 'index.html?parks=' + TotalParksList);
}


function PrintList() {
	window.print();
}


function CopyURL(text) {
var inputc = document.body.appendChild(document.createElement("input"));
inputc.value = window.location.href;
inputc.focus();
inputc.select();
document.execCommand('copy');
inputc.parentNode.removeChild(inputc);
alert("The direct link has been copied to your clipboard.");
}







function ToggleUnvisited() {

if (document.getElementById("ToggleUnvisited").innerHTML == "Hide Unvisited") {
	ParkDotStatus = "Hide";
	document.getElementById("ToggleUnvisited").innerHTML = "Show Unvisited";
	var x = document.getElementsByClassName("parkdotoff");
	var i;
	for (i = 0; i < x.length; i++) {
	  document.getElementById(x[i].id).classList.remove("parkdotdim");
	  document.getElementById(x[i].id).classList.add("parkdothidden");
	}
} else if (document.getElementById("ToggleUnvisited").innerHTML == "Dim Unvisited") {
	ParkDotStatus = "Dim";
	document.getElementById("ToggleUnvisited").innerHTML = "Hide Unvisited";
	var x = document.getElementsByClassName("parkdotoff");
	var i;
	for (i = 0; i < x.length; i++) {
	  document.getElementById(x[i].id).classList.add("parkdotdim");
	}


} else {
	ParkDotStatus = "Show";
	document.getElementById("ToggleUnvisited").innerHTML = "Dim Unvisited";
	var x = document.getElementsByClassName("parkdot");
	var i;
	for (i = 0; i < x.length; i++) {
	  document.getElementById(x[i].id).classList.remove("parkdothidden");
	}
}

}












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
		TogglePark(DotName);
		});

}
/*---------------------------------------------------*/
