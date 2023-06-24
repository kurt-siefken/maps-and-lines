

let YesAnswer = ["Yes!", "Correct!", "Right on!"];
let NoAnswer = ["Nope.", "Incorrect.", "Not quite."];


window.onload = function() {
    StartAutoComplete();
};
let countrylist = country;




const newcountrylist = [];
for(var i = 0; i < countrylist.length; i++) {
	newcountrylist[i] =  countrylist[i][0];
}




newcountrylist.sort();

var RandomNum;
var NumberRight = 0;
var NumberWrong = 0;
var NumberStreak = 0;
var NumberStreakLong = 0;
var NumberPercent = 0;


function StartGame() {
	NewRound();

	var select = document.getElementById("ListOfCountries");
	for(var i = 0; i < countrylist.length; i++) {
    	var opt = countrylist[i];
    	var el = document.createElement("option");
    	el.textContent = newcountrylist[i];
    	el.value = newcountrylist[i];
    	select.appendChild(el);
	}


	document.getElementById('StartGame').style.display = 'none';
	document.getElementById('GamePlay').style.display = 'block';

}




function NewRound() {

	document.getElementById('Question').style.display = 'block';
	document.getElementById('Answer').style.display = 'none';
	document.getElementById("ListOfCountries").value = '';


	RandomNum = Math.floor(Math.random() * country.length);

	const countryids = document.getElementsByClassName("countryid");
	for (let i = 0; i < countryids.length; i++) {
  		countryids[i].innerHTML = country[RandomNum][0];
	}

	const capitalids = document.getElementsByClassName("capitalid");
	for (let i = 0; i < capitalids.length; i++) {
  		capitalids[i].innerHTML = country[RandomNum][1];
	}


}




function CheckAnswer() {
	var selectedanswer = ListOfCountries.value;
	if (selectedanswer != '') {


	if (selectedanswer.split(" ").join("") == document.getElementById('countryid').innerHTML.split(" ").join(""))
	{
		RandomNum = Math.floor(Math.random() * YesAnswer.length);
		document.getElementById('YesOrNo').innerHTML = YesAnswer[RandomNum];
		document.getElementById('YesOrNo').style.color = "green";
		document.getElementById('YesOrNo').style.fontWeight = "bold";
		NumberRight = NumberRight + 1;
		NumberStreak = NumberStreak + 1;
		if (NumberStreakLong < NumberStreak) {NumberStreakLong = NumberStreak}
	}
	else
	{
		RandomNum = Math.floor(Math.random() * NoAnswer.length);
		document.getElementById('YesOrNo').innerHTML = NoAnswer[RandomNum];
		document.getElementById('YesOrNo').style.color = "red";
		document.getElementById('YesOrNo').style.fontWeight = "normal";
		NumberWrong = NumberWrong + 1;
		NumberStreak = 0;
	}



	document.getElementById('RightOrWrong').innerHTML = 'Your answer was ' + selectedanswer + '.';


	document.getElementById('Question').style.display = 'none';
	document.getElementById('Answer').style.display = 'block';
	UpdateStreak();

}
}


function UpdateStreak() {
	NumberPercent = ((NumberRight * 100)/(NumberRight + NumberWrong));
	NumberPercent = NumberPercent.toFixed(0);
	document.getElementById("NumRight").innerHTML = NumberRight;
	document.getElementById("NumWrong").innerHTML = NumberWrong;
	document.getElementById("NumStreak").innerHTML = NumberStreak;
	document.getElementById("NumStreakLong").innerHTML = NumberStreakLong;
	document.getElementById("NumPercent").innerHTML = NumberPercent;
}




/*-----------------------------------------------------------------*/

function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}


function StartAutoComplete() {
	autocomplete(document.getElementById("ListOfCountries"), newcountrylist);
}



