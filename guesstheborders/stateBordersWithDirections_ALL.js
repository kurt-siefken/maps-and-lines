const stateBordersWithDirections = [

  {
    state: "Alabama",
    borders: [
      { state: "Tennessee", direction: "⇑" },
      { state: "Georgia", direction: "⇒" },
      { state: "Florida", direction: "⇓" },
      { state: "Mississippi", direction: "⇐" }
    ]
  },
  {
    state: "Alaska",
    borders: [] // No U.S. land borders
  },
  {
    state: "Arizona",
    borders: [
      { state: "California", direction: "⇐" },
      { state: "Nevada", direction: "⇖" },
      { state: "Utah", direction: "⇑" },
      { state: "Colorado", direction: "⇗" },
      { state: "New Mexico", direction: "⇒" }
    ]
  },
  {
    state: "Arkansas",
    borders: [
      { state: "Missouri", direction: "⇑" },
      { state: "Tennessee", direction: "⇒" },
      { state: "Mississippi", direction: "⇘" },
      { state: "Louisiana", direction: "⇓" },
      { state: "Texas", direction: "⇙" },
      { state: "Oklahoma", direction: "⇐" }
    ]
  },
  {
    state: "California",
    borders: [
      { state: "Oregon", direction: "⇑" },
      { state: "Nevada", direction: "⇒" },
      { state: "Arizona", direction: "⇘" }
    ]
  },
  {
    state: "Colorado",
    borders: [
      { state: "Wyoming", direction: "⇑" },
      { state: "Nebraska", direction: "⇗" },
      { state: "Kansas", direction: "⇒" },
      { state: "Oklahoma", direction: "⇘" },
      { state: "New Mexico", direction: "⇓" },
      { state: "Arizona", direction: "⇙" },
      { state: "Utah", direction: "⇐" }
    ]
  },
  {
    state: "Connecticut",
    borders: [
      { state: "Massachusetts", direction: "⇑" },
      { state: "Rhode Island", direction: "⇒" },
      { state: "New York", direction: "⇐" }
    ]
  },
  {
    state: "Delaware",
    borders: [
      { state: "Pennsylvania", direction: "⇑" },
      { state: "New Jersey", direction: "⇗" },
      { state: "Maryland", direction: "⇙" }
    ]
  },
  {
    state: "Florida",
    borders: [
      { state: "Georgia", direction: "⇑" },
      { state: "Alabama", direction: "⇖" }
    ]
  },
  {
    state: "Georgia",
    borders: [
      { state: "Tennessee", direction: "⇖" },
      { state: "North Carolina", direction: "⇑" },
      { state: "South Carolina", direction: "⇗" },
      { state: "Florida", direction: "⇓" },
      { state: "Alabama", direction: "⇐" }
    ]
  }
,

  {
    state: "Hawaii",
    borders: [] // No U.S. land borders
  },
  {
    state: "Idaho",
    borders: [
      { state: "Montana", direction: "⇗" },
      { state: "Wyoming", direction: "⇒" },
      { state: "Utah", direction: "⇘" },
      { state: "Nevada", direction: "⇓" },
      { state: "Oregon", direction: "⇐" },
      { state: "Washington", direction: "⇖" }
    ]
  },
  {
    state: "Illinois",
    borders: [
      { state: "Wisconsin", direction: "⇑" },
      { state: "Iowa", direction: "⇖" },
      { state: "Missouri", direction: "⇐" },
      { state: "Kentucky", direction: "⇘" },
      { state: "Indiana", direction: "⇒" }
    ]
  },
  {
    state: "Indiana",
    borders: [
      { state: "Michigan", direction: "⇑" },
      { state: "Ohio", direction: "⇒" },
      { state: "Kentucky", direction: "⇓" },
      { state: "Illinois", direction: "⇐" }
    ]
  },
  {
    state: "Iowa",
    borders: [
      { state: "Minnesota", direction: "⇑" },
      { state: "Wisconsin", direction: "⇗" },
      { state: "Illinois", direction: "⇒" },
      { state: "Missouri", direction: "⇓" },
      { state: "Nebraska", direction: "⇐" },
      { state: "South Dakota", direction: "⇖" }
    ]
  },
  {
    state: "Kansas",
    borders: [
      { state: "Nebraska", direction: "⇑" },
      { state: "Missouri", direction: "⇒" },
      { state: "Oklahoma", direction: "⇓" },
      { state: "Colorado", direction: "⇐" }
    ]
  },
  {
    state: "Kentucky",
    borders: [
      { state: "Illinois", direction: "⇖" },
      { state: "Indiana", direction: "⇑" },
      { state: "Ohio", direction: "⇗" },
      { state: "West Virginia", direction: "⇒" },
      { state: "Virginia", direction: "⇒" },
      { state: "Tennessee", direction: "⇓" },
      { state: "Missouri", direction: "⇐" }
    ]
  },
  {
    state: "Louisiana",
    borders: [
      { state: "Arkansas", direction: "⇑" },
      { state: "Mississippi", direction: "⇒" },
      { state: "Texas", direction: "⇐" }
    ]
  },
  {
    state: "Maine",
    borders: [
      { state: "New Hampshire", direction: "⇐" }
    ]
  },
  {
    state: "Maryland",
    borders: [
      { state: "Pennsylvania", direction: "⇑" },
      { state: "Delaware", direction: "⇒" },
      { state: "Virginia", direction: "⇓" },
      { state: "West Virginia", direction: "⇐" }
    ]
  }
,

  {
    state: "Massachusetts",
    borders: [
      { state: "New Hampshire", direction: "⇑" },
      { state: "Vermont", direction: "⇖" },
      { state: "New York", direction: "⇐" },
      { state: "Connecticut", direction: "⇓" },
      { state: "Rhode Island", direction: "⇘" }
    ]
  },
  {
    state: "Michigan",
    borders: [
      { state: "Ohio", direction: "⇓" },
      { state: "Indiana", direction: "⇙" },
      { state: "Wisconsin", direction: "⇐" }
    ]
  },
  {
    state: "Minnesota",
    borders: [
      { state: "North Dakota", direction: "⇖" },
      { state: "South Dakota", direction: "⇐" },
      { state: "Iowa", direction: "⇓" },
      { state: "Wisconsin", direction: "⇒" }
    ]
  },
  {
    state: "Mississippi",
    borders: [
      { state: "Tennessee", direction: "⇑" },
      { state: "Alabama", direction: "⇒" },
      { state: "Louisiana", direction: "⇙" },
      { state: "Arkansas", direction: "⇖" }
    ]
  },
  {
    state: "Missouri",
    borders: [
      { state: "Iowa", direction: "⇑" },
      { state: "Illinois", direction: "⇒" },
      { state: "Kentucky", direction: "⇘" },
      { state: "Tennessee", direction: "⇓" },
      { state: "Arkansas", direction: "⇙" },
      { state: "Oklahoma", direction: "⇐" },
      { state: "Kansas", direction: "⇖" },
      { state: "Nebraska", direction: "⇑" }
    ]
  },
  {
    state: "Montana",
    borders: [
      { state: "North Dakota", direction: "⇒" },
      { state: "South Dakota", direction: "⇘" },
      { state: "Wyoming", direction: "⇓" },
      { state: "Idaho", direction: "⇐" }
    ]
  },
  {
    state: "Nebraska",
    borders: [
      { state: "South Dakota", direction: "⇑" },
      { state: "Iowa", direction: "⇒" },
      { state: "Missouri", direction: "⇘" },
      { state: "Kansas", direction: "⇓" },
      { state: "Colorado", direction: "⇙" },
      { state: "Wyoming", direction: "⇐" }
    ]
  },
  {
    state: "Nevada",
    borders: [
      { state: "Oregon", direction: "⇖" },
      { state: "Idaho", direction: "⇗" },
      { state: "Utah", direction: "⇒" },
      { state: "Arizona", direction: "⇘" },
      { state: "California", direction: "⇐" }
    ]
  },
  {
    state: "New Hampshire",
    borders: [
      { state: "Maine", direction: "⇒" },
      { state: "Massachusetts", direction: "⇓" },
      { state: "Vermont", direction: "⇐" }
    ]
  },
  {
    state: "New Jersey",
    borders: [
      { state: "New York", direction: "⇑" },
      { state: "Pennsylvania", direction: "⇐" },
      { state: "Delaware", direction: "⇙" }
    ]
  }
,

  {
    state: "New Mexico",
    borders: [
      { state: "Arizona", direction: "⇐" },
      { state: "Utah", direction: "⇖" },
      { state: "Colorado", direction: "⇑" },
      { state: "Oklahoma", direction: "⇗" },
      { state: "Texas", direction: "⇒" }
    ]
  },
  {
    state: "New York",
    borders: [
      { state: "Vermont", direction: "⇒" },
      { state: "Massachusetts", direction: "⇘" },
      { state: "Connecticut", direction: "⇓" },
      { state: "New Jersey", direction: "⇙" },
      { state: "Pennsylvania", direction: "⇐" }
    ]
  },
  {
    state: "North Carolina",
    borders: [
      { state: "Virginia", direction: "⇑" },
      { state: "Tennessee", direction: "⇐" },
      { state: "Georgia", direction: "⇙" },
      { state: "South Carolina", direction: "⇓" }
    ]
  },
  {
    state: "North Dakota",
    borders: [
      { state: "Minnesota", direction: "⇒" },
      { state: "South Dakota", direction: "⇓" },
      { state: "Montana", direction: "⇐" }
    ]
  },
  {
    state: "Ohio",
    borders: [
      { state: "Michigan", direction: "⇖" },
      { state: "Pennsylvania", direction: "⇒" },
      { state: "West Virginia", direction: "⇘" },
      { state: "Kentucky", direction: "⇓" },
      { state: "Indiana", direction: "⇐" }
    ]
  },
  {
    state: "Oklahoma",
    borders: [
      { state: "Colorado", direction: "⇖" },
      { state: "Kansas", direction: "⇑" },
      { state: "Missouri", direction: "⇗" },
      { state: "Arkansas", direction: "⇒" },
      { state: "Texas", direction: "⇓" },
      { state: "New Mexico", direction: "⇐" }
    ]
  },
  {
    state: "Oregon",
    borders: [
      { state: "Washington", direction: "⇑" },
      { state: "Idaho", direction: "⇒" },
      { state: "Nevada", direction: "⇘" },
      { state: "California", direction: "⇓" }
    ]
  },
  {
    state: "Pennsylvania",
    borders: [
      { state: "New York", direction: "⇑" },
      { state: "New Jersey", direction: "⇒" },
      { state: "Delaware", direction: "⇘" },
      { state: "Maryland", direction: "⇓" },
      { state: "West Virginia", direction: "⇙" },
      { state: "Ohio", direction: "⇐" }
    ]
  },
  {
    state: "Rhode Island",
    borders: [
      { state: "Massachusetts", direction: "⇑" },
      { state: "Connecticut", direction: "⇐" }
    ]
  },
  {
    state: "South Carolina",
    borders: [
      { state: "North Carolina", direction: "⇑" },
      { state: "Georgia", direction: "⇐" }
    ]
  },
  {
    state: "South Dakota",
    borders: [
      { state: "North Dakota", direction: "⇑" },
      { state: "Minnesota", direction: "⇒" },
      { state: "Iowa", direction: "⇘" },
      { state: "Nebraska", direction: "⇓" },
      { state: "Wyoming", direction: "⇐" },
      { state: "Montana", direction: "⇖" }
    ]
  }
,

  {
    state: "Tennessee",
    borders: [
      { state: "Kentucky", direction: "⇑" },
      { state: "Virginia", direction: "⇗" },
      { state: "North Carolina", direction: "⇒" },
      { state: "Georgia", direction: "⇘" },
      { state: "Alabama", direction: "⇓" },
      { state: "Mississippi", direction: "⇙" },
      { state: "Arkansas", direction: "⇐" },
      { state: "Missouri", direction: "⇖" }
    ]
  },
  {
    state: "Texas",
    borders: [
      { state: "New Mexico", direction: "⇐" },
      { state: "Oklahoma", direction: "⇑" },
      { state: "Arkansas", direction: "⇗" },
      { state: "Louisiana", direction: "⇒" }
    ]
  },
  {
    state: "Utah",
    borders: [
      { state: "Idaho", direction: "⇑" },
      { state: "Wyoming", direction: "⇗" },
      { state: "Colorado", direction: "⇒" },
      { state: "New Mexico", direction: "⇘" },
      { state: "Arizona", direction: "⇓" },
      { state: "Nevada", direction: "⇐" }
    ]
  },
  {
    state: "Vermont",
    borders: [
      { state: "New Hampshire", direction: "⇒" },
      { state: "Massachusetts", direction: "⇓" },
      { state: "New York", direction: "⇐" }
    ]
  },
  {
    state: "Virginia",
    borders: [
      { state: "Maryland", direction: "⇑" },
      { state: "District of Columbia", direction: "⇑" },
      { state: "North Carolina", direction: "⇓" },
      { state: "Tennessee", direction: "⇙" },
      { state: "Kentucky", direction: "⇐" },
      { state: "West Virginia", direction: "⇐" }
    ]
  },
  {
    state: "Washington",
    borders: [
      { state: "Idaho", direction: "⇒" },
      { state: "Oregon", direction: "⇓" }
    ]
  },
  {
    state: "West Virginia",
    borders: [
      { state: "Pennsylvania", direction: "⇑" },
      { state: "Maryland", direction: "⇗" },
      { state: "Virginia", direction: "⇒" },
      { state: "Kentucky", direction: "⇙" },
      { state: "Ohio", direction: "⇖" }
    ]
  },
  {
    state: "Wisconsin",
    borders: [
      { state: "Minnesota", direction: "⇐" },
      { state: "Iowa", direction: "⇙" },
      { state: "Illinois", direction: "⇓" },
      { state: "Michigan", direction: "⇒" }
    ]
  },
  {
    state: "Wyoming",
    borders: [
      { state: "Montana", direction: "⇑" },
      { state: "South Dakota", direction: "⇒" },
      { state: "Nebraska", direction: "⇘" },
      { state: "Colorado", direction: "⇓" },
      { state: "Utah", direction: "⇙" },
      { state: "Idaho", direction: "⇐" }
    ]
  }

];






stateBordersWithDirections.sort((a, b) => {
  const nameA = a.state.toLowerCase();
  const nameB = b.state.toLowerCase();
  return nameA.localeCompare(nameB);
});


stateBordersWithDirections.forEach(entry => {
  entry.borders.sort((a, b) => {
    const nameA = (a.country || a.state).toLowerCase();
    const nameB = (b.country || b.state).toLowerCase();
    return nameA.localeCompare(nameB);
  });
});















const CorrectMessage = [
	"Nailed it!", 
	"Bullseye!", 
	"Right on!",
	"Got it!",
	"Solid answer!",
	"Got that one!",
	"Spot on!",
	"Good answer!",
	"Boom!",
	"Nothin' but net!",
	"That's a border!",
	"That's a border!",
	"That's a border!",
	"You found a border!",
	"You found a border!",
	"You found a border!",
	"You found a border!",
	"You found a border!",
	"You found a border!"
];

const IncorrectMessage = [
	"A little off on that one.", 
	"Juuuust a bit outside.", 
	"Not quite.", 
	"Swing and a miss.",
	"Close, but nope.",
	"Good guess, but not a border.",
	"Sorry, no border there.",
	"Close, but you're way off.",
	"Nope, not a border.",
	"Good guess, but not a border.",
	"Good guess, but not a border.",
	"Good guess, but not a border.",
	"Sorry, not a border.",
	"Sorry, not a border.",
	"Nope, not a border.",
	"Not a border.",
	"Not a border.",
	"Good guess, but not a border.",
];

const WinnerMessage = [
	"<span class='winnermessage'>That's a game winner!</span>", 
	"<span class='winnermessage'>You know your geography!</span>", 
	"<span class='winnermessage'>You cleared the board!</span>",
	"<span class='winnermessage'>Rand McNally called... and you’re hired!</span>",
	"<span class='winnermessage'>Nice game, geography whiz!</span>",
	"<span class='winnermessage'>That's a game winner!</span>", 
	"<span class='winnermessage'>That's a game winner!</span>", 
	"<span class='winnermessage'>That's a game winner!</span>", 
	"<span class='winnermessage'>That's a game winner!</span>", 
	"<span class='winnermessage'>That's a game winner!</span>", 
	"<span class='winnermessage'>That's a game winner!</span>", 
	"<span class='winnermessage'>Winner! Your 5th grade social studies teacher would be proud.</span>", 
	"<span class='winnermessage'>That's a winner! Congrats!</span>", 
	"<span class='winnermessage'>Well played. That's a winner!</span>",
	"<span class='winnermessage'>Ding ding! That's a game winner!</span>",  
	"<span class='winnermessage'>Winner winner, burrito dinner!</span>",
	"<span class='winnermessage'>Well played. That's a winner!</span>",
	"<span class='winnermessage'>Well played. That's a winner!</span>",
	"<span class='winnermessage'>Well played. That's a winner!</span>",
	"<span class='winnermessage'>Nice game. That's a winner!</span>",
	"<span class='winnermessage'>Nice game. That's a winner!</span>",
	"<span class='winnermessage'>And... that's a game winner!</span>",
];

const AceMessage = [
	"🧹 <span class='acemessage'>That's a clean sweep!</span>", 
	"💯 <span class='acemessage'>You aced that board, Magellan!</span>",
	"🏆 <span class='acemessage'>Not a single miss.  Geography legend!</span>", 
	"💯 <span class='acemessage'>And that's a perfect game! Nice job!</span>", 
	"🗺️ <span class='acemessage'>Aced it! Are you a cartographer by any chance?</span>",
	"🧹 <span class='acemessage'>That's a clean sweep!</span>", 
	"🧹 <span class='acemessage'>That's a clean sweep!</span>", 
	"🧹 <span class='acemessage'>That's a clean sweep!</span>", 
	"🧹 <span class='acemessage'>That's a clean sweep!</span>", 
	"🧹 <span class='acemessage'>That's a clean sweep!</span>", 
	"🧹 <span class='acemessage'>That's a clean sweep!</span>", 
	"💯 <span class='acemessage'>You aced the board!</span>", 
	"💯 <span class='acemessage'>You aced the board!</span>",
	"💯 <span class='acemessage'>You aced the board!</span>",
	"💯 <span class='acemessage'>And that's a perfect game! Nice job!</span>", 
	"💯 <span class='acemessage'>And that's a perfect game! Nice job!</span>", 
	"💯 <span class='acemessage'>And that's a perfect game! Nice job!</span>", 
];







