const countryBordersWithDirections = [
  {
    country: "Zimbabwe",
    borders: [
      { country: "Botswana", direction: "west" },
      { country: "Mozambique", direction: "east" },
      { country: "South Africa", direction: "southwest" },
      { country: "Zambia", direction: "north" }
    ]
  },
  {
    country: "Sint Maarten",
    borders: [
      { country: "Saint Martin", direction: "north" }
    ]
  },
  {
    country: "Laos",
    borders: [
      { country: "Myanmar", direction: "northwest" },
      { country: "Cambodia", direction: "south" },
      { country: "China", direction: "north" },
      { country: "Thailand", direction: "southwest" },
      { country: "Vietnam", direction: "southeast" }
    ]
  },
  {
    country: "Latvia",
    borders: [
      { country: "Belarus", direction: "southeast" },
      { country: "Estonia", direction: "northeast" },
      { country: "Lithuania", direction: "southwest" },
      { country: "Russia", direction: "east" }
    ]
  },
  {
    country: "Tajikistan",
    borders: [
      { country: "Afghanistan", direction: "southwest" },
      { country: "China", direction: "east" },
      { country: "Kyrgyzstan", direction: "northeast" },
      { country: "Uzbekistan", direction: "west" }
    ]
  },
  {
    country: "United Kingdom",
    borders: [
      { country: "Ireland", direction: "west" }
    ]
  },
  {
    country: "Nicaragua",
    borders: [
      { country: "Costa Rica", direction: "south" },
      { country: "Honduras", direction: "northwest" }
    ]
  },
  {
    country: "Sudan",
    borders: [
      { country: "Central African Republic", direction: "southwest" },
      { country: "Chad", direction: "west" },
      { country: "Egypt", direction: "north" },
      { country: "Eritrea", direction: "east" },
      { country: "Ethiopia", direction: "southeast" },
      { country: "Libya", direction: "northwest" },
      { country: "South Sudan", direction: "south" }
    ]
  },
  {
    country: "Greece",
    borders: [
      { country: "Albania", direction: "northwest" },
      { country: "Bulgaria", direction: "northeast" },
      { country: "Turkey", direction: "east" },
      { country: "North Macedonia", direction: "north" }
    ]
  },
  {
    country: "Lithuania",
    borders: [
      { country: "Belarus", direction: "southeast" },
      { country: "Latvia", direction: "northeast" },
      { country: "Poland", direction: "southwest" },
      { country: "Russia", direction: "east" }
    ]
  },
  {
    country: "Rwanda",
    borders: [
      { country: "Burundi", direction: "south" },
      { country: "DR Congo", direction: "west" },
      { country: "Tanzania", direction: "southeast" },
      { country: "Uganda", direction: "northeast" }
    ]
  },
  {
    country: "Senegal",
    borders: [
      { country: "Gambia", direction: "west" },
      { country: "Guinea", direction: "southeast" },
      { country: "Guinea-Bissau", direction: "southwest" },
      { country: "Mali", direction: "east" },
      { country: "Mauritania", direction: "north" }
    ]
  },
  {
    country: "Monaco",
    borders: [
      { country: "France", direction: "northwest" }
    ]
  },
  {
    country: "Lesotho",
    borders: [
      { country: "South Africa", direction: "surrounded" }
    ]
  },
  {
    country: "Tunisia",
    borders: [
      { country: "Algeria", direction: "southwest" },
      { country: "Libya", direction: "southeast" }
    ]
  },
  {
    country: "Ecuador",
    borders: [
      { country: "Colombia", direction: "northeast" },
      { country: "Peru", direction: "south" }
    ]
  },
  {
    country: "Kuwait",
    borders: [
      { country: "Iraq", direction: "northwest" },
      { country: "Saudi Arabia", direction: "south" }
    ]
  },
  {
    country: "Chile",
    borders: [
      { country: "Argentina", direction: "southeast" },
      { country: "Bolivia", direction: "northeast" },
      { country: "Peru", direction: "north" }
    ]
  },
  {
    country: "Tanzania",
    borders: [
      { country: "Burundi", direction: "northwest" },
      { country: "DR Congo", direction: "northwest" },
      { country: "Kenya", direction: "northeast" },
      { country: "Malawi", direction: "south" },
      { country: "Mozambique", direction: "south" },
      { country: "Rwanda", direction: "northwest" },
      { country: "Uganda", direction: "northwest" },
      { country: "Zambia", direction: "southwest" }
    ]
  },
  {
    country: "Costa Rica",
    borders: [
      { country: "Nicaragua", direction: "north" },
      { country: "Panama", direction: "east" }
    ]
  },
  {
    country: "Morocco",
    borders: [
      { country: "Algeria", direction: "southeast" },
      { country: "Western Sahara", direction: "southwest" },
      { country: "Spain", direction: "north" }
    ]
  },
  {
    country: "Montenegro",
    borders: [
      { country: "Albania", direction: "southeast" },
      { country: "Bosnia and Herzegovina", direction: "northwest" },
      { country: "Croatia", direction: "northwest" },
      { country: "Kosovo", direction: "east" },
      { country: "Serbia", direction: "northeast" }
    ]
  },
  {
    country: "Portugal",
    borders: [
      { country: "Spain", direction: "east" }
    ]
  },
  {
    country: "United Arab Emirates",
    borders: [
      { country: "Oman", direction: "southeast" },
      { country: "Saudi Arabia", direction: "west" }
    ]
  },
  {
    country: "Libya",
    borders: [
      { country: "Algeria", direction: "west" },
      { country: "Chad", direction: "south" },
      { country: "Egypt", direction: "east" },
      { country: "Niger", direction: "southwest" },
      { country: "Sudan", direction: "southeast" },
      { country: "Tunisia", direction: "northwest" }
    ]
  },
  {
    country: "Luxembourg",
    borders: [
      { country: "Belgium", direction: "northwest" },
      { country: "France", direction: "southwest" },
      { country: "Germany", direction: "northeast" }
    ]
  },
  {
    country: "Algeria",
    borders: [
      { country: "Tunisia", direction: "northeast" },
      { country: "Libya", direction: "east" },
      { country: "Niger", direction: "southeast" },
      { country: "Western Sahara", direction: "west" },
      { country: "Mauritania", direction: "southwest" },
      { country: "Mali", direction: "southwest" },
      { country: "Morocco", direction: "northwest" }
    ]
  },
  {
    country: "Brazil",
    borders: [
      { country: "Argentina", direction: "south" },
      { country: "Bolivia", direction: "southwest" },
      { country: "Colombia", direction: "northwest" },
      { country: "French Guiana", direction: "north" },
      { country: "Guyana", direction: "north" },
      { country: "Paraguay", direction: "south" },
      { country: "Peru", direction: "west" },
      { country: "Suriname", direction: "north" },
      { country: "Uruguay", direction: "south" },
      { country: "Venezuela", direction: "northwest" }
    ]
  },
  {
    country: "Mali",
    borders: [
      { country: "Algeria", direction: "northeast" },
      { country: "Burkina Faso", direction: "southeast" },
      { country: "Guinea", direction: "southwest" },
      { country: "Ivory Coast", direction: "south" },
      { country: "Mauritania", direction: "west" },
      { country: "Niger", direction: "east" },
      { country: "Senegal", direction: "west" }
    ]
  },
  {
    country: "Pakistan",
    borders: [
      { country: "Afghanistan", direction: "northwest" },
      { country: "China", direction: "east" },
      { country: "India", direction: "southeast" },
      { country: "Iran", direction: "west" }
    ]
  },
  {
    country: "Armenia",
    borders: [
      { country: "Azerbaijan", direction: "east" },
      { country: "Georgia", direction: "northwest" },
      { country: "Iran", direction: "southeast" },
      { country: "Turkey", direction: "west" }
    ]
  },
  {
    country: "Bangladesh",
    borders: [
      { country: "Myanmar", direction: "east" },
      { country: "India", direction: "west" }
    ]
  },
  {
    country: "Turkmenistan",
    borders: [
      { country: "Afghanistan", direction: "southeast" },
      { country: "Iran", direction: "southwest" },
      { country: "Kazakhstan", direction: "northeast" },
      { country: "Uzbekistan", direction: "east" }
    ]
  },
  {
    country: "Chad",
    borders: [
      { country: "Cameroon", direction: "southwest" },
      { country: "Central African Republic", direction: "south" },
      { country: "Libya", direction: "north" },
      { country: "Niger", direction: "west" },
      { country: "Nigeria", direction: "southwest" },
      { country: "Sudan", direction: "east" }
    ]
  },
  {
    country: "Bosnia and Herzegovina",
    borders: [
      { country: "Croatia", direction: "northwest" },
      { country: "Montenegro", direction: "southeast" },
      { country: "Serbia", direction: "east" }
    ]
  },
  {
    country: "Botswana",
    borders: [
      { country: "Namibia", direction: "west" },
      { country: "South Africa", direction: "south" },
      { country: "Zambia", direction: "northeast" },
      { country: "Zimbabwe", direction: "east" }
    ]
  },
  {
    country: "Estonia",
    borders: [
      { country: "Latvia", direction: "southwest" },
      { country: "Russia", direction: "east" }
    ]
  },
  {
    country: "Western Sahara",
    borders: [
      { country: "Algeria", direction: "east" },
      { country: "Mauritania", direction: "south" },
      { country: "Morocco", direction: "northeast" }
    ]
  },
  {
    country: "Dominican Republic",
    borders: [
      { country: "Haiti", direction: "west" }
    ]
  },
  {
    country: "United States",
    borders: [
      { country: "Canada", direction: "north" },
      { country: "Mexico", direction: "south" }
    ]
  },
  {
    country: "Colombia",
    borders: [
      { country: "Brazil", direction: "southeast" },
      { country: "Ecuador", direction: "southwest" },
      { country: "Panama", direction: "northwest" },
      { country: "Peru", direction: "south" },
      { country: "Venezuela", direction: "northeast" }
    ]
  },
  {
    country: "Guinea",
    borders: [
      { country: "Ivory Coast", direction: "southeast" },
      { country: "Guinea-Bissau", direction: "west" },
      { country: "Liberia", direction: "south" },
      { country: "Mali", direction: "northeast" },
      { country: "Senegal", direction: "northwest" },
      { country: "Sierra Leone", direction: "southwest" }
    ]
  },
  {
    country: "Ireland",
    borders: [
      { country: "United Kingdom", direction: "east" }
    ]
  },
  {
    country: "Panama",
    borders: [
      { country: "Colombia", direction: "southeast" },
      { country: "Costa Rica", direction: "west" }
    ]
  },
  {
    country: "Mozambique",
    borders: [
      { country: "Malawi", direction: "north" },
      { country: "South Africa", direction: "southwest" },
      { country: "Eswatini", direction: "southwest" },
      { country: "Tanzania", direction: "north" },
      { country: "Zambia", direction: "northwest" },
      { country: "Zimbabwe", direction: "west" }
    ]
  },
  {
    country: "Oman",
    borders: [
      { country: "Saudi Arabia", direction: "west" },
      { country: "United Arab Emirates", direction: "northwest" },
      { country: "Yemen", direction: "southwest" }
    ]
  },
  {
    country: "Czechia",
    borders: [
      { country: "Austria", direction: "southwest" },
      { country: "Germany", direction: "west" },
      { country: "Poland", direction: "northeast" },
      { country: "Slovakia", direction: "east" }
    ]
  },
  {
    country: "Haiti",
    borders: [
      { country: "Dominican Republic", direction: "east" }
    ]
  },
  {
    country: "Nigeria",
    borders: [
      { country: "Benin", direction: "west" },
      { country: "Cameroon", direction: "southeast" },
      { country: "Chad", direction: "northeast" },
      { country: "Niger", direction: "north" }
    ]
  },
  {
    country: "Namibia",
    borders: [
      { country: "Angola", direction: "north" },
      { country: "Botswana", direction: "east" },
      { country: "South Africa", direction: "southeast" },
      { country: "Zambia", direction: "northeast" }
    ]
  },
  {
    country: "Canada",
    borders: [
      { country: "United States", direction: "south" }
    ]
  },
  {
    country: "Niger",
    borders: [
      { country: "Algeria", direction: "northwest" },
      { country: "Benin", direction: "southwest" },
      { country: "Burkina Faso", direction: "west" },
      { country: "Chad", direction: "east" },
      { country: "Libya", direction: "northeast" },
      { country: "Mali", direction: "west" },
      { country: "Nigeria", direction: "south" }
    ]
  },
  {
    country: "Indonesia",
    borders: [
      { country: "Timor-Leste", direction: "southeast" },
      { country: "Malaysia", direction: "northwest" },
      { country: "Papua New Guinea", direction: "east" }
    ]
  },
  {
    country: "Yemen",
    borders: [
      { country: "Oman", direction: "northeast" },
      { country: "Saudi Arabia", direction: "north" }
    ]
  },
  {
    country: "Palestine",
    borders: [
      { country: "Israel", direction: "south" },
      { country: "Egypt", direction: "southwest" },
      { country: "Jordan", direction: "southeast" }
    ]
  },
  {
    country: "Gabon",
    borders: [
      { country: "Cameroon", direction: "north" },
      { country: "Republic of the Congo", direction: "east" },
      { country: "Equatorial Guinea", direction: "northwest" }
    ]
  },
  {
    country: "Eritrea",
    borders: [
      { country: "Djibouti", direction: "southeast" },
      { country: "Ethiopia", direction: "south" },
      { country: "Sudan", direction: "west" }
    ]
  },
  {
    country: "Hong Kong",
    borders: [
      { country: "China", direction: "northwest" }
    ]
  },
  {
    country: "Slovakia",
    borders: [
      { country: "Austria", direction: "west" },
      { country: "Czechia", direction: "west" },
      { country: "Hungary", direction: "south" },
      { country: "Poland", direction: "north" },
      { country: "Ukraine", direction: "east" }
    ]
  },
  {
    country: "Slovenia",
    borders: [
      { country: "Austria", direction: "northwest" },
      { country: "Croatia", direction: "southeast" },
      { country: "Italy", direction: "southwest" },
      { country: "Hungary", direction: "east" }
    ]
  },
  {
    country: "Germany",
    borders: [
      { country: "Austria", direction: "southeast" },
      { country: "Belgium", direction: "west" },
      { country: "Czechia", direction: "east" },
      { country: "Denmark", direction: "north" },
      { country: "France", direction: "southwest" },
      { country: "Luxembourg", direction: "southwest" },
      { country: "Netherlands", direction: "northwest" },
      { country: "Poland", direction: "east" },
      { country: "Switzerland", direction: "south" }
    ]
  },
  {
    country: "Kosovo",
    borders: [
      { country: "Albania", direction: "southwest" },
      { country: "North Macedonia", direction: "southeast" },
      { country: "Montenegro", direction: "west" },
      { country: "Serbia", direction: "north" }
    ]
  },
  {
    country: "Ivory Coast",
    borders: [
      { country: "Burkina Faso", direction: "northeast" },
      { country: "Ghana", direction: "east" },
      { country: "Guinea", direction: "northwest" },
      { country: "Liberia", direction: "west" },
      { country: "Mali", direction: "north" }
    ]
  },
  {
    country: "Sri Lanka",
    borders: [
      { country: "India", direction: "north" }
    ]
  },
  {
    country: "Saint Martin",
    borders: [
      { country: "Sint Maarten", direction: "south" }
    ]
  },
  {
    country: "Belgium",
    borders: [
      { country: "France", direction: "south" },
      { country: "Germany", direction: "east" },
      { country: "Luxembourg", direction: "southeast" },
      { country: "Netherlands", direction: "northeast" }
    ]
  },
  {
    country: "Israel",
    borders: [
      { country: "Egypt", direction: "southwest" },
      { country: "Jordan", direction: "southeast" },
      { country: "Lebanon", direction: "north" },
      { country: "Palestine", direction: "north" },
      { country: "Syria", direction: "northeast" }
    ]
  },
  {
    country: "Denmark",
    borders: [
      { country: "Germany", direction: "south" }
    ]
  },
  {
    country: "Gibraltar",
    borders: [
      { country: "Spain", direction: "north" }
    ]
  },
  {
    country: "Syria",
    borders: [
      { country: "Iraq", direction: "east" },
      { country: "Israel", direction: "southwest" },
      { country: "Jordan", direction: "southwest" },
      { country: "Lebanon", direction: "southwest" },
      { country: "Turkey", direction: "northwest" }
    ]
  },
  {
    country: "Timor-Leste",
    borders: [
      { country: "Indonesia", direction: "northwest" }
    ]
  },
  {
    country: "San Marino",
    borders: [
      { country: "Italy", direction: "surrounded" }
    ]
  },
  {
    country: "Gambia",
    borders: [
      { country: "Senegal", direction: "east" }
    ]
  },
  {
    country: "Peru",
    borders: [
      { country: "Bolivia", direction: "southeast" },
      { country: "Brazil", direction: "east" },
      { country: "Chile", direction: "south" },
      { country: "Colombia", direction: "north" },
      { country: "Ecuador", direction: "north" }
    ]
  },
  {
    country: "Guinea-Bissau",
    borders: [
      { country: "Guinea", direction: "east" },
      { country: "Senegal", direction: "northeast" }
    ]
  },
  {
    country: "Sierra Leone",
    borders: [
      { country: "Guinea", direction: "northeast" },
      { country: "Liberia", direction: "southeast" }
    ]
  },
  {
    country: "Turkey",
    borders: [
      { country: "Armenia", direction: "east" },
      { country: "Azerbaijan", direction: "east" },
      { country: "Bulgaria", direction: "west" },
      { country: "Georgia", direction: "east" },
      { country: "Greece", direction: "west" },
      { country: "Iran", direction: "east" },
      { country: "Iraq", direction: "southeast" },
      { country: "Syria", direction: "southeast" }
    ]
  },
  {
    country: "Bolivia",
    borders: [
      { country: "Argentina", direction: "south" },
      { country: "Brazil", direction: "northeast" },
      { country: "Chile", direction: "southwest" },
      { country: "Paraguay", direction: "southeast" },
      { country: "Peru", direction: "northwest" }
    ]
  },
  {
    country: "Norway",
    borders: [
      { country: "Finland", direction: "east" },
      { country: "Sweden", direction: "east" },
      { country: "Russia", direction: "east" }
    ]
  },
  {
    country: "Republic of the Congo",
    borders: [
      { country: "Angola", direction: "south" },
      { country: "Cameroon", direction: "northwest" },
      { country: "Central African Republic", direction: "northeast" },
      { country: "DR Congo", direction: "east" },
      { country: "Gabon", direction: "west" }
    ]
  },
  {
    country: "Eswatini",
    borders: [
      { country: "Mozambique", direction: "northeast" },
      { country: "South Africa", direction: "west" }
    ]
  },
  {
    country: "Paraguay",
    borders: [
      { country: "Argentina", direction: "southwest" },
      { country: "Bolivia", direction: "northwest" },
      { country: "Brazil", direction: "north" }
    ]
  },
  {
    country: "Ukraine",
    borders: [
      { country: "Belarus", direction: "northwest" },
      { country: "Hungary", direction: "west" },
      { country: "Moldova", direction: "southwest" },
      { country: "Poland", direction: "west" },
      { country: "Romania", direction: "southwest" },
      { country: "Russia", direction: "east" },
      { country: "Slovakia", direction: "west" }
    ]
  },
  {
    country: "Malaysia",
    borders: [
      { country: "Brunei", direction: "northeast" },
      { country: "Indonesia", direction: "southeast" },
      { country: "Thailand", direction: "northwest" }
    ]
  },
  {
    country: "Benin",
    borders: [
      { country: "Burkina Faso", direction: "northwest" },
      { country: "Niger", direction: "northeast" },
      { country: "Nigeria", direction: "east" },
      { country: "Togo", direction: "southwest" }
    ]
  },
  {
    country: "Sweden",
    borders: [
      { country: "Finland", direction: "east" },
      { country: "Norway", direction: "west" }
    ]
  },
  {
    country: "Mongolia",
    borders: [
      { country: "China", direction: "south" },
      { country: "Russia", direction: "north" }
    ]
  },
  {
    country: "South Africa",
    borders: [
      { country: "Botswana", direction: "north" },
      { country: "Lesotho", direction: "east" },
      { country: "Mozambique", direction: "northeast" },
      { country: "Namibia", direction: "northwest" },
      { country: "Eswatini", direction: "east" },
      { country: "Zimbabwe", direction: "northeast" }
    ]
  },
  {
    country: "Ghana",
    borders: [
      { country: "Burkina Faso", direction: "north" },
      { country: "Ivory Coast", direction: "west" },
      { country: "Togo", direction: "east" }
    ]
  },
  {
    country: "Iraq",
    borders: [
      { country: "Iran", direction: "east" },
      { country: "Jordan", direction: "west" },
      { country: "Kuwait", direction: "southeast" },
      { country: "Saudi Arabia", direction: "south" },
      { country: "Syria", direction: "west" },
      { country: "Turkey", direction: "northwest" }
    ]
  },
  {
    country: "Vietnam",
    borders: [
      { country: "Cambodia", direction: "southwest" },
      { country: "China", direction: "north" },
      { country: "Laos", direction: "northwest" }
    ]
  },
  {
    country: "Guyana",
    borders: [
      { country: "Brazil", direction: "south" },
      { country: "Suriname", direction: "east" },
      { country: "Venezuela", direction: "northwest" }
    ]
  },
  {
    country: "Azerbaijan",
    borders: [
      { country: "Armenia", direction: "west" },
      { country: "Georgia", direction: "west" },
      { country: "Iran", direction: "southeast" },
      { country: "Russia", direction: "east" },
      { country: "Turkey", direction: "west" }
    ]
  },
  {
    country: "Cameroon",
    borders: [
      { country: "Central African Republic", direction: "east" },
      { country: "Chad", direction: "northeast" },
      { country: "Republic of the Congo", direction: "southeast" },
      { country: "Equatorial Guinea", direction: "southwest" },
      { country: "Gabon", direction: "south" },
      { country: "Nigeria", direction: "northwest" }
    ]
  },
  {
    country: "Egypt",
    borders: [
      { country: "Israel", direction: "northeast" },
      { country: "Libya", direction: "west" },
      { country: "Palestine", direction: "northeast" },
      { country: "Sudan", direction: "south" }
    ]
  },
  {
    country: "Venezuela",
    borders: [
      { country: "Brazil", direction: "southeast" },
      { country: "Colombia", direction: "southwest" },
      { country: "Guyana", direction: "southeast" }
    ]
  },
  {
    country: "Malawi",
    borders: [
      { country: "Mozambique", direction: "south" },
      { country: "Tanzania", direction: "north" },
      { country: "Zambia", direction: "west" }
    ]
  },
  {
    country: "Kyrgyzstan",
    borders: [
      { country: "China", direction: "east" },
      { country: "Kazakhstan", direction: "northwest" },
      { country: "Tajikistan", direction: "southwest" },
      { country: "Uzbekistan", direction: "west" }
    ]
  },
  {
    country: "Bulgaria",
    borders: [
      { country: "Greece", direction: "southwest" },
      { country: "North Macedonia", direction: "west" },
      { country: "Romania", direction: "north" },
      { country: "Serbia", direction: "west" },
      { country: "Turkey", direction: "east" }
    ]
  },
  {
    country: "North Korea",
    borders: [
      { country: "China", direction: "west" },
      { country: "South Korea", direction: "south" },
      { country: "Russia", direction: "northwest" }
    ]
  },
  {
    country: "Andorra",
    borders: [
      { country: "France", direction: "north" },
      { country: "Spain", direction: "southwest" }
    ]
  },
  {
    country: "Angola",
    borders: [
      { country: "Republic of the Congo", direction: "north" },
      { country: "DR Congo", direction: "northeast" },
      { country: "Zambia", direction: "east" },
      { country: "Namibia", direction: "south" }
    ]
  },
  {
    country: "Russia",
    borders: [
      { country: "Azerbaijan", direction: "west" },
      { country: "Belarus", direction: "west" },
      { country: "China", direction: "south" },
      { country: "Estonia", direction: "west" },
      { country: "Finland", direction: "west" },
      { country: "Georgia", direction: "west" },
      { country: "Kazakhstan", direction: "west" },
      { country: "North Korea", direction: "southeast" },
      { country: "Latvia", direction: "west" },
      { country: "Lithuania", direction: "west" },
      { country: "Mongolia", direction: "south" },
      { country: "Norway", direction: "west" },
      { country: "Poland", direction: "west" },
      { country: "Ukraine", direction: "west" }
    ]
  },
  {
    country: "Burkina Faso",
    borders: [
      { country: "Benin", direction: "southeast" },
      { country: "Ivory Coast", direction: "southwest" },
      { country: "Ghana", direction: "south" },
      { country: "Mali", direction: "northwest" },
      { country: "Niger", direction: "east" },
      { country: "Togo", direction: "southeast" }
    ]
  },
  {
    country: "Vatican City",
    borders: [
      { country: "Italy", direction: "surrounded" }
    ]
  },
  {
    country: "Afghanistan",
    borders: [
      { country: "Iran", direction: "west" },
      { country: "Pakistan", direction: "southeast" },
      { country: "Turkmenistan", direction: "northwest" },
      { country: "Uzbekistan", direction: "north" },
      { country: "Tajikistan", direction: "northeast" },
      { country: "China", direction: "east" }
    ]
  },
  {
    country: "Croatia",
    borders: [
      { country: "Bosnia and Herzegovina", direction: "southeast" },
      { country: "Hungary", direction: "east" },
      { country: "Montenegro", direction: "southeast" },
      { country: "Serbia", direction: "east" },
      { country: "Slovenia", direction: "northwest" }
    ]
  },
  {
    country: "Bhutan",
    borders: [
      { country: "China", direction: "northeast" },
      { country: "India", direction: "southwest" }
    ]
  },
  {
    country: "Belarus",
    borders: [
      { country: "Latvia", direction: "northwest" },
      { country: "Lithuania", direction: "northwest" },
      { country: "Poland", direction: "west" },
      { country: "Russia", direction: "east" },
      { country: "Ukraine", direction: "southeast" }
    ]
  },
  {
    country: "Thailand",
    borders: [
      { country: "Myanmar", direction: "north" },
      { country: "Cambodia", direction: "east" },
      { country: "Laos", direction: "northeast" },
      { country: "Malaysia", direction: "southeast" }
    ]
  },
  {
    country: "Georgia",
    borders: [
      { country: "Armenia", direction: "southeast" },
      { country: "Azerbaijan", direction: "east" },
      { country: "Russia", direction: "east" },
      { country: "Turkey", direction: "west" }
    ]
  },
  {
    country: "India",
    borders: [
      { country: "Bangladesh", direction: "east" },
      { country: "Bhutan", direction: "northeast" },
      { country: "Myanmar", direction: "east" },
      { country: "China", direction: "northeast" },
      { country: "Nepal", direction: "northeast" },
      { country: "Pakistan", direction: "northwest" }
    ]
  },
  {
    country: "China",
    borders: [
      { country: "Afghanistan", direction: "west" },
      { country: "Bhutan", direction: "southwest" },
      { country: "Myanmar", direction: "southwest" },
      { country: "Hong Kong", direction: "southeast" },
      { country: "India", direction: "southwest" },
      { country: "Kazakhstan", direction: "west" },
      { country: "Nepal", direction: "west" },
      { country: "North Korea", direction: "east" },
      { country: "Kyrgyzstan", direction: "west" },
      { country: "Laos", direction: "south" },
      { country: "Macau", direction: "southeast" },
      { country: "Mongolia", direction: "north" },
      { country: "Pakistan", direction: "west" },
      { country: "Russia", direction: "north" },
      { country: "Tajikistan", direction: "west" },
      { country: "Vietnam", direction: "south" }
    ]
  },
  {
    country: "Djibouti",
    borders: [
      { country: "Eritrea", direction: "northwest" },
      { country: "Ethiopia", direction: "southwest" },
      { country: "Somalia", direction: "east" }
    ]
  },
  {
    country: "Saudi Arabia",
    borders: [
      { country: "Iraq", direction: "north" },
      { country: "Jordan", direction: "northwest" },
      { country: "Kuwait", direction: "north" },
      { country: "Oman", direction: "east" },
      { country: "Qatar", direction: "east" },
      { country: "United Arab Emirates", direction: "east" },
      { country: "Yemen", direction: "south" }
    ]
  },
  {
    country: "Iran",
    borders: [
      { country: "Afghanistan", direction: "east" },
      { country: "Armenia", direction: "northwest" },
      { country: "Azerbaijan", direction: "northwest" },
      { country: "Iraq", direction: "west" },
      { country: "Pakistan", direction: "east" },
      { country: "Turkey", direction: "west" },
      { country: "Turkmenistan", direction: "northeast" }
    ]
  },
  {
    country: "Zambia",
    borders: [
      { country: "Angola", direction: "west" },
      { country: "Botswana", direction: "southwest" },
      { country: "DR Congo", direction: "north" },
      { country: "Malawi", direction: "east" },
      { country: "Mozambique", direction: "southeast" },
      { country: "Namibia", direction: "southwest" },
      { country: "Tanzania", direction: "northeast" },
      { country: "Zimbabwe", direction: "south" }
    ]
  },
  {
    country: "Ethiopia",
    borders: [
      { country: "Djibouti", direction: "northeast" },
      { country: "Eritrea", direction: "north" },
      { country: "Kenya", direction: "south" },
      { country: "Somalia", direction: "east" },
      { country: "South Sudan", direction: "west" },
      { country: "Sudan", direction: "northwest" }
    ]
  },
  {
    country: "Macau",
    borders: [
      { country: "China", direction: "northwest" }
    ]
  },
  {
    country: "Guatemala",
    borders: [
      { country: "Belize", direction: "northeast" },
      { country: "El Salvador", direction: "southeast" },
      { country: "Honduras", direction: "east" },
      { country: "Mexico", direction: "northwest" }
    ]
  },
  {
    country: "Suriname",
    borders: [
      { country: "Brazil", direction: "south" },
      { country: "French Guiana", direction: "east" },
      { country: "Guyana", direction: "west" }
    ]
  },
  {
    country: "Uruguay",
    borders: [
      { country: "Argentina", direction: "west" },
      { country: "Brazil", direction: "north" }
    ]
  },
  {
    country: "Italy",
    borders: [
      { country: "Austria", direction: "north" },
      { country: "France", direction: "west" },
      { country: "San Marino", direction: "northwest" },
      { country: "Slovenia", direction: "northeast" },
      { country: "Switzerland", direction: "northwest" },
      { country: "Vatican City", direction: "south" }
    ]
  },
  {
    country: "Switzerland",
    borders: [
      { country: "Austria", direction: "east" },
      { country: "France", direction: "west" },
      { country: "Italy", direction: "southeast" },
      { country: "Liechtenstein", direction: "east" },
      { country: "Germany", direction: "north" }
    ]
  },
  {
    country: "DR Congo",
    borders: [
      { country: "Angola", direction: "southwest" },
      { country: "Burundi", direction: "southeast" },
      { country: "Central African Republic", direction: "northwest" },
      { country: "Republic of the Congo", direction: "west" },
      { country: "Rwanda", direction: "east" },
      { country: "South Sudan", direction: "northeast" },
      { country: "Tanzania", direction: "southeast" },
      { country: "Uganda", direction: "east" },
      { country: "Zambia", direction: "south" }
    ]
  },
  {
    country: "Finland",
    borders: [
      { country: "Norway", direction: "west" },
      { country: "Sweden", direction: "west" },
      { country: "Russia", direction: "east" }
    ]
  },
  {
    country: "El Salvador",
    borders: [
      { country: "Guatemala", direction: "northwest" },
      { country: "Honduras", direction: "northeast" }
    ]
  },
  {
    country: "Jordan",
    borders: [
      { country: "Iraq", direction: "east" },
      { country: "Israel", direction: "northwest" },
      { country: "Palestine", direction: "northwest" },
      { country: "Saudi Arabia", direction: "southeast" },
      { country: "Syria", direction: "northeast" }
    ]
  },
  {
    country: "Poland",
    borders: [
      { country: "Belarus", direction: "east" },
      { country: "Czechia", direction: "southwest" },
      { country: "Germany", direction: "west" },
      { country: "Lithuania", direction: "northeast" },
      { country: "Russia", direction: "east" },
      { country: "Slovakia", direction: "south" },
      { country: "Ukraine", direction: "east" }
    ]
  },
  {
    country: "Mauritania",
    borders: [
      { country: "Algeria", direction: "northeast" },
      { country: "Mali", direction: "east" },
      { country: "Senegal", direction: "south" },
      { country: "Western Sahara", direction: "north" }
    ]
  },
  {
    country: "North Macedonia",
    borders: [
      { country: "Albania", direction: "southwest" },
      { country: "Bulgaria", direction: "east" },
      { country: "Greece", direction: "south" },
      { country: "Kosovo", direction: "northwest" },
      { country: "Serbia", direction: "northwest" }
    ]
  },
  {
    country: "Togo",
    borders: [
      { country: "Benin", direction: "northeast" },
      { country: "Burkina Faso", direction: "northwest" },
      { country: "Ghana", direction: "west" }
    ]
  },
  {
    country: "Myanmar",
    borders: [
      { country: "Bangladesh", direction: "west" },
      { country: "China", direction: "northeast" },
      { country: "India", direction: "west" },
      { country: "Laos", direction: "southeast" },
      { country: "Thailand", direction: "south" }
    ]
  },
  {
    country: "Qatar",
    borders: [
      { country: "Saudi Arabia", direction: "west" }
    ]
  },
  {
    country: "France",
    borders: [
      { country: "Andorra", direction: "south" },
      { country: "Belgium", direction: "north" },
      { country: "Germany", direction: "northeast" },
      { country: "Italy", direction: "east" },
      { country: "Luxembourg", direction: "northeast" },
      { country: "Monaco", direction: "southeast" },
      { country: "Spain", direction: "southwest" },
      { country: "Switzerland", direction: "east" }
    ]
  },
  {
    country: "Moldova",
    borders: [
      { country: "Romania", direction: "west" },
      { country: "Ukraine", direction: "northeast" }
    ]
  },
  {
    country: "South Sudan",
    borders: [
      { country: "Central African Republic", direction: "west" },
      { country: "DR Congo", direction: "southwest" },
      { country: "Ethiopia", direction: "east" },
      { country: "Kenya", direction: "southeast" },
      { country: "Sudan", direction: "north" },
      { country: "Uganda", direction: "south" }
    ]
  },
  {
    country: "Brunei",
    borders: [
      { country: "Malaysia", direction: "southwest" }
    ]
  },
  {
    country: "Spain",
    borders: [
      { country: "Andorra", direction: "northeast" },
      { country: "France", direction: "northeast" },
      { country: "Gibraltar", direction: "south" },
      { country: "Portugal", direction: "west" },
      { country: "Morocco", direction: "south" }
    ]
  },
  {
    country: "Papua New Guinea",
    borders: [
      { country: "Indonesia", direction: "west" }
    ]
  },
  {
    country: "Uzbekistan",
    borders: [
      { country: "Afghanistan", direction: "south" },
      { country: "Kazakhstan", direction: "northeast" },
      { country: "Kyrgyzstan", direction: "east" },
      { country: "Tajikistan", direction: "east" },
      { country: "Turkmenistan", direction: "west" }
    ]
  },
  {
    country: "Argentina",
    borders: [
      { country: "Bolivia", direction: "north" },
      { country: "Brazil", direction: "north" },
      { country: "Chile", direction: "northwest" },
      { country: "Paraguay", direction: "northeast" },
      { country: "Uruguay", direction: "east" }
    ]
  },
  {
    country: "South Korea",
    borders: [
      { country: "North Korea", direction: "north" }
    ]
  },
  {
    country: "Belize",
    borders: [
      { country: "Guatemala", direction: "southwest" },
      { country: "Mexico", direction: "northwest" }
    ]
  },
  {
    country: "Mexico",
    borders: [
      { country: "Belize", direction: "southeast" },
      { country: "Guatemala", direction: "southeast" },
      { country: "United States", direction: "north" }
    ]
  },
  {
    country: "Serbia",
    borders: [
      { country: "Bosnia and Herzegovina", direction: "west" },
      { country: "Bulgaria", direction: "east" },
      { country: "Croatia", direction: "west" },
      { country: "Hungary", direction: "north" },
      { country: "Kosovo", direction: "south" },
      { country: "North Macedonia", direction: "southeast" },
      { country: "Montenegro", direction: "southwest" },
      { country: "Romania", direction: "northeast" }
    ]
  },
  {
    country: "Cambodia",
    borders: [
      { country: "Laos", direction: "north" },
      { country: "Thailand", direction: "west" },
      { country: "Vietnam", direction: "northeast" }
    ]
  },
  {
    country: "Romania",
    borders: [
      { country: "Bulgaria", direction: "south" },
      { country: "Hungary", direction: "west" },
      { country: "Moldova", direction: "east" },
      { country: "Serbia", direction: "southwest" },
      { country: "Ukraine", direction: "northeast" }
    ]
  },
  {
    country: "Hungary",
    borders: [
      { country: "Austria", direction: "west" },
      { country: "Croatia", direction: "west" },
      { country: "Romania", direction: "east" },
      { country: "Serbia", direction: "south" },
      { country: "Slovakia", direction: "north" },
      { country: "Slovenia", direction: "west" },
      { country: "Ukraine", direction: "east" }
    ]
  },
  {
    country: "Somalia",
    borders: [
      { country: "Djibouti", direction: "west" },
      { country: "Ethiopia", direction: "west" },
      { country: "Kenya", direction: "southwest" }
    ]
  },
  {
    country: "Albania",
    borders: [
      { country: "Montenegro", direction: "northwest" },
      { country: "Greece", direction: "southeast" },
      { country: "North Macedonia", direction: "northeast" },
      { country: "Kosovo", direction: "northeast" }
    ]
  },
  {
    country: "Burundi",
    borders: [
      { country: "DR Congo", direction: "northwest" },
      { country: "Rwanda", direction: "north" },
      { country: "Tanzania", direction: "southeast" }
    ]
  },
  {
    country: "Central African Republic",
    borders: [
      { country: "Cameroon", direction: "west" },
      { country: "Chad", direction: "north" },
      { country: "DR Congo", direction: "southeast" },
      { country: "Republic of the Congo", direction: "southwest" },
      { country: "South Sudan", direction: "east" },
      { country: "Sudan", direction: "northeast" }
    ]
  },
  {
    country: "French Guiana",
    borders: [
      { country: "Brazil", direction: "south" },
      { country: "Suriname", direction: "west" }
    ]
  },
  {
    country: "Uganda",
    borders: [
      { country: "DR Congo", direction: "west" },
      { country: "Kenya", direction: "east" },
      { country: "Rwanda", direction: "southwest" },
      { country: "South Sudan", direction: "north" },
      { country: "Tanzania", direction: "southeast" }
    ]
  },
  {
    country: "Honduras",
    borders: [
      { country: "Guatemala", direction: "west" },
      { country: "El Salvador", direction: "southwest" },
      { country: "Nicaragua", direction: "southeast" }
    ]
  },
  {
    country: "Kazakhstan",
    borders: [
      { country: "China", direction: "east" },
      { country: "Kyrgyzstan", direction: "southeast" },
      { country: "Russia", direction: "east" },
      { country: "Turkmenistan", direction: "southwest" },
      { country: "Uzbekistan", direction: "southwest" }
    ]
  },
  {
    country: "Kenya",
    borders: [
      { country: "Ethiopia", direction: "north" },
      { country: "Somalia", direction: "northeast" },
      { country: "South Sudan", direction: "northwest" },
      { country: "Tanzania", direction: "southwest" },
      { country: "Uganda", direction: "west" }
    ]
  },
  {
    country: "Nepal",
    borders: [
      { country: "China", direction: "east" },
      { country: "India", direction: "southwest" }
    ]
  },
  {
    country: "Equatorial Guinea",
    borders: [
      { country: "Cameroon", direction: "northeast" },
      { country: "Gabon", direction: "southeast" }
    ]
  },
  {
    country: "Lebanon",
    borders: [
      { country: "Israel", direction: "south" },
      { country: "Syria", direction: "northeast" }
    ]
  },
  {
    country: "Liechtenstein",
    borders: [
      { country: "Austria", direction: "east" },
      { country: "Switzerland", direction: "west" }
    ]
  },
  {
    country: "Austria",
    borders: [
      { country: "Czechia", direction: "northeast" },
      { country: "Germany", direction: "northwest" },
      { country: "Hungary", direction: "east" },
      { country: "Italy", direction: "south" },
      { country: "Liechtenstein", direction: "west" },
      { country: "Slovakia", direction: "east" },
      { country: "Slovenia", direction: "southeast" },
      { country: "Switzerland", direction: "west" }
    ]
  },
  {
    country: "Netherlands",
    borders: [
      { country: "Belgium", direction: "southwest" },
      { country: "Germany", direction: "southeast" }
    ]
  },
  {
    country: "Liberia",
    borders: [
      { country: "Guinea", direction: "north" },
      { country: "Ivory Coast", direction: "east" },
      { country: "Sierra Leone", direction: "northwest" }
    ]
  },
];
