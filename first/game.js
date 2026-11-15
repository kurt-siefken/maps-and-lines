// All game behavior lives here; event data lives in events.js.
const buttons = [document.getElementById("event0"), document.getElementById("event1")];
const feedback = document.getElementById("feedback");
const nextButton = document.getElementById("next");
const usedPairs = new Set();
let score = 0;
let streak = 0;
let best = 0;
let currentPair = null;
let answered = false;

const randomItem = items => items[Math.floor(Math.random() * items.length)];

// Precompute eligible pairs once, instead of rebuilding on each round.
const eligiblePairs = [];
for (let i = 0; i < events.length; i++) {
  for (let j = i + 1; j < events.length; j++) {
    const gap = Math.abs(events[i].year - events[j].year);
    if (gap >= 2 && gap <= 5 && events[i].category !== events[j].category) {
      eligiblePairs.push([i, j]);
    }
  }
}

function newQuestion() {
  if (eligiblePairs.length === 0) {
    feedback.textContent = "No eligible event pairs. Add more events to events.js.";
    buttons.forEach(button => { button.disabled = true; });
    nextButton.hidden = true;
    return;
  }

  let available = eligiblePairs.filter(([i, j]) => !usedPairs.has(`${i}-${j}`));
  if (!available.length) {
    usedPairs.clear();
    available = eligiblePairs;
  }

  const [i, j] = randomItem(available);
  usedPairs.add(`${i}-${j}`);
  currentPair = Math.random() < 0.5 ? [events[i], events[j]] : [events[j], events[i]];
  answered = false;

  buttons.forEach((button, index) => {
    const event = currentPair[index];
    button.className = "event";
    button.disabled = false;
    button.replaceChildren();

    const category = document.createElement("span");
    category.className = "category";
    category.textContent = event.category;

    const description = document.createElement("span");
    description.className = "description";
    description.textContent = event.text;

    const year = document.createElement("span");
    year.className = "year";
    year.textContent = event.year;
    year.hidden = true;

    button.append(category, description, year);
  });

  feedback.textContent = "";
  nextButton.hidden = true;
}

function makeGuess(index) {
  if (answered || !currentPair) return;
  answered = true;
  const correctIndex = currentPair[0].year < currentPair[1].year ? 0 : 1;
  const correct = index === correctIndex;

  if (correct) {
    score++;
    streak++;
    best = Math.max(best, streak);
  } else {
    streak = 0;
  }

  buttons.forEach((button, i) => {
    button.disabled = true;
    button.querySelector(".year").hidden = false;
    if (i === correctIndex) button.classList.add("correct");
    else if (i === index) button.classList.add("wrong");
  });

  document.getElementById("score").textContent = score;
  document.getElementById("streak").textContent = streak;
  document.getElementById("best").textContent = best;

  const first = currentPair[correctIndex];
  const second = currentPair[1 - correctIndex];
  feedback.textContent = `${correct ? "✓ Correct!" : "✗ Not quite!"} `;
  nextButton.hidden = false;
}

buttons.forEach((button, index) => button.addEventListener("click", () => makeGuess(index)));
nextButton.addEventListener("click", newQuestion);
newQuestion();

console.log(`Total events: ${events.length}`);
