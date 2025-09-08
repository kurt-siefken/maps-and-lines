/* ============================================================================
   Guess The Borders — Game Logic
   ----------------------------------------------------------------------------
   Notes:
   - Assumes the following globals exist elsewhere:
       • stateBordersWithDirections: [{ state, borders: [{ state, direction }] }]
       • CorrectMessage: string[]
       • IncorrectMessage: string[]
   - HTML elements expected (by id/class) are referenced inline below.
   - Public functions exposed on `window` for use from HTML: MakeGuess
   - Light refactors: safer DOM lookups, duplicate-guess check, tiny UX touches.
   ============================================================================ */

(() => {
  "use strict";

  /* -------------------------------------------------------------------------
   * Module-level state
   * ---------------------------------------------------------------------- */
  /** States already guessed (correct or incorrect) */
  const chosen = new Set();

  /** Scoreboard counters */
  let numRight = 0;
  let numWrong = 0;
  let numTotal = 0;
var numToGo = 0;
  var regionName = ''
let regionData = [];  // holds either states or countries



  /* -------------------------------------------------------------------------
   * DOM helpers
   * ---------------------------------------------------------------------- */
  const $  = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  /** Create an element with optional className + text */
  const el = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  };

  /** Safely get an element by id and optionally warn if missing */
  const byId = (id, warn = true) => {
    const node = document.getElementById(id);
    if (!node && warn) console.warn(`[GuessTheBorders] Missing #${id}`);
    return node;
  };





  /* -------------------------------------------------------------------------
   * Initialization
   * ---------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  const region = getRegionFromURL();

  if (region === "state") {
    loadGame(stateBordersWithDirections);
  } else if (region === "country") {
    loadGame(countryBordersWithDirections);
  } else {
    showRegionChooser();
  }
});







  /* -------------------------------------------------------------------------
   * Board setup: choose a random state, fill counts + hint rows
   * ---------------------------------------------------------------------- */
 function updateStateBordersList(regionData) {
  const randomRegion = getRandomState(regionData);

  document.querySelectorAll('.statename').forEach(el => {
    el.textContent = randomRegion.country || randomRegion.state;
  });

  chosen.add(randomRegion.country || randomRegion.state);

  const borderCountEl = document.getElementById('BorderCount');
  if (borderCountEl) {
    borderCountEl.textContent = randomRegion.borders.length;
    numTotal = randomRegion.borders.length;
  }

  const bordersListHints = document.getElementById('BordersHints');
  const bordersListNum = document.getElementById('BordersListNums');
  bordersListHints.innerHTML = "";
  bordersListNum.innerHTML = "";

  const sortedBorders = [...randomRegion.borders].sort((a, b) =>
    (a.country || a.state || "").localeCompare(b.country || b.state || "")
  );

  let n = 0;

  sortedBorders.forEach(border => {
    const borderName = border.country || border.state;
    if (!borderName) return;

    n++;

    const numDiv = document.createElement('div');
    numDiv.className = 'borderrownum';
    numDiv.textContent = n + '.';
    bordersListNum.appendChild(numDiv);

    const hintDiv = document.createElement('div');
    hintDiv.id = 'hint-' + borderName.replaceAll(' ', '');
    hintDiv.className = 'hintbox';
    hintDiv.textContent = border.direction;
    bordersListHints.appendChild(hintDiv);
  });

  return randomRegion;
}








  /* -------------------------------------------------------------------------
   * Utility: pick a random item
   * ---------------------------------------------------------------------- */
  function getRandomState(statesArray) {
    if (!Array.isArray(statesArray) || statesArray.length === 0) return null;
    const idx = Math.floor(Math.random() * statesArray.length);
    return statesArray[idx];
  }





  /* -------------------------------------------------------------------------
   * Primary action: user submits a guess
   * ---------------------------------------------------------------------- */
  function MakeGuess() {
    const input = byId("BorderGuess");
    if (!input) return;

    const raw = input.value.trim();
    if (!raw) {
      shake(input);
      return;
    }

    // Canonicalize case for comparisons
    const guess = toTitleCase(raw);

    // Prevent duplicate guesses (correct OR incorrect)
    if (chosen.has(guess)) {
      statusMsg(`You already tried “${guess}.” Pick another neighbor.`);
      shake(input);
      return clearInput(input);
    }

    // Validate it’s a real US state from the data set
    const regionNames = regionData.map(x => x.country || x.state);
    const isKnownState = regionNames.some((n) => n.toLowerCase() === guess.toLowerCase());

    if (!isKnownState) {
      shake(input);
      return clearInput(input);
    }



    // Good to go — update the board
    updateGameBoard(BorderGuess.value, regionData);

    clearInput(input);
  }

  // Expose for HTML onclick/onsubmit bindings
  window.MakeGuess = MakeGuess;






  /* -------------------------------------------------------------------------
   * Game board update after a guess
   * ---------------------------------------------------------------------- */
function updateGameBoard(StateGuess, regionData) {
  let RandomNum;

  const TheRegion = document.getElementById('StateAnnounce').innerHTML;

  // Find the current region object (state or country)
  const regionObj = regionData.find(
    r => (r.country || r.state).toLowerCase() === TheRegion.toLowerCase()
  );

  if (!regionObj) {
    console.warn("No matching region found for:", TheRegion);
    return;
  }

  // Check if the guess matches a valid border
  const borderObj = regionObj.borders.find(
    b => (b.country || b.state).toLowerCase() === StateGuess.toLowerCase()
  );

  // ---------- ✅ Correct Guess ----------
  if (borderObj) {
    const correctText = `${StateGuess} ${borderObj.direction}`;
    const correctDiv = document.createElement('div');
    correctDiv.textContent = correctText;
    correctDiv.className = "StateCorrect";
    document.getElementById('BordersList').appendChild(correctDiv);

    chosen.add(StateGuess);
    numRight += 1;
    numToGo = numTotal - numRight;

    // Animate hint
    const hintId = 'hint-' + StateGuess.replaceAll(' ', '');
    const hintEl = document.getElementById(hintId);
    if (hintEl) {
      hintEl.classList.add('squeezeme');
    }

    // Show random correct message
    RandomNum = Math.floor(Math.random() * CorrectMessage.length);
    document.getElementById('gamestatus').innerHTML = `
      <div>${CorrectMessage[RandomNum]}</div>
      <div>${numRight} right, ${numToGo} to go.</div>
    `;

    if (numToGo === 0) {
      GameWinner();
    }

  // ---------- ❌ Incorrect Guess ----------
  } else {
    const wrongDiv = document.createElement('div');
    wrongDiv.textContent = '❌ ' + StateGuess;
    wrongDiv.className = "StateIncorrect";
    document.getElementById('StrikesHolder').appendChild(wrongDiv);

    chosen.add(StateGuess);

    RandomNum = Math.floor(Math.random() * IncorrectMessage.length);
    document.getElementById('gamestatus').innerHTML = `
      ${IncorrectMessage[RandomNum]}<br>
      Still ${numToGo} to go.
    `;
  }

  // Clear the input after each guess
  document.getElementById('BorderGuess').value = "";
}








  /* -------------------------------------------------------------------------
   * Correct guess UI + counters
   * ---------------------------------------------------------------------- */
  function handleCorrectGuess(guessState, direction) {
    const list = byId("BordersList");
    if (list) {
      const row = el("div", "StateCorrect", `${guessState} ${direction}`);
      list.appendChild(row);
    }

    chosen.add(guessState);
    numRight += 1;

    // Celebrate by squeezing the corresponding hint
    const hintId = `hint-${guessState.replaceAll(" ", "")}`;
    const hintEl = byId(hintId, /*warn=*/false);
    if (hintEl) hintEl.classList.add("squeezeme");

    // Status line (randomized “correct” message)
    const msg = pickRandom(CorrectMessage) ?? "Nice!";
    const remaining = Math.max(numTotal - numRight, 0);
    statusMsg(`<div class='responseanswer'>${msg}</div><div class='righttogo'>${numRight} right, ${remaining} to go.</div>`);

    // Win condition
    if (remaining === 0) gameWinner();
  }







  /* -------------------------------------------------------------------------
   * Incorrect guess UI
   * ---------------------------------------------------------------------- */
  function handleIncorrectGuess(guessState) {
    const strikes = byId("StrikesHolder");
    if (strikes) {
      const x = el("div", "StateIncorrect", `❌ ${guessState}`);
      strikes.appendChild(x);
    }

    chosen.add(guessState);
    numWrong += 1;

    const msg = pickRandom(IncorrectMessage) ?? "Nope!";
    const remaining = Math.max(numTotal - numRight, 0);
    statusMsg(`<div class='responseanswer'>${msg}</div><div class='righttogo'>Still ${remaining} to go.</div>`);
  }






  /* -------------------------------------------------------------------------
   * Hints: show/hide toggle
   * ---------------------------------------------------------------------- */
  function LoadHideShowHints() {
    const btn = byId("HideShowHints");
    const hints = byId("BordersHints");
    if (!btn || !hints) return;

    btn.addEventListener("click", function () {
      // Toggle button label
      this.textContent = this.textContent === "Show Hints" ? "Hide Hints" : "Show Hints";
      // Toggle classes that control visibility/layout
      hints.classList.toggle("flexme");
      hints.classList.toggle("hideme");
    });
  }







  /* -------------------------------------------------------------------------
   * Winner screen
   * ---------------------------------------------------------------------- */
  function gameWinner() {
    

    var winnermsg = pickRandom(WinnerMessage) ?? "That's a game winner!";

	if (numWrong == 0) {
		winnermsg = pickRandom(AceMessage) ?? "That's a clean sweep!";
	};

	if (numTotal == 0) {
		winnermsg = "Congratulations, you got " + stateName + " which has 0 borders.<br><br>That wasn't too hard now, was it?";
	};


	statusMsg(winnermsg);

    // Disable the input area and hide the hints toggle
    byId("GameGuessBox")?.classList.add("deactiveme");
    byId("HideShowHints")?.classList.remove("inlineme");
    byId("HideShowHints")?.classList.add("hideme");


  }








  /* -------------------------------------------------------------------------
   * Autocomplete for the input
   * ---------------------------------------------------------------------- */
function prepareautocomplete(regionData) {
  const regionNames = regionData.map(item => item.country || item.state);
  const input = document.getElementById("BorderGuess");
  const suggestionBox = document.getElementById("StateSuggestions");

  input.addEventListener("input", () => {
    const value = input.value.toLowerCase();
    suggestionBox.innerHTML = "";

    if (value) {
      const matches = regionNames.filter(name =>
        name.toLowerCase().startsWith(value)
      );

      matches.forEach(match => {
        const div = document.createElement("div");
        div.textContent = match;
        div.addEventListener("click", () => {
          input.value = match;
          suggestionBox.innerHTML = "";
        });

        if (chosen.has(match)) {
          div.className = 'cantpick';
        }

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






  /* -------------------------------------------------------------------------
   * Small utilities
   * ---------------------------------------------------------------------- */
  function statusMsg(html) {
    const status = byId("gamestatus");
    if (status) status.innerHTML = html;
  }

  function clearInput(inputEl) {
    inputEl.value = "";
  }

  function shake(inputEl) {
    inputEl.classList.add("shake");
    const handler = () => {
      inputEl.classList.remove("shake");
      inputEl.removeEventListener("animationend", handler);
    };
    inputEl.addEventListener("animationend", handler);
  }

  function toTitleCase(str) {
    return str
      .toLowerCase()
      .split(/\s+/)
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
  }

  function pickRandom(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return null;
    return arr[Math.floor(Math.random() * arr.length)];
  }

function getRegionFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("region"); // returns 'state', 'country', or null
}

function loadGame(dataArray) {
  regionData = dataArray; // set global for reuse
  updateStateBordersList(regionData);
  prepareautocomplete(regionData);
  LoadHideShowHints();
}




function showRegionChooser() {
  document.getElementById("regionChooser").style.display = "block";
}

})();
