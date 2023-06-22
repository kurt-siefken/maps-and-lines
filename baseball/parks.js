var ParkDotStatus;



function CheckURL() {


var x = document.getElementsByClassName("parkdot");
var i;
for (i = 0; i < x.length; i++) {
	document.getElementById(x[i].id).src = "team-" + x[i].id + "-off.png";
}




var parksdone = getParameterByName('parks')
if (parksdone != '' && parksdone != null) {
	var ar=parksdone.split(",");

	for (let i = 0; i < ar.length; i++) {
		TogglePark(ar[i]);
	}
}
}

/*-----------------------------------------------------------------*/


function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}



/*-----------------------------------------------------------------*/


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

	if (document.getElementById(ParkName).classList.contains("parkdoton")) {
		document.getElementById(ParkBoxName).style.color = "#19325a";
		document.getElementById(ParkName).src = "team-" + ParkName + ".png";
		ParkCounter = ParkCounter + 1;
		ParkList += ParkName + ","

	} else {
		document.getElementById(ParkBoxName).style.color = "#aaaaaa";
		ParkCounter = ParkCounter - 1;
		ParkList = ParkList.replace(ParkName +",", "");
		document.getElementById(ParkName).src = "team-" + ParkName + "-off.png";
		if (ParkDotStatus == "Dim") {document.getElementById(ParkName).classList.add("parkdotdim");}
		if (ParkDotStatus == "Hide") {document.getElementById(ParkName).classList.add("parkdothidden");}
	}



	        document.getElementById("ParkCounter").innerHTML = ParkCounter;
	        document.getElementById("ParkPercent").innerHTML = ((ParkCounter / 30) * 100).toFixed(0);
		document.getElementById("ParkList").innerHTML = ParkList;
	GetURL();
}

/*-----------------------------------------------------------------*/


function SaveAsText() {

	var PageContent = document.getElementById("ParkList").innerHTML;

  const a = document.createElement('a');
  const file = new Blob([PageContent], {type: "text/plain"});
  
  a.href= URL.createObjectURL(file);
  a.download = "HighPointsList.txt";
  a.click();
  
  URL.revokeObjectURL(a.href);
	
}


/*-----------------------------------------------------------------*/

function GetURL() {
var TotalParksList = document.getElementById("ParkList").innerHTML;
TotalParksList = TotalParksList.substring(0, TotalParksList.length - 1);
window.history.replaceState('', 'High Points Checklist', 'index.html?parks=' + TotalParksList);
}


/*-----------------------------------------------------------------*/

function PrintList() {
	window.print();
}


/*-----------------------------------------------------------------*/

function CopyURL(text) {
var inputc = document.body.appendChild(document.createElement("input"));
inputc.value = window.location.href;
inputc.focus();
inputc.select();
document.execCommand('copy');
inputc.parentNode.removeChild(inputc);
alert("The direct link has been copied to your clipboard.");
}


/*-----------------------------------------------------------------*/


function ToggleUnvisited() {

if (document.getElementById("ToggleUnvisited").innerHTML == "Hide Unvisited") {
	document.getElementById("ParkDotStatus").innerHTML = "Hide"
	ParkDotStatus = "Hide"
	document.getElementById("ToggleUnvisited").innerHTML = "Show Unvisited";
} else {
	document.getElementById("ParkDotStatus").innerHTML = "Show"
	ParkDotStatus = "Show"
	document.getElementById("ToggleUnvisited").innerHTML = "Hide Unvisited";
}


	var x = document.getElementsByClassName("parkdot");
	var i;
	for (i = 0; i < x.length; i++) {
		document.getElementById(x[i].id).classList.remove("parkdothidden");
	}
	i = 0;




if (ParkDotStatus == "Hide") {

	for (i = 0; i < x.length; i++) {
		if (document.getElementById(x[i].id).classList.contains("parkdoton")) {
		} else {
		document.getElementById(x[i].id).classList.toggle("parkdothidden");
		}
	}

}



}

