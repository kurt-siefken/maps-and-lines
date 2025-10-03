const chip = document.getElementById('chip');
const eatZone = document.getElementById('eatZone');
const bowls = document.querySelectorAll('.dip-bowl');

let currentChipIndex = 0;
let score = 0;
let currentRoundValid = true;
let dipsHitThisRound = new Set();
let currentValidDips = [];
let level = 1;
let streak = 0;
let longestStreak = 0;




let isDragging = false;
let offsetX, offsetY;

const chipQueue = [
  { type: 'plain', label: 'Plain', matches: ['onion', 'ranch', 'hummus'] }, // Trip-dip!
  { type: 'nacho', label: 'Nacho', matches: ['salsa', 'guac'] },
  { type: 'pita', label: 'Pita', matches: ['hummus', 'ranch'] },
  { type: 'crinkle', label: 'Crinkle', matches: ['onion', 'ranch'] },
  { type: 'kettle', label: 'Kettle', matches: ['onion', 'ranch'] },
  { type: 'tortilla', label: 'Tortilla', matches: ['salsa', 'guac', 'hummus'] },
  { type: 'sweet', label: 'Sweet Potato', matches: ['ranch', 'guac'] },
];

// ---------- Drag Start ----------
chip.addEventListener('pointerdown', (e) => {
  isDragging = true;
  offsetX = e.clientX - chip.offsetLeft;
  offsetY = e.clientY - chip.offsetTop;
  chip.setPointerCapture(e.pointerId);
});

// ---------- Drag Move ----------
chip.addEventListener('pointermove', (e) => {
  if (!isDragging) return;

  chip.style.left = `${e.clientX - offsetX}px`;
  chip.style.top = `${e.clientY - offsetY}px`;

  const chipRect = chip.getBoundingClientRect();

  bowls.forEach(bowl => {
    const bowlRect = bowl.getBoundingClientRect();
    const dip = bowl.dataset.dip;

    const isOverlapping = !(
      chipRect.right < bowlRect.left + 30 ||
      chipRect.left > bowlRect.right - 30 ||
      chipRect.bottom < bowlRect.top  + 30 ||
      chipRect.top > bowlRect.bottom - 30
    );

    if (isOverlapping && !dipsHitThisRound.has(dip)) {
      dipsHitThisRound.add(dip);

      if (currentValidDips.includes(dip)) {
        bowl.style.backgroundColor  = 'green';
	bowl.style.color  = 'white';
	currentRoundValid = true; // mark the round as invalid
        console.log(`✅ Live dip success: chip in ${dip}`);
      } else {
        bowl.style.backgroundColor = 'red';
 	bowl.style.color = 'white';
        console.log(`❌ Live dip fail: chip in ${dip}`);
        currentRoundValid = false; // mark the round as invalid
      }
    }
  });
});

// ---------- Drag End / Eat Check ----------
chip.addEventListener('pointerup', (e) => {
  isDragging = false;

  const chipRect = chip.getBoundingClientRect();
  const eatRect = eatZone.getBoundingClientRect();

  const isOverEatZone = !(
    chipRect.right < eatRect.left ||
    chipRect.left > eatRect.right ||
    chipRect.bottom < eatRect.top ||
    chipRect.top > eatRect.bottom
  );

if (isOverEatZone) {

  console.log("😋 You ate the chip!");

  // Scoring
  if (currentRoundValid) {
    const pointsEarned = dipsHitThisRound.size;
    score += pointsEarned;
    console.log(`🎉 You earned ${pointsEarned} point(s)!`);


if (pointsEarned == 2) {
console.log(`🎉🎉 That's a double dip!`);
}

if (pointsEarned == 3) {
console.log(`🎉🎉🎉 You bet your ass that's a trip-dip!`);
}

  eatZone.style.backgroundColor  = 'green';
	eatZone.style.color  = 'white';

  streak++;
  if (streak > longestStreak) {
    longestStreak = streak;
  }

    // ✅ Level up if no wrong dips
    level++;
    console.log(`⬆️ Level Up! You're now on level ${level}`);
  } else {
streak = 0;
  eatZone.style.backgroundColor  = 'red';
	eatZone.style.color  = 'white';
    console.log("😬 No points — you dipped into a wrong bowl.");
  }

  updateScoreboard();
saveGameState();


chip.classList.add('shrink-out');

// Delay next round until animation completes
setTimeout(() => {
  chip.classList.remove('shrink-out'); // Reset for next round
  startNextChipRound();
}, 500); // Match the CSS animation duration

}


});


// ---------- Start New Round ----------
function startNextChipRound() {
  chip.style.left = "100px";
  chip.style.top = "100px";

 bowls.forEach(bowl => bowl.style.backgroundColor = "");
bowls.forEach(bowl => bowl.style.color = "#000")
  eatZone.style.backgroundColor = "";
eatZone.style.color = "";

const nextChip = chipQueue[Math.floor(Math.random() * chipQueue.length)];

  chip.dataset.chip = nextChip.type;

  chip.textContent = nextChip.label;
  chip.style.backgroundImage = `url('images/chip-${nextChip.type}.png')`;


  currentValidDips = nextChip.matches;

  currentChipIndex = (currentChipIndex + 1) % chipQueue.length;
  currentRoundValid = false;
  dipsHitThisRound.clear();
}




// ---------- Update Score Display ----------
function updateScoreboard() {
  document.getElementById('scoreboard').textContent =
    `Score: ${score} | Level: ${level} | Streak: ${streak} | Longest: ${longestStreak}`;
}



function saveGameState() {
  const gameState = {
    score,
    level,
    streak,
    longestStreak,
    lastChipType: chip.dataset.chip,
  };
  localStorage.setItem('dipGameSave', JSON.stringify(gameState));
}




function loadGameState() {
  const saved = localStorage.getItem('dipGameSave');
  if (saved) {
    const gameState = JSON.parse(saved);
    score = gameState.score || 0;
    level = gameState.level || 1;
    streak = gameState.streak || 0;
    longestStreak = gameState.longestStreak || 0;

    const savedChip = chipQueue.find(chip => chip.type === gameState.lastChipType);
    if (savedChip) {
      chip.dataset.chip = savedChip.type;
      chip.textContent = savedChip.label;
      currentValidDips = savedChip.matches;
    }

    updateScoreboard();
  }
}



function resetGame() {
  localStorage.removeItem('dipGameSave');
  score = 0;
  level = 1;
  dipsHitThisRound.clear();
  updateScoreboard();
  startNextChipRound();
}








loadGameState();
startNextChipRound();






