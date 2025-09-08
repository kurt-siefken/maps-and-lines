

// ---------------------------------------------------
// ---------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  updateStateBordersList(stateBordersWithDirections);
  prepareautocomplete();
LoadHideShowHints();
});

// ---------------------------------------------------
// ---------------------------------------------------





// ----------- List of States that have already been chosen
const chosen = new Set();
var numright = 0;
var numtotal = 0;
var numtogo = 0;








// ---------------------------------------------------
// Set up the game board
// ---------------------------------------------------

function updateStateBordersList(statesArray) {
  const randomState = getRandomState(statesArray);


  // Update .statename elements
  const stateNameElements = document.querySelectorAll('.statename');
  stateNameElements.forEach(el => {
    el.textContent = randomState.state;
chosen.add(randomState.state);
  });

  // Update #BorderCount
  const borderCountEl = document.getElementById('BorderCount');
  if (borderCountEl) {
    borderCountEl.textContent = randomState.borders.length;
numtotal = randomState.borders.length;
  }

  // Update #BordersList with border info
  const bordersListHints = document.getElementById('BordersHints');
  const bordersListNum = document.getElementById('BordersListNums');



    // Sort borders alphabetically by state name
    const sortedBorders = [...randomState.borders].sort((a, b) => {
      return a.state.localeCompare(b.state);
    });

	var n = 0;



//----------------- Create Rows for Each Border State ------------

    sortedBorders.forEach(border => {


     //----------------- Create Numbers ------------
      n = n+1;
      const numDiv = document.createElement('div');
      numDiv.className = 'borderrownum';
      numDiv.textContent = n + '.';
      bordersListNum.appendChild(numDiv);
     //-----------------------------------------------


     //----------------- Create Hints ------------
      const hintDiv = document.createElement('div');
      hintDiv.id = 'hint-' + border.state.replaceAll(' ', '');
      hintDiv.className = 'hintbox';
      hintDiv.textContent = border.direction;
      bordersListHints.appendChild(hintDiv);
     //-----------------------------------------------


    });

//---------------------------------------------------------------------




  return randomState; // still returning it in case you want it for something else
}

// ---------------------------------------------------
// ---------------------------------------------------
// ---------------------------------------------------












// ---------------------------------------------------
// Just a function that chooses a state at random
// ---------------------------------------------------

function getRandomState(statesArray) {
  const randomIndex = Math.floor(Math.random() * statesArray.length);
  return statesArray[randomIndex];
}

// ---------------------------------------------------










// ----------------------------------------
// --------- Make a guess
// ----------------------------------------

function MakeGuess() {
stateNames = stateBordersWithDirections.map(item => item.state);

if (stateNames.includes(BorderGuess.value)) {

	updateGameBoard(BorderGuess.value)


} else {


// --------- Shake if non-answer ------------------------------

 const input = document.getElementById("BorderGuess");
 input.classList.add("shake");

    // Remove the class after the animation ends so it can be reapplied
    input.addEventListener("animationend", function handler() {
      input.classList.remove("shake");
      input.removeEventListener("animationend", handler);
    });

}


};











// ----------------------------------------
// After Guess, Update Game Board ---------
// ----------------------------------------




function updateGameBoard(StateGuess) {
var RandomNum;

 const TheState = document.getElementById('StateAnnounce').innerHTML;


  // find the state object
  const stateObj = stateBordersWithDirections.find(
    s => s.state.toLowerCase() === TheState.toLowerCase()
  );

  // check if the borderState is in its borders
  const borderObj = stateObj.borders.find(
    b => b.state.toLowerCase() === StateGuess.toLowerCase()
  );



// ------ YES BORDER STATE PROGRESSION ------------

if (borderObj) {
const correctState = StateGuess + " " + borderObj.direction;
const correctStateDiv = document.createElement('div');
correctStateDiv.id=""
correctStateDiv.textContent = correctState;
correctStateDiv.className = "StateCorrect"
document.getElementById('BordersList').appendChild(correctStateDiv);
chosen.add(StateGuess);

numright = numright + 1;
numtogo = numtotal - numright;

document.getElementById('hint-' + StateGuess.replaceAll(' ', '')).classList.add('squeezeme');

RandomNum = Math.floor(Math.random() * CorrectMessage.length);
document.getElementById('gamestatus').innerHTML = "<div>" + CorrectMessage[RandomNum]+ "</div>" ;
document.getElementById('gamestatus').innerHTML += "<div>" + numright + " right, " + numtogo + " to go.</div>";

if (numtogo == 0) {GameWinner();}

};

// ----------------------------------------

// ------ NO BORDER STATE PROGRESSION ------------

if (borderObj == null) {
const wrongX = document.createElement('div');
wrongX.textContent = '❌ ' + StateGuess;
wrongX.className = "StateIncorrect"
document.getElementById('StrikesHolder').appendChild(wrongX);
chosen.add(StateGuess);

RandomNum = Math.floor(Math.random() * IncorrectMessage.length);

document.getElementById('gamestatus').innerHTML = IncorrectMessage[RandomNum];
document.getElementById('gamestatus').innerHTML += "<br>Still " + numtogo + " to go."
};

// ----------------------------------------


document.getElementById('BorderGuess').value = "";


}




// ----------------------------------------
// ----------------------------------------
// ----------------------------------------







// ----------------------------------------
// --------- Hide / Show Hints
// ----------------------------------------

function LoadHideShowHints() {
document.getElementById("HideShowHints").addEventListener("click", function () {

  	this.textContent = this.textContent === "Show Hints" ? "Hide Hints" : "Show Hints";
	document.getElementById("BordersHints").classList.toggle("flexme");
	document.getElementById("BordersHints").classList.toggle("hideme");
});

}





// ----------------------------------------
// --------- Game Winner
// ----------------------------------------

function GameWinner() {
document.getElementById('gamestatus').innerHTML = "That's a game winner!";
document.getElementById('GameGuessBox').classList.toggle("deactiveme");
document.getElementById("HideShowHints").classList.toggle("hideme");
}







// ----------------------------------------
// --------- Autocomplete
// ----------------------------------------


function prepareautocomplete() {

// grab just the state names:
stateNames = stateBordersWithDirections.map(item => item.state);

// then feed those into your autocomplete:
const input = document.getElementById("BorderGuess");
const suggestionBox = document.getElementById("StateSuggestions");

input.addEventListener("input", () => {
  const value = input.value.toLowerCase();
  suggestionBox.innerHTML = "";

  if (value) {
    const matches = stateNames.filter(name =>
      name.toLowerCase().startsWith(value)
    );

    matches.forEach(match => {

      const div = document.createElement("div");
      div.textContent = match;
      div.addEventListener("click", () => {
        input.value = match;
        suggestionBox.innerHTML = "";
      });

	if (chosen.has(match)) {div.className = 'cantpick'};

      suggestionBox.appendChild(div);
    });


  }
});

document.addEventListener("click", (e) => {
  if (e.target !== input) {suggestionBox.innerHTML = "";}
});




};
















