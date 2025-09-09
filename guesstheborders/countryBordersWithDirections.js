const countryBordersWithDirections = [
  {
    country: "Zimbabwe",
    borders: [
      { country: "Botswana", direction: "⇐" },
      { country: "Mozambique", direction: "⇒" },
      { country: "South Africa", direction: "⇙" },
      { country: "Zambia", direction: "⇑" }
    ]
  },
  {
    country: "Sint Maarten",
    borders: [
      { country: "Saint Martin", direction: "⇑" }
    ]
  },
  {
    country: "Laos",
    borders: [
      { country: "Myanmar", direction: "⇖" },
      { country: "Cambodia", direction: "⇓" },
      { country: "China", direction: "⇑" },
      { country: "Thailand", direction: "⇙" },
      { country: "Vietnam", direction: "⇘" }
    ]
  },
  {
    country: "Latvia",
    borders: [
      { country: "Belarus", direction: "⇘" },
      { country: "Estonia", direction: "⇗" },
      { country: "Lithuania", direction: "⇙" },
      { country: "Russia", direction: "⇒" }
    ]
  },
  {
    country: "Tajikistan",
    borders: [
      { country: "Afghanistan", direction: "⇙" },
      { country: "China", direction: "⇒" },
      { country: "Kyrgyzstan", direction: "⇗" },
      { country: "Uzbekistan", direction: "⇐" }
    ]
  },
  {
    country: "United Kingdom",
    borders: [
      { country: "Ireland", direction: "⇐" }
    ]
  },
  {
    country: "Nicaragua",
    borders: [
      { country: "Costa Rica", direction: "⇓" },
      { country: "Honduras", direction: "⇖" }
    ]
  },
  {
    country: "Sudan",
    borders: [
      { country: "Central African Republic", direction: "⇙" },
      { country: "Chad", direction: "⇐" },
      { country: "Egypt", direction: "⇑" },
      { country: "Eritrea", direction: "⇒" },
      { country: "Ethiopia", direction: "⇘" },
      { country: "Libya", direction: "⇖" },
      { country: "South Sudan", direction: "⇓" }
    ]
  },
  {
    country: "Greece",
    borders: [
      { country: "Albania", direction: "⇖" },
      { country: "Bulgaria", direction: "⇗" },
      { country: "Turkey", direction: "⇒" },
      { country: "North Macedonia", direction: "⇑" }
    ]
  },
  {
    country: "Lithuania",
    borders: [
      { country: "Belarus", direction: "⇘" },
      { country: "Latvia", direction: "⇗" },
      { country: "Poland", direction: "⇙" },
      { country: "Russia", direction: "⇒" }
    ]
  },
  {
    country: "Rwanda",
    borders: [
      { country: "Burundi", direction: "⇓" },
      { country: "Democratic Republic of the Congo", direction: "⇐" },
      { country: "Tanzania", direction: "⇘" },
      { country: "Uganda", direction: "⇗" }
    ]
  },
  {
    country: "Senegal",
    borders: [
      { country: "Gambia", direction: "⇐" },
      { country: "Guinea", direction: "⇘" },
      { country: "Guinea-Bissau", direction: "⇙" },
      { country: "Mali", direction: "⇒" },
      { country: "Mauritania", direction: "⇑" }
    ]
  },
  {
    country: "Monaco",
    borders: [
      { country: "France", direction: "⇖" }
    ]
  },
  {
    country: "Lesotho",
    borders: [
      { country: "South Africa", direction: "⇕" }
    ]
  },
  {
    country: "Tunisia",
    borders: [
      { country: "Algeria", direction: "⇙" },
      { country: "Libya", direction: "⇘" }
    ]
  },
  {
    country: "Ecuador",
    borders: [
      { country: "Colombia", direction: "⇗" },
      { country: "Peru", direction: "⇓" }
    ]
  },
  {
    country: "Kuwait",
    borders: [
      { country: "Iraq", direction: "⇖" },
      { country: "Saudi Arabia", direction: "⇓" }
    ]
  },
  {
    country: "Chile",
    borders: [
      { country: "Argentina", direction: "⇘" },
      { country: "Bolivia", direction: "⇗" },
      { country: "Peru", direction: "⇑" }
    ]
  },
  {
    country: "Tanzania",
    borders: [
      { country: "Burundi", direction: "⇖" },
      { country: "Democratic Republic of the Congo", direction: "⇖" },
      { country: "Kenya", direction: "⇗" },
      { country: "Malawi", direction: "⇓" },
      { country: "Mozambique", direction: "⇓" },
      { country: "Rwanda", direction: "⇖" },
      { country: "Uganda", direction: "⇖" },
      { country: "Zambia", direction: "⇙" }
    ]
  },
  {
    country: "Costa Rica",
    borders: [
      { country: "Nicaragua", direction: "⇑" },
      { country: "Panama", direction: "⇒" }
    ]
  },
  {
    country: "Morocco",
    borders: [
      { country: "Algeria", direction: "⇘" },
      { country: "Western Sahara", direction: "⇙" },
      { country: "Spain", direction: "⇑" }
    ]
  },
  {
    country: "Montenegro",
    borders: [
      { country: "Albania", direction: "⇘" },
      { country: "Bosnia and Herzegovina", direction: "⇖" },
      { country: "Croatia", direction: "⇖" },
      { country: "Kosovo", direction: "⇒" },
      { country: "Serbia", direction: "⇗" }
    ]
  },
  {
    country: "Portugal",
    borders: [
      { country: "Spain", direction: "⇒" }
    ]
  },
  {
    country: "United Arab Emirates",
    borders: [
      { country: "Oman", direction: "⇘" },
      { country: "Saudi Arabia", direction: "⇐" }
    ]
  },
  {
    country: "Libya",
    borders: [
      { country: "Algeria", direction: "⇐" },
      { country: "Chad", direction: "⇓" },
      { country: "Egypt", direction: "⇒" },
      { country: "Niger", direction: "⇙" },
      { country: "Sudan", direction: "⇘" },
      { country: "Tunisia", direction: "⇖" }
    ]
  },
  {
    country: "Luxembourg",
    borders: [
      { country: "Belgium", direction: "⇖" },
      { country: "France", direction: "⇙" },
      { country: "Germany", direction: "⇗" }
    ]
  },
  {
    country: "Algeria",
    borders: [
      { country: "Tunisia", direction: "⇗" },
      { country: "Libya", direction: "⇒" },
      { country: "Niger", direction: "⇘" },
      { country: "Western Sahara", direction: "⇐" },
      { country: "Mauritania", direction: "⇙" },
      { country: "Mali", direction: "⇙" },
      { country: "Morocco", direction: "⇖" }
    ]
  },
  {
    country: "Brazil",
    borders: [
      { country: "Argentina", direction: "⇓" },
      { country: "Bolivia", direction: "⇙" },
      { country: "Colombia", direction: "⇖" },
      { country: "French Guiana", direction: "⇑" },
      { country: "Guyana", direction: "⇑" },
      { country: "Paraguay", direction: "⇓" },
      { country: "Peru", direction: "⇐" },
      { country: "Suriname", direction: "⇑" },
      { country: "Uruguay", direction: "⇓" },
      { country: "Venezuela", direction: "⇖" }
    ]
  },
  {
    country: "Mali",
    borders: [
      { country: "Algeria", direction: "⇗" },
      { country: "Burkina Faso", direction: "⇘" },
      { country: "Guinea", direction: "⇙" },
      { country: "Ivory Coast", direction: "⇓" },
      { country: "Mauritania", direction: "⇐" },
      { country: "Niger", direction: "⇒" },
      { country: "Senegal", direction: "⇐" }
    ]
  },
  {
    country: "Pakistan",
    borders: [
      { country: "Afghanistan", direction: "⇖" },
      { country: "China", direction: "⇒" },
      { country: "India", direction: "⇘" },
      { country: "Iran", direction: "⇐" }
    ]
  },
  {
    country: "Armenia",
    borders: [
      { country: "Azerbaijan", direction: "⇒" },
      { country: "Georgia", direction: "⇖" },
      { country: "Iran", direction: "⇘" },
      { country: "Turkey", direction: "⇐" }
    ]
  },
  {
    country: "Bangladesh",
    borders: [
      { country: "Myanmar", direction: "⇒" },
      { country: "India", direction: "⇐" }
    ]
  },
  {
    country: "Turkmenistan",
    borders: [
      { country: "Afghanistan", direction: "⇘" },
      { country: "Iran", direction: "⇙" },
      { country: "Kazakhstan", direction: "⇗" },
      { country: "Uzbekistan", direction: "⇒" }
    ]
  },
  {
    country: "Chad",
    borders: [
      { country: "Cameroon", direction: "⇙" },
      { country: "Central African Republic", direction: "⇓" },
      { country: "Libya", direction: "⇑" },
      { country: "Niger", direction: "⇐" },
      { country: "Nigeria", direction: "⇙" },
      { country: "Sudan", direction: "⇒" }
    ]
  },
  {
    country: "Bosnia and Herzegovina",
    borders: [
      { country: "Croatia", direction: "⇖" },
      { country: "Montenegro", direction: "⇘" },
      { country: "Serbia", direction: "⇒" }
    ]
  },
  {
    country: "Botswana",
    borders: [
      { country: "Namibia", direction: "⇐" },
      { country: "South Africa", direction: "⇓" },
      { country: "Zambia", direction: "⇗" },
      { country: "Zimbabwe", direction: "⇒" }
    ]
  },
  {
    country: "Estonia",
    borders: [
      { country: "Latvia", direction: "⇙" },
      { country: "Russia", direction: "⇒" }
    ]
  },
  {
    country: "Western Sahara",
    borders: [
      { country: "Algeria", direction: "⇒" },
      { country: "Mauritania", direction: "⇓" },
      { country: "Morocco", direction: "⇗" }
    ]
  },
  {
    country: "Dominican Republic",
    borders: [
      { country: "Haiti", direction: "⇐" }
    ]
  },
  {
    country: "United States",
    borders: [
      { country: "Canada", direction: "⇑" },
      { country: "Mexico", direction: "⇓" }
    ]
  },
  {
    country: "Colombia",
    borders: [
      { country: "Brazil", direction: "⇘" },
      { country: "Ecuador", direction: "⇙" },
      { country: "Panama", direction: "⇖" },
      { country: "Peru", direction: "⇓" },
      { country: "Venezuela", direction: "⇗" }
    ]
  },
  {
    country: "Guinea",
    borders: [
      { country: "Ivory Coast", direction: "⇘" },
      { country: "Guinea-Bissau", direction: "⇐" },
      { country: "Liberia", direction: "⇓" },
      { country: "Mali", direction: "⇗" },
      { country: "Senegal", direction: "⇖" },
      { country: "Sierra Leone", direction: "⇙" }
    ]
  },
  {
    country: "Ireland",
    borders: [
      { country: "United Kingdom", direction: "⇒" }
    ]
  },
  {
    country: "Panama",
    borders: [
      { country: "Colombia", direction: "⇘" },
      { country: "Costa Rica", direction: "⇐" }
    ]
  },
  {
    country: "Mozambique",
    borders: [
      { country: "Malawi", direction: "⇑" },
      { country: "South Africa", direction: "⇙" },
      { country: "Eswatini", direction: "⇙" },
      { country: "Tanzania", direction: "⇑" },
      { country: "Zambia", direction: "⇖" },
      { country: "Zimbabwe", direction: "⇐" }
    ]
  },
  {
    country: "Oman",
    borders: [
      { country: "Saudi Arabia", direction: "⇐" },
      { country: "United Arab Emirates", direction: "⇖" },
      { country: "Yemen", direction: "⇙" }
    ]
  },
  {
    country: "Czechia",
    borders: [
      { country: "Austria", direction: "⇙" },
      { country: "Germany", direction: "⇐" },
      { country: "Poland", direction: "⇗" },
      { country: "Slovakia", direction: "⇒" }
    ]
  },
  {
    country: "Haiti",
    borders: [
      { country: "Dominican Republic", direction: "⇒" }
    ]
  },
  {
    country: "Nigeria",
    borders: [
      { country: "Benin", direction: "⇐" },
      { country: "Cameroon", direction: "⇘" },
      { country: "Chad", direction: "⇗" },
      { country: "Niger", direction: "⇑" }
    ]
  },
  {
    country: "Namibia",
    borders: [
      { country: "Angola", direction: "⇑" },
      { country: "Botswana", direction: "⇒" },
      { country: "South Africa", direction: "⇘" },
      { country: "Zambia", direction: "⇗" }
    ]
  },
  {
    country: "Canada",
    borders: [
      { country: "United States", direction: "⇓" }
    ]
  },
  {
    country: "Niger",
    borders: [
      { country: "Algeria", direction: "⇖" },
      { country: "Benin", direction: "⇙" },
      { country: "Burkina Faso", direction: "⇐" },
      { country: "Chad", direction: "⇒" },
      { country: "Libya", direction: "⇗" },
      { country: "Mali", direction: "⇐" },
      { country: "Nigeria", direction: "⇓" }
    ]
  },
  {
    country: "Indonesia",
    borders: [
      { country: "Timor-Leste", direction: "⇘" },
      { country: "Malaysia", direction: "⇖" },
      { country: "Papua New Guinea", direction: "⇒" }
    ]
  },
  {
    country: "Yemen",
    borders: [
      { country: "Oman", direction: "⇗" },
      { country: "Saudi Arabia", direction: "⇑" }
    ]
  },
  {
    country: "Palestine",
    borders: [
      { country: "Israel", direction: "⇓" },
      { country: "Egypt", direction: "⇙" },
      { country: "Jordan", direction: "⇘" }
    ]
  },
  {
    country: "Gabon",
    borders: [
      { country: "Cameroon", direction: "⇑" },
      { country: "Congo", direction: "⇒" },
      { country: "Equatorial Guinea", direction: "⇖" }
    ]
  },
  {
    country: "Eritrea",
    borders: [
      { country: "Djibouti", direction: "⇘" },
      { country: "Ethiopia", direction: "⇓" },
      { country: "Sudan", direction: "⇐" }
    ]
  },
  {
    country: "Hong Kong",
    borders: [
      { country: "China", direction: "⇖" }
    ]
  },
  {
    country: "Slovakia",
    borders: [
      { country: "Austria", direction: "⇐" },
      { country: "Czechia", direction: "⇐" },
      { country: "Hungary", direction: "⇓" },
      { country: "Poland", direction: "⇑" },
      { country: "Ukraine", direction: "⇒" }
    ]
  },
  {
    country: "Slovenia",
    borders: [
      { country: "Austria", direction: "⇖" },
      { country: "Croatia", direction: "⇘" },
      { country: "Italy", direction: "⇙" },
      { country: "Hungary", direction: "⇒" }
    ]
  },
  {
    country: "Germany",
    borders: [
      { country: "Austria", direction: "⇘" },
      { country: "Belgium", direction: "⇐" },
      { country: "Czechia", direction: "⇒" },
      { country: "Denmark", direction: "⇑" },
      { country: "France", direction: "⇙" },
      { country: "Luxembourg", direction: "⇙" },
      { country: "Netherlands", direction: "⇖" },
      { country: "Poland", direction: "⇒" },
      { country: "Switzerland", direction: "⇓" }
    ]
  },
  {
    country: "Kosovo",
    borders: [
      { country: "Albania", direction: "⇙" },
      { country: "North Macedonia", direction: "⇘" },
      { country: "Montenegro", direction: "⇐" },
      { country: "Serbia", direction: "⇑" }
    ]
  },
  {
    country: "Ivory Coast",
    borders: [
      { country: "Burkina Faso", direction: "⇗" },
      { country: "Ghana", direction: "⇒" },
      { country: "Guinea", direction: "⇖" },
      { country: "Liberia", direction: "⇐" },
      { country: "Mali", direction: "⇑" }
    ]
  },
  {
    country: "Sri Lanka",
    borders: [
      { country: "India", direction: "⇑" }
    ]
  },
  {
    country: "Saint Martin",
    borders: [
      { country: "Sint Maarten", direction: "⇓" }
    ]
  },
  {
    country: "Belgium",
    borders: [
      { country: "France", direction: "⇓" },
      { country: "Germany", direction: "⇒" },
      { country: "Luxembourg", direction: "⇘" },
      { country: "Netherlands", direction: "⇗" }
    ]
  },
  {
    country: "Israel",
    borders: [
      { country: "Egypt", direction: "⇙" },
      { country: "Jordan", direction: "⇘" },
      { country: "Lebanon", direction: "⇑" },
      { country: "Palestine", direction: "⇑" },
      { country: "Syria", direction: "⇗" }
    ]
  },
  {
    country: "Denmark",
    borders: [
      { country: "Germany", direction: "⇓" }
    ]
  },
  {
    country: "Gibraltar",
    borders: [
      { country: "Spain", direction: "⇑" }
    ]
  },
  {
    country: "Syria",
    borders: [
      { country: "Iraq", direction: "⇒" },
      { country: "Israel", direction: "⇙" },
      { country: "Jordan", direction: "⇙" },
      { country: "Lebanon", direction: "⇙" },
      { country: "Turkey", direction: "⇖" }
    ]
  },
  {
    country: "Timor-Leste",
    borders: [
      { country: "Indonesia", direction: "⇖" }
    ]
  },
  {
    country: "San Marino",
    borders: [
      { country: "Italy", direction: "⇕" }
    ]
  },
  {
    country: "Gambia",
    borders: [
      { country: "Senegal", direction: "⇕" }
    ]
  },
  {
    country: "Peru",
    borders: [
      { country: "Bolivia", direction: "⇘" },
      { country: "Brazil", direction: "⇒" },
      { country: "Chile", direction: "⇓" },
      { country: "Colombia", direction: "⇑" },
      { country: "Ecuador", direction: "⇑" }
    ]
  },
  {
    country: "Guinea-Bissau",
    borders: [
      { country: "Guinea", direction: "⇒" },
      { country: "Senegal", direction: "⇗" }
    ]
  },
  {
    country: "Sierra Leone",
    borders: [
      { country: "Guinea", direction: "⇗" },
      { country: "Liberia", direction: "⇘" }
    ]
  },
  {
    country: "Turkey",
    borders: [
      { country: "Armenia", direction: "⇒" },
      { country: "Azerbaijan", direction: "⇒" },
      { country: "Bulgaria", direction: "⇐" },
      { country: "Georgia", direction: "⇒" },
      { country: "Greece", direction: "⇐" },
      { country: "Iran", direction: "⇒" },
      { country: "Iraq", direction: "⇘" },
      { country: "Syria", direction: "⇘" }
    ]
  },
  {
    country: "Bolivia",
    borders: [
      { country: "Argentina", direction: "⇓" },
      { country: "Brazil", direction: "⇗" },
      { country: "Chile", direction: "⇙" },
      { country: "Paraguay", direction: "⇘" },
      { country: "Peru", direction: "⇖" }
    ]
  },
  {
    country: "Norway",
    borders: [
      { country: "Finland", direction: "⇒" },
      { country: "Sweden", direction: "⇒" },
      { country: "Russia", direction: "⇒" }
    ]
  },
  {
    country: "Congo",
    borders: [
      { country: "Angola", direction: "⇓" },
      { country: "Cameroon", direction: "⇖" },
      { country: "Central African Republic", direction: "⇗" },
      { country: "Democratic Republic of the Congo", direction: "⇒" },
      { country: "Gabon", direction: "⇐" }
    ]
  },
  {
    country: "Eswatini",
    borders: [
      { country: "Mozambique", direction: "⇗" },
      { country: "South Africa", direction: "⇐" }
    ]
  },
  {
    country: "Paraguay",
    borders: [
      { country: "Argentina", direction: "⇙" },
      { country: "Bolivia", direction: "⇖" },
      { country: "Brazil", direction: "⇑" }
    ]
  },
  {
    country: "Ukraine",
    borders: [
      { country: "Belarus", direction: "⇖" },
      { country: "Hungary", direction: "⇐" },
      { country: "Moldova", direction: "⇙" },
      { country: "Poland", direction: "⇐" },
      { country: "Romania", direction: "⇙" },
      { country: "Russia", direction: "⇒" },
      { country: "Slovakia", direction: "⇐" }
    ]
  },
  {
    country: "Malaysia",
    borders: [
      { country: "Brunei", direction: "⇗" },
      { country: "Indonesia", direction: "⇘" },
      { country: "Thailand", direction: "⇖" }
    ]
  },
  {
    country: "Benin",
    borders: [
      { country: "Burkina Faso", direction: "⇖" },
      { country: "Niger", direction: "⇗" },
      { country: "Nigeria", direction: "⇒" },
      { country: "Togo", direction: "⇙" }
    ]
  },
  {
    country: "Sweden",
    borders: [
      { country: "Finland", direction: "⇒" },
      { country: "Norway", direction: "⇐" }
    ]
  },
  {
    country: "Mongolia",
    borders: [
      { country: "China", direction: "⇓" },
      { country: "Russia", direction: "⇑" }
    ]
  },
  {
    country: "South Africa",
    borders: [
      { country: "Botswana", direction: "⇑" },
      { country: "Lesotho", direction: "⇒" },
      { country: "Mozambique", direction: "⇗" },
      { country: "Namibia", direction: "⇖" },
      { country: "Eswatini", direction: "⇒" },
      { country: "Zimbabwe", direction: "⇗" }
    ]
  },
  {
    country: "Ghana",
    borders: [
      { country: "Burkina Faso", direction: "⇑" },
      { country: "Ivory Coast", direction: "⇐" },
      { country: "Togo", direction: "⇒" }
    ]
  },
  {
    country: "Iraq",
    borders: [
      { country: "Iran", direction: "⇒" },
      { country: "Jordan", direction: "⇐" },
      { country: "Kuwait", direction: "⇘" },
      { country: "Saudi Arabia", direction: "⇓" },
      { country: "Syria", direction: "⇐" },
      { country: "Turkey", direction: "⇖" }
    ]
  },
  {
    country: "Vietnam",
    borders: [
      { country: "Cambodia", direction: "⇙" },
      { country: "China", direction: "⇑" },
      { country: "Laos", direction: "⇖" }
    ]
  },
  {
    country: "Guyana",
    borders: [
      { country: "Brazil", direction: "⇓" },
      { country: "Suriname", direction: "⇒" },
      { country: "Venezuela", direction: "⇖" }
    ]
  },
  {
    country: "Azerbaijan",
    borders: [
      { country: "Armenia", direction: "⇐" },
      { country: "Georgia", direction: "⇐" },
      { country: "Iran", direction: "⇘" },
      { country: "Russia", direction: "⇒" },
      { country: "Turkey", direction: "⇐" }
    ]
  },
  {
    country: "Cameroon",
    borders: [
      { country: "Central African Republic", direction: "⇒" },
      { country: "Chad", direction: "⇗" },
      { country: "Congo", direction: "⇘" },
      { country: "Equatorial Guinea", direction: "⇙" },
      { country: "Gabon", direction: "⇓" },
      { country: "Nigeria", direction: "⇖" }
    ]
  },
  {
    country: "Egypt",
    borders: [
      { country: "Israel", direction: "⇗" },
      { country: "Libya", direction: "⇐" },
      { country: "Palestine", direction: "⇗" },
      { country: "Sudan", direction: "⇓" }
    ]
  },
  {
    country: "Venezuela",
    borders: [
      { country: "Brazil", direction: "⇘" },
      { country: "Colombia", direction: "⇙" },
      { country: "Guyana", direction: "⇘" }
    ]
  },
  {
    country: "Malawi",
    borders: [
      { country: "Mozambique", direction: "⇓" },
      { country: "Tanzania", direction: "⇑" },
      { country: "Zambia", direction: "⇐" }
    ]
  },
  {
    country: "Kyrgyzstan",
    borders: [
      { country: "China", direction: "⇒" },
      { country: "Kazakhstan", direction: "⇖" },
      { country: "Tajikistan", direction: "⇙" },
      { country: "Uzbekistan", direction: "⇐" }
    ]
  },
  {
    country: "Bulgaria",
    borders: [
      { country: "Greece", direction: "⇙" },
      { country: "North Macedonia", direction: "⇐" },
      { country: "Romania", direction: "⇑" },
      { country: "Serbia", direction: "⇐" },
      { country: "Turkey", direction: "⇒" }
    ]
  },
  {
    country: "North Korea",
    borders: [
      { country: "China", direction: "⇐" },
      { country: "South Korea", direction: "⇓" },
      { country: "Russia", direction: "⇖" }
    ]
  },
  {
    country: "Andorra",
    borders: [
      { country: "France", direction: "⇑" },
      { country: "Spain", direction: "⇙" }
    ]
  },
  {
    country: "Angola",
    borders: [
      { country: "Congo", direction: "⇑" },
      { country: "Democratic Republic of the Congo", direction: "⇗" },
      { country: "Zambia", direction: "⇒" },
      { country: "Namibia", direction: "⇓" }
    ]
  },
  {
    country: "Russia",
    borders: [
      { country: "Azerbaijan", direction: "⇐" },
      { country: "Belarus", direction: "⇐" },
      { country: "China", direction: "⇓" },
      { country: "Estonia", direction: "⇐" },
      { country: "Finland", direction: "⇐" },
      { country: "Georgia", direction: "⇐" },
      { country: "Kazakhstan", direction: "⇐" },
      { country: "North Korea", direction: "⇘" },
      { country: "Latvia", direction: "⇐" },
      { country: "Lithuania", direction: "⇐" },
      { country: "Mongolia", direction: "⇓" },
      { country: "Norway", direction: "⇐" },
      { country: "Poland", direction: "⇐" },
      { country: "Ukraine", direction: "⇐" }
    ]
  },
  {
    country: "Burkina Faso",
    borders: [
      { country: "Benin", direction: "⇘" },
      { country: "Ivory Coast", direction: "⇙" },
      { country: "Ghana", direction: "⇓" },
      { country: "Mali", direction: "⇖" },
      { country: "Niger", direction: "⇒" },
      { country: "Togo", direction: "⇘" }
    ]
  },
  {
    country: "Vatican City",
    borders: [
      { country: "Italy", direction: "⇕" }
    ]
  },
  {
    country: "Afghanistan",
    borders: [
      { country: "Iran", direction: "⇐" },
      { country: "Pakistan", direction: "⇘" },
      { country: "Turkmenistan", direction: "⇖" },
      { country: "Uzbekistan", direction: "⇑" },
      { country: "Tajikistan", direction: "⇗" },
      { country: "China", direction: "⇒" }
    ]
  },
  {
    country: "Croatia",
    borders: [
      { country: "Bosnia and Herzegovina", direction: "⇘" },
      { country: "Hungary", direction: "⇒" },
      { country: "Montenegro", direction: "⇘" },
      { country: "Serbia", direction: "⇒" },
      { country: "Slovenia", direction: "⇖" }
    ]
  },
  {
    country: "Bhutan",
    borders: [
      { country: "China", direction: "⇗" },
      { country: "India", direction: "⇙" }
    ]
  },
  {
    country: "Belarus",
    borders: [
      { country: "Latvia", direction: "⇖" },
      { country: "Lithuania", direction: "⇖" },
      { country: "Poland", direction: "⇐" },
      { country: "Russia", direction: "⇒" },
      { country: "Ukraine", direction: "⇘" }
    ]
  },
  {
    country: "Thailand",
    borders: [
      { country: "Myanmar", direction: "⇑" },
      { country: "Cambodia", direction: "⇒" },
      { country: "Laos", direction: "⇗" },
      { country: "Malaysia", direction: "⇘" }
    ]
  },
  {
    country: "Georgia",
    borders: [
      { country: "Armenia", direction: "⇘" },
      { country: "Azerbaijan", direction: "⇒" },
      { country: "Russia", direction: "⇒" },
      { country: "Turkey", direction: "⇐" }
    ]
  },
  {
    country: "India",
    borders: [
      { country: "Bangladesh", direction: "⇒" },
      { country: "Bhutan", direction: "⇗" },
      { country: "Myanmar", direction: "⇒" },
      { country: "China", direction: "⇗" },
      { country: "Nepal", direction: "⇗" },
      { country: "Pakistan", direction: "⇖" }
    ]
  },
  {
    country: "China",
    borders: [
      { country: "Afghanistan", direction: "⇐" },
      { country: "Bhutan", direction: "⇙" },
      { country: "Myanmar", direction: "⇙" },
      { country: "Hong Kong", direction: "⇘" },
      { country: "India", direction: "⇙" },
      { country: "Kazakhstan", direction: "⇐" },
      { country: "Nepal", direction: "⇐" },
      { country: "North Korea", direction: "⇒" },
      { country: "Kyrgyzstan", direction: "⇐" },
      { country: "Laos", direction: "⇓" },
      { country: "Macau", direction: "⇘" },
      { country: "Mongolia", direction: "⇑" },
      { country: "Pakistan", direction: "⇐" },
      { country: "Russia", direction: "⇑" },
      { country: "Tajikistan", direction: "⇐" },
      { country: "Vietnam", direction: "⇓" }
    ]
  },
  {
    country: "Djibouti",
    borders: [
      { country: "Eritrea", direction: "⇖" },
      { country: "Ethiopia", direction: "⇙" },
      { country: "Somalia", direction: "⇒" }
    ]
  },
  {
    country: "Saudi Arabia",
    borders: [
      { country: "Iraq", direction: "⇑" },
      { country: "Jordan", direction: "⇖" },
      { country: "Kuwait", direction: "⇑" },
      { country: "Oman", direction: "⇒" },
      { country: "Qatar", direction: "⇒" },
      { country: "United Arab Emirates", direction: "⇒" },
      { country: "Yemen", direction: "⇓" }
    ]
  },
  {
    country: "Iran",
    borders: [
      { country: "Afghanistan", direction: "⇒" },
      { country: "Armenia", direction: "⇖" },
      { country: "Azerbaijan", direction: "⇖" },
      { country: "Iraq", direction: "⇐" },
      { country: "Pakistan", direction: "⇒" },
      { country: "Turkey", direction: "⇐" },
      { country: "Turkmenistan", direction: "⇗" }
    ]
  },
  {
    country: "Zambia",
    borders: [
      { country: "Angola", direction: "⇐" },
      { country: "Botswana", direction: "⇙" },
      { country: "Democratic Republic of the Congo", direction: "⇑" },
      { country: "Malawi", direction: "⇒" },
      { country: "Mozambique", direction: "⇘" },
      { country: "Namibia", direction: "⇙" },
      { country: "Tanzania", direction: "⇗" },
      { country: "Zimbabwe", direction: "⇓" }
    ]
  },
  {
    country: "Ethiopia",
    borders: [
      { country: "Djibouti", direction: "⇗" },
      { country: "Eritrea", direction: "⇑" },
      { country: "Kenya", direction: "⇓" },
      { country: "Somalia", direction: "⇒" },
      { country: "South Sudan", direction: "⇐" },
      { country: "Sudan", direction: "⇖" }
    ]
  },
  {
    country: "Macau",
    borders: [
      { country: "China", direction: "⇖" }
    ]
  },
  {
    country: "Guatemala",
    borders: [
      { country: "Belize", direction: "⇗" },
      { country: "El Salvador", direction: "⇘" },
      { country: "Honduras", direction: "⇒" },
      { country: "Mexico", direction: "⇖" }
    ]
  },
  {
    country: "Suriname",
    borders: [
      { country: "Brazil", direction: "⇓" },
      { country: "French Guiana", direction: "⇒" },
      { country: "Guyana", direction: "⇐" }
    ]
  },
  {
    country: "Uruguay",
    borders: [
      { country: "Argentina", direction: "⇐" },
      { country: "Brazil", direction: "⇑" }
    ]
  },
  {
    country: "Italy",
    borders: [
      { country: "Austria", direction: "⇑" },
      { country: "France", direction: "⇐" },
      { country: "San Marino", direction: "⇖" },
      { country: "Slovenia", direction: "⇗" },
      { country: "Switzerland", direction: "⇖" },
      { country: "Vatican City", direction: "⇓" }
    ]
  },
  {
    country: "Switzerland",
    borders: [
      { country: "Austria", direction: "⇒" },
      { country: "France", direction: "⇐" },
      { country: "Italy", direction: "⇘" },
      { country: "Liechtenstein", direction: "⇒" },
      { country: "Germany", direction: "⇑" }
    ]
  },
  {
    country: "Democratic Republic of the Congo",
    borders: [
      { country: "Angola", direction: "⇙" },
      { country: "Burundi", direction: "⇘" },
      { country: "Central African Republic", direction: "⇖" },
      { country: "Congo", direction: "⇐" },
      { country: "Rwanda", direction: "⇒" },
      { country: "South Sudan", direction: "⇗" },
      { country: "Tanzania", direction: "⇘" },
      { country: "Uganda", direction: "⇒" },
      { country: "Zambia", direction: "⇓" }
    ]
  },
  {
    country: "Finland",
    borders: [
      { country: "Norway", direction: "⇐" },
      { country: "Sweden", direction: "⇐" },
      { country: "Russia", direction: "⇒" }
    ]
  },
  {
    country: "El Salvador",
    borders: [
      { country: "Guatemala", direction: "⇖" },
      { country: "Honduras", direction: "⇗" }
    ]
  },
  {
    country: "Jordan",
    borders: [
      { country: "Iraq", direction: "⇒" },
      { country: "Israel", direction: "⇖" },
      { country: "Palestine", direction: "⇖" },
      { country: "Saudi Arabia", direction: "⇘" },
      { country: "Syria", direction: "⇗" }
    ]
  },
  {
    country: "Poland",
    borders: [
      { country: "Belarus", direction: "⇒" },
      { country: "Czechia", direction: "⇙" },
      { country: "Germany", direction: "⇐" },
      { country: "Lithuania", direction: "⇗" },
      { country: "Russia", direction: "⇒" },
      { country: "Slovakia", direction: "⇓" },
      { country: "Ukraine", direction: "⇒" }
    ]
  },
  {
    country: "Mauritania",
    borders: [
      { country: "Algeria", direction: "⇗" },
      { country: "Mali", direction: "⇒" },
      { country: "Senegal", direction: "⇓" },
      { country: "Western Sahara", direction: "⇑" }
    ]
  },
  {
    country: "North Macedonia",
    borders: [
      { country: "Albania", direction: "⇙" },
      { country: "Bulgaria", direction: "⇒" },
      { country: "Greece", direction: "⇓" },
      { country: "Kosovo", direction: "⇖" },
      { country: "Serbia", direction: "⇖" }
    ]
  },
  {
    country: "Togo",
    borders: [
      { country: "Benin", direction: "⇗" },
      { country: "Burkina Faso", direction: "⇖" },
      { country: "Ghana", direction: "⇐" }
    ]
  },
  {
    country: "Myanmar",
    borders: [
      { country: "Bangladesh", direction: "⇐" },
      { country: "China", direction: "⇗" },
      { country: "India", direction: "⇐" },
      { country: "Laos", direction: "⇘" },
      { country: "Thailand", direction: "⇓" }
    ]
  },
  {
    country: "Qatar",
    borders: [
      { country: "Saudi Arabia", direction: "⇐" }
    ]
  },
  {
    country: "France",
    borders: [
      { country: "Andorra", direction: "⇓" },
      { country: "Belgium", direction: "⇑" },
      { country: "Germany", direction: "⇗" },
      { country: "Italy", direction: "⇒" },
      { country: "Luxembourg", direction: "⇗" },
      { country: "Monaco", direction: "⇘" },
      { country: "Spain", direction: "⇙" },
      { country: "Switzerland", direction: "⇒" }
    ]
  },
  {
    country: "Moldova",
    borders: [
      { country: "Romania", direction: "⇐" },
      { country: "Ukraine", direction: "⇗" }
    ]
  },
  {
    country: "South Sudan",
    borders: [
      { country: "Central African Republic", direction: "⇐" },
      { country: "Democratic Republic of the Congo", direction: "⇙" },
      { country: "Ethiopia", direction: "⇒" },
      { country: "Kenya", direction: "⇘" },
      { country: "Sudan", direction: "⇑" },
      { country: "Uganda", direction: "⇓" }
    ]
  },
  {
    country: "Brunei",
    borders: [
      { country: "Malaysia", direction: "⇙" }
    ]
  },
  {
    country: "Spain",
    borders: [
      { country: "Andorra", direction: "⇗" },
      { country: "France", direction: "⇗" },
      { country: "Gibraltar", direction: "⇓" },
      { country: "Portugal", direction: "⇐" },
      { country: "Morocco", direction: "⇓" }
    ]
  },
  {
    country: "Papua New Guinea",
    borders: [
      { country: "Indonesia", direction: "⇐" }
    ]
  },
  {
    country: "Uzbekistan",
    borders: [
      { country: "Afghanistan", direction: "⇓" },
      { country: "Kazakhstan", direction: "⇗" },
      { country: "Kyrgyzstan", direction: "⇒" },
      { country: "Tajikistan", direction: "⇒" },
      { country: "Turkmenistan", direction: "⇐" }
    ]
  },
  {
    country: "Argentina",
    borders: [
      { country: "Bolivia", direction: "⇑" },
      { country: "Brazil", direction: "⇑" },
      { country: "Chile", direction: "⇖" },
      { country: "Paraguay", direction: "⇗" },
      { country: "Uruguay", direction: "⇒" }
    ]
  },
  {
    country: "South Korea",
    borders: [
      { country: "North Korea", direction: "⇑" }
    ]
  },
  {
    country: "Belize",
    borders: [
      { country: "Guatemala", direction: "⇙" },
      { country: "Mexico", direction: "⇖" }
    ]
  },
  {
    country: "Mexico",
    borders: [
      { country: "Belize", direction: "⇘" },
      { country: "Guatemala", direction: "⇘" },
      { country: "United States", direction: "⇑" }
    ]
  },
  {
    country: "Serbia",
    borders: [
      { country: "Bosnia and Herzegovina", direction: "⇐" },
      { country: "Bulgaria", direction: "⇒" },
      { country: "Croatia", direction: "⇐" },
      { country: "Hungary", direction: "⇑" },
      { country: "Kosovo", direction: "⇓" },
      { country: "North Macedonia", direction: "⇘" },
      { country: "Montenegro", direction: "⇙" },
      { country: "Romania", direction: "⇗" }
    ]
  },
  {
    country: "Cambodia",
    borders: [
      { country: "Laos", direction: "⇑" },
      { country: "Thailand", direction: "⇐" },
      { country: "Vietnam", direction: "⇗" }
    ]
  },
  {
    country: "Romania",
    borders: [
      { country: "Bulgaria", direction: "⇓" },
      { country: "Hungary", direction: "⇐" },
      { country: "Moldova", direction: "⇒" },
      { country: "Serbia", direction: "⇙" },
      { country: "Ukraine", direction: "⇗" }
    ]
  },
  {
    country: "Hungary",
    borders: [
      { country: "Austria", direction: "⇐" },
      { country: "Croatia", direction: "⇐" },
      { country: "Romania", direction: "⇒" },
      { country: "Serbia", direction: "⇓" },
      { country: "Slovakia", direction: "⇑" },
      { country: "Slovenia", direction: "⇐" },
      { country: "Ukraine", direction: "⇒" }
    ]
  },
  {
    country: "Somalia",
    borders: [
      { country: "Djibouti", direction: "⇐" },
      { country: "Ethiopia", direction: "⇐" },
      { country: "Kenya", direction: "⇙" }
    ]
  },
  {
    country: "Albania",
    borders: [
      { country: "Montenegro", direction: "⇖" },
      { country: "Greece", direction: "⇘" },
      { country: "North Macedonia", direction: "⇗" },
      { country: "Kosovo", direction: "⇗" }
    ]
  },
  {
    country: "Burundi",
    borders: [
      { country: "Democratic Republic of the Congo", direction: "⇖" },
      { country: "Rwanda", direction: "⇑" },
      { country: "Tanzania", direction: "⇘" }
    ]
  },
  {
    country: "Central African Republic",
    borders: [
      { country: "Cameroon", direction: "⇐" },
      { country: "Chad", direction: "⇑" },
      { country: "Democratic Republic of the Congo", direction: "⇘" },
      { country: "Congo", direction: "⇙" },
      { country: "South Sudan", direction: "⇒" },
      { country: "Sudan", direction: "⇗" }
    ]
  },
  {
    country: "French Guiana",
    borders: [
      { country: "Brazil", direction: "⇓" },
      { country: "Suriname", direction: "⇐" }
    ]
  },
  {
    country: "Uganda",
    borders: [
      { country: "Democratic Republic of the Congo", direction: "⇐" },
      { country: "Kenya", direction: "⇒" },
      { country: "Rwanda", direction: "⇙" },
      { country: "South Sudan", direction: "⇑" },
      { country: "Tanzania", direction: "⇘" }
    ]
  },
  {
    country: "Honduras",
    borders: [
      { country: "Guatemala", direction: "⇐" },
      { country: "El Salvador", direction: "⇙" },
      { country: "Nicaragua", direction: "⇘" }
    ]
  },
  {
    country: "Kazakhstan",
    borders: [
      { country: "China", direction: "⇒" },
      { country: "Kyrgyzstan", direction: "⇘" },
      { country: "Russia", direction: "⇒" },
      { country: "Turkmenistan", direction: "⇙" },
      { country: "Uzbekistan", direction: "⇙" }
    ]
  },
  {
    country: "Kenya",
    borders: [
      { country: "Ethiopia", direction: "⇑" },
      { country: "Somalia", direction: "⇗" },
      { country: "South Sudan", direction: "⇖" },
      { country: "Tanzania", direction: "⇙" },
      { country: "Uganda", direction: "⇐" }
    ]
  },
  {
    country: "Nepal",
    borders: [
      { country: "China", direction: "⇒" },
      { country: "India", direction: "⇙" }
    ]
  },
  {
    country: "Equatorial Guinea",
    borders: [
      { country: "Cameroon", direction: "⇗" },
      { country: "Gabon", direction: "⇘" }
    ]
  },
  {
    country: "Lebanon",
    borders: [
      { country: "Israel", direction: "⇓" },
      { country: "Syria", direction: "⇗" }
    ]
  },
  {
    country: "Liechtenstein",
    borders: [
      { country: "Austria", direction: "⇒" },
      { country: "Switzerland", direction: "⇐" }
    ]
  },
  {
    country: "Austria",
    borders: [
      { country: "Czechia", direction: "⇗" },
      { country: "Germany", direction: "⇖" },
      { country: "Hungary", direction: "⇒" },
      { country: "Italy", direction: "⇓" },
      { country: "Liechtenstein", direction: "⇐" },
      { country: "Slovakia", direction: "⇒" },
      { country: "Slovenia", direction: "⇘" },
      { country: "Switzerland", direction: "⇐" }
    ]
  },
  {
    country: "Netherlands",
    borders: [
      { country: "Belgium", direction: "⇙" },
      { country: "Germany", direction: "⇘" }
    ]
  },
  {
    country: "Liberia",
    borders: [
      { country: "Guinea", direction: "⇑" },
      { country: "Ivory Coast", direction: "⇒" },
      { country: "Sierra Leone", direction: "⇖" }
    ]
  },
];




countryBordersWithDirections.sort((a, b) => {
  const nameA = a.country.toLowerCase();
  const nameB = b.country.toLowerCase();
  return nameA.localeCompare(nameB);
});


countryBordersWithDirections.forEach(entry => {
  entry.borders.sort((a, b) => {
    const nameA = (a.country || a.state).toLowerCase();
    const nameB = (b.country || b.state).toLowerCase();
    return nameA.localeCompare(nameB);
  });
});




