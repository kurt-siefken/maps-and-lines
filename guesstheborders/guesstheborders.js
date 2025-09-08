/* ============================================================================
   Guess The Borders — Game Logic (Modular for States or Countries)
   ============================================================================ */

(() => {
  "use strict";

  // -- Game State -------------------------------------------------------------
  const chosen = new Set();
  let numRight = 0;
  let numWrong = 0;
  let numTotal = 0;
  let numToGo = 0;
  let regionData = [];
  let stateorcountry = "";

  // -- DOM Helpers ------------------------------------------------------------
  const $  = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const el = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  };
  const byId = (id, warn = true) => {
    const node = document.getElementById(id);
    if (!node && warn) console.warn(`[GuessTheBorders] Missing #${id}`);
    return node;
  };

  // -- Game Initialization ----------------------------------------------------
  document.addEventListener("DOMContentLoaded", () => {
initgame();
  });


function initgame() {
    const region = getRegionFromURL();
    if (region === "state") {
      stateorcountry = "state";
      loadGame(stateBordersWithDirections);
    } else if (region === "country") {
      stateorcountry = "country";
      loadGame(countryBordersWithDirections);
    } else {
      showRegionChooser();
    }
}


  function loadGame(dataArray) {
    regionData = dataArray;
    updateStateBordersList(regionData);
    prepareautocomplete(regionData);
    LoadHideShowHints();
    InitializeGiveUp();
    InitializeNewGame();  
if (numTotal == 0) {gameWinner();}
}

  function getRegionFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get("region");
  }

  function showRegionChooser() {
    byId("regionChooser")?.style?.setProperty("display", "block");
    byId("GameOuter")?.style?.setProperty("display", "none");

  }

  // -- Region Setup -----------------------------------------------------------
  function updateStateBordersList(regionData) {

  numRight = 0;
  numWrong = 0;
  numTotal = 0;
  numToGo = 0;

    const randomRegion = getRandomState(regionData);
    if (!randomRegion) return;

    $$(".statename").forEach(el => {
      el.textContent = randomRegion.country || randomRegion.state;
    });

    $$(".stateorcountry").forEach(el => {
      el.textContent = stateorcountry;
    });

    const name = randomRegion.country || randomRegion.state;
    chosen.add(name);


let numborders = randomRegion.borders.length;

let gamestatus = "Can you name them?"


if (numborders == 1) {gamestatus = 'Can you name it?';};
if (stateorcountry == 'state') {
	if (numborders == 1) {numborders += ' state'} else {numborders += ' states'}
};
if (stateorcountry == 'country') {
	if (numborders == 1) {numborders += ' country'} else {numborders += ' countries'}
};


numToGo = randomRegion.borders.length;

    byId("BordersList").textContent = '';
    byId("StrikesHolder").textContent = '';
    byId("gamestatus").textContent = gamestatus;
    byId("BorderCount").textContent = numborders;
    numTotal = randomRegion.borders.length;


    const bordersListHints = byId("BordersHints");
    const bordersListNum = byId("BordersListNums");
    bordersListHints.innerHTML = "";
    bordersListNum.innerHTML = "";

    byId("GameGuessBox")?.classList.remove("deactiveme");
    byId("HideShowHints")?.classList.add("inlineme");
    byId("HideShowHints")?.classList.remove("hideme");
    byId("GiveUpHolder")?.classList.remove("hideme");


    const sortedBorders = [...randomRegion.borders].sort((a, b) =>
      (a.country || a.state || "").localeCompare(b.country || b.state || "")
    );

    let n = 0;
    sortedBorders.forEach(border => {
      const name = border.country || border.state;
      if (!name) return;

      bordersListNum.appendChild(el("div", "borderrownum", `${++n}.`));
      const hint = el("div", "hintbox", border.direction);
      hint.id = "hint-" + name.replaceAll(" ", "");
      bordersListHints.appendChild(hint);
    });

    return randomRegion;
  }

  function getRandomState(list) {
    if (!Array.isArray(list) || list.length === 0) return null;
    return list[Math.floor(Math.random() * list.length)];
  }

  // -- Guess Handling ---------------------------------------------------------
  function MakeGuess() {
    const input = byId("BorderGuess");
    if (!input) return;

    const raw = input.value.trim();
    if (!raw) return shake(input);

    const guess = toTitleCase(raw);
    if (chosen.has(guess)) {
      statusMsg(`You already tried “${guess}.” Pick another neighbor.`);
      shake(input);
      return clearInput(input);
    }

    const regionNames = regionData.map(x => x.country || x.state);
    const isKnown = regionNames.some(name => name.toLowerCase() === guess.toLowerCase());
    if (!isKnown) {
      shake(input);
      return clearInput(input);
    }

    updateGameBoard(guess, regionData);
    clearInput(input);
  }
  window.MakeGuess = MakeGuess;

  function updateGameBoard(StateGuess, regionData) {
    const regionName = byId("StateAnnounce").innerHTML;
    const regionObj = regionData.find(
      r => (r.country || r.state).toLowerCase() === regionName.toLowerCase()
    );
    if (!regionObj) return;

    const borderObj = regionObj.borders.find(
      b => (b.country || b.state).toLowerCase() === StateGuess.toLowerCase()
    );

    if (borderObj) {
      const correctDiv = el("div", "StateCorrect", `${StateGuess} ${borderObj.direction}`);
      byId("BordersList")?.appendChild(correctDiv);
      chosen.add(StateGuess);
      numRight++;
      numToGo = numTotal - numRight;

      const hintId = "hint-" + StateGuess.replaceAll(" ", "");
      byId(hintId, false)?.classList.add("squeezeme");

      const msg = pickRandom(CorrectMessage) || "Nice!";
      statusMsg(`<div>${msg}</div><div>${numRight} right, ${numToGo} to go.</div>`);

      if (numToGo === 0) gameWinner();
    } else {
      const wrongDiv = el("div", "StateIncorrect", `❌ ${StateGuess}`);
      byId("StrikesHolder")?.appendChild(wrongDiv);
      chosen.add(StateGuess);
	numWrong +=1;

      const msg = pickRandom(IncorrectMessage) || "Nope!";
      statusMsg(`${msg}<br>Still ${numToGo} to go.`);

    }

    byId("BorderGuess").value = "";
  }

  // -- Autocomplete -----------------------------------------------------------
  function prepareautocomplete(regionData) {
    const regionNames = regionData.map(item => item.country || item.state);
    const input = byId("BorderGuess");
    const suggestionBox = byId("StateSuggestions");

    input.addEventListener("input", () => {
      const value = input.value.toLowerCase();
      suggestionBox.innerHTML = "";

      if (value) {
        regionNames
          .filter(name => name.toLowerCase().startsWith(value))
          .forEach(match => {
            const div = el("div", chosen.has(match) ? "cantpick" : "", match);
            div.addEventListener("click", () => {
              input.value = match;
              suggestionBox.innerHTML = "";
            });
            suggestionBox.appendChild(div);
          });
      }
    });

    document.addEventListener("click", (e) => {
      if (e.target !== input) {
        suggestionBox.innerHTML = "";
      }
    });
  }

  // -- Hints Toggle -----------------------------------------------------------
  function LoadHideShowHints() {
    const btn = byId("HideShowHints");
    const hints = byId("BordersHints");
    hints.classList.add("hideme");

    if (!btn || !hints) return;

    btn.addEventListener("click", function () {
      this.textContent = this.textContent === "Show Hints" ? "Hide Hints" : "Show Hints";
      hints.classList.toggle("flexme");
      hints.classList.toggle("hideme");

    });
  }

  // -- Game Winner ------------------------------------------------------------
  function gameWinner() {

    let msg = pickRandom(WinnerMessage) || "That's a game winner!";
    if (numWrong === 0) msg = pickRandom(AceMessage) || "That's a clean sweep!";
    if (numTotal === 0) msg = "Congratulations, there are 0 borders.<br>That wasn't too hard now, was it?";
    statusMsg(msg);

    gameOver();
  }


function gameOver() {
    byId("GameGuessBox")?.classList.add("deactiveme");
    byId("HideShowHints")?.classList.remove("inlineme");
    byId("HideShowHints")?.classList.add("hideme");
    byId("GiveUpHolder")?.classList.remove("inlineme");
    byId("GiveUpHolder")?.classList.add("hideme");
    byId("NewGameHolder")?.classList.remove("inlineme");
    byId("NewGameHolder")?.classList.add("hideme");
    byId("BordersHints")?.classList.add("hideme");



byId("gamestatus").innerHTML += '<div id="PlayAgain" class="onhover" onclick="location.reload(true);">Play Again</div>'

}






  // -- Give Up ------------------------------------------------------------

function InitializeGiveUp() {
    document.getElementById("GiveUpButton").addEventListener("click", GiveUpStepOne);
    document.getElementById("GiveUpYes").addEventListener("click", GiveUpYes);
    document.getElementById("GiveUpNo").addEventListener("click", GiveUpNo);
	byId("GiveUpButton")?.classList.remove("hideme");
	byId("GiveUpButton")?.classList.add("inlineme");
	byId("GiveUpConfirm")?.classList.add("hideme");
	byId("GiveUpConfirm")?.classList.remove("flexme");
}


function GiveUpStepOne() {
	byId("GiveUpButton")?.classList.toggle("hideme");
	byId("GiveUpButton")?.classList.toggle("inlineme");
	byId("GiveUpConfirm")?.classList.toggle("hideme");
	byId("GiveUpConfirm")?.classList.toggle("flexme");
}

function GiveUpYes() {


const regionName = byId("StateAnnounce")?.innerText;
  if (!regionName) return;

  const regionObj = regionData.find(
    r => (r.country || r.state).toLowerCase() === regionName.toLowerCase()
  );
  if (!regionObj) {
    console.warn("Region not found:", regionName);
    return;
  }

  let numMissed = 0;

  regionObj.borders.forEach(border => {
    const borderName = border.country || border.state;

    // If the user never guessed it
    if (!chosen.has(borderName)) {
      const missedDiv = document.createElement("div");
      missedDiv.className = "StateMissed";  // Optional class for styling
      missedDiv.textContent = `${borderName} ${border.direction}`;
      document.getElementById("BordersList").appendChild(missedDiv);

      chosen.add(borderName);  // Mark it so autocomplete grays it out
      numMissed++;
    }
  });

let msg = "You scored " + numRight + " out of " + numTotal + ".";
msg += '<div id="PlayAgain" class="onhover" onclick="location.reload(true);">Play Again</div>'
    gameOver();
    statusMsg(msg);

}

function GiveUpNo() {
GiveUpStepOne();
}





  // -- Give Up ------------------------------------------------------------

function InitializeNewGame() {
    document.getElementById("NewGameButton").addEventListener("click", NewGameStepOne);
    document.getElementById("NewGameYes").addEventListener("click", NewGameYes);
    document.getElementById("NewGameNo").addEventListener("click", NewGameNo);
	byId("NewGameButton")?.classList.remove("hideme");
	byId("NewGameButton")?.classList.add("inlineme");
	byId("NewGameConfirm")?.classList.add("hideme");
	byId("NewGameConfirm")?.classList.remove("flexme");

}


function NewGameStepOne() {
	byId("NewGameButton")?.classList.toggle("hideme");
	byId("NewGameButton")?.classList.toggle("inlineme");
	byId("NewGameConfirm")?.classList.toggle("hideme");
	byId("NewGameConfirm")?.classList.toggle("flexme");

	console.log('new game');
}

function NewGameNo() {NewGameStepOne();}
function NewGameYes() {
location.reload(true);
}













  // -- Utility ----------------------------------------------------------------
  function statusMsg(html) {
    byId("gamestatus").innerHTML = html;
  }

  function clearInput(el) {
    if (el) el.value = "";
  }

  function shake(el) {
    el.classList.add("shake");
    el.addEventListener("animationend", function handler() {
      el.classList.remove("shake");
      el.removeEventListener("animationend", handler);
    });
  }

  function toTitleCase(str) {
    return str.toLowerCase().split(/\s+/).map(w => w[0].toUpperCase() + w.slice(1)).join(" ");
  }

  function pickRandom(arr) {
    return Array.isArray(arr) && arr.length > 0 ? arr[Math.floor(Math.random() * arr.length)] : null;
  }
})();
