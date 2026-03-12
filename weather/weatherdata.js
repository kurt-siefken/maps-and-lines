
//////////////// GET LOCATION ////////////////////

var loclon, loclat;
navigator.geolocation.getCurrentPosition(onSuccess, onError);

function onSuccess(position) {
        const {
            latitude,
            longitude
        } = position.coords;

	loclat = `${latitude}`;
	loclon = `${longitude}`;


	console.log(loclat + " , " + loclon);

	getCityFromCoords(loclat, loclon);
	getWeather(loclat, loclon);


    }

    // handle error case
    function onError() {
        message.classList.add('error');
        message.textContent = `Failed to get your location!`;
    }

//////////////// GET LOCATION ////////////////////


////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("FindCityData");
  button.addEventListener("click", findCityData);
});




//////////////////////////////////////////////////////

async function findCityData(event) {

  event.preventDefault(); // stop page reload

  const zip = document.getElementById("zipcode").value;

  const response = await fetch(`https://api.zippopotam.us/us/${zip}`);

  const data = await response.json();

  const lat = data.places[0].latitude;
  const lon = data.places[0].longitude;
  const city = data.places[0]["place name"];
  const state = data.places[0]["state"];
  const stateAbbrev = data.places[0]["state abbreviation"];

  console.log("Location:", city + ", " + stateAbbrev + ". Lat:" + lat + ", Lon:" + lon );

	document.getElementById("weather-location").innerHTML = city + ", " + stateAbbrev

getWeather(lat, lon);
}


//////////////////////////////////////////////////////

async function getCityFromCoords(lat, lon) {

  const url =
    `https://geocoding-api.open-meteo.com/v1/reverse?latitude=${lat}&longitude=${lon}&language=en&format=json`;

  const response = await fetch(url);
  const data = await response.json();

  const place = data.results[0];

  const city = place.name;
  const state = place.admin1;   // state / region
  const country = place.country;

  console.log(city, state, country);

  document.getElementById("cityname").innerHTML =
    `${city}, ${state}`;

}






////////////////////////////////////////////////////////////////////////////

async function getWeather(lat, lon) {

const weatherURL =
  `https://api.open-meteo.com/v1/forecast` +
  `?latitude=${lat}` +
  `&longitude=${lon}` +
  `&current=is_day,temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m,wind_direction_10m` +
  `&hourly=visibility` +
  `&daily=sunrise,sunset` +
  `&temperature_unit=fahrenheit` +
  `&wind_speed_unit=mph` +
  `&timezone=auto`;

  const response = await fetch(weatherURL);
  const data = await response.json();

  console.log(data);

  const temp = data.current.temperature_2m;
  const wind = data.current.wind_speed_10m;
  const winddirection = getWindDirection(data.current.wind_direction_10m)
  const hour = new Date().getHours();
  const humidity = data.current.relative_humidity_2m;
  const weathercode = data.current.weather_code;
  const weather = convertweathercode(weathercode);
  const visibility = (data.hourly.visibility[0] / 1609.34).toFixed(1);
  const isDay = data.current.is_day;     // usually 1 = day, 0 = night
  const sunriseRaw = data.daily.sunrise[0];
  const sunsetRaw = data.daily.sunset[0];
  const moonphase = getMoonPhase();



  const sunsetDate = new Date(sunsetRaw);
  const sunset = sunsetDate.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit"
  });
  const sunriseDate = new Date(sunriseRaw);
  const sunrise = sunriseDate.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit"
  });


const totalweather = {
  temp: temp,
  humidity: humidity,
  windSpeed: wind,
  windDir: winddirection,
  weatherCode: weathercode,
  isDay: isDay,
  sunrise: sunrise,
  sunset: sunset,
  moonphase: moonphase
};





  var weathericon = convertweathericon(weathercode);
  if ((weathericon == 'sun' || weathericon == 'light-sun') && isDay == 0) {weathericon = "clear-night"}
  if ((weathericon == 'partly-sun') && isDay == 0) {weathericon = "cloudy-night"}
  weathericon = weathericon + ".png"


  console.log("Temperature:", temp + '°F');
  console.log("Humidity:", humidity + '%');
  console.log("Wind:", wind + ' ' + winddirection);
  console.log("Weather Code:", weathercode);
  console.log("Weather:", weather);
  console.log("Visibility:", visibility);
  console.log("Daylight:", isDay);
  console.log("Sunrise:", sunrise);
  console.log("Sunset:", sunset);
  console.log("Moon:", moonphase);

  console.log("Vampire Threat:", getVampireThreat(totalweather));

	document.getElementById("weather-icon").src = 'icons/' + weathericon;
	document.getElementById("weather-temperature").innerHTML = temp + '°F';
	document.getElementById("weather-humidity").innerHTML = humidity + '%';
	document.getElementById("weather-wind").innerHTML = wind + ' ' + winddirection;
	document.getElementById("weather-skies").innerHTML = weather;
	document.getElementById("weather-visibility").innerHTML = visibility;
	document.getElementById("weather-sunrise").innerHTML = sunrise;
	document.getElementById("weather-sunset").innerHTML = sunset;
	document.getElementById("weather-moon").innerHTML = moonphase;

	document.getElementById("threat-vampire").innerHTML = getVampireThreat(totalweather);
	document.getElementById("threat-werewolf").innerHTML = getWerewolfThreat(totalweather);
	document.getElementById("threat-swampmonster").innerHTML = getSwampMonster(totalweather);
}



//////////////////////////////////////////////////////////
//////////////// CONVERT WEATHER CODE ////////////////////
function convertweathercode(dataweather) {


const weatherMap = {
  0: "Clear sky",
  1: "Mainly clear",
  2: "Partly cloudy",
  3: "Overcast",
  45: "Fog",
  48: "Rime fog",
  51: "Light drizzle",
  53: "Moderate drizzle",
  55: "Dense drizzle",
  56: "Light freezing drizzle",
  57: "Dense freezing drizzle",
  61: "Light rain",
  63: "Moderate rain",
  65: "Heavy rain",
  66: "Light freezing rain",
  67: "Heavy freezing rain",
  71: "Light snow",
  73: "Moderate snow",
  75: "Heavy snow",
  77: "Snow grains",
  80: "Slight rain showers",
  81: "Moderate rain showers",
  82: "Violent rain showers",
  85: "Slight snow showers",
  86: "Heavy snow showers",
  95: "Thunderstorm",
  96: "Thunderstorm with slight hail",
  99: "Thunderstorm with heavy hail"
};

const weatherdescription =
  weatherMap[dataweather] || "Unknown atmospheric anomaly";

return(weatherdescription);
}




//////////////////////////////////////////////////////////
/////////////////////// GET ICON /////////////////////////
function convertweathericon(dataweather) {


const weatherMap = {
  0: "sun",
  1: "sun-light",
  2: "cloudy",
  3: "overcast",
  45: "haze",
  48: "haze",
  51: "drizzle",
  53: "drizzle",
  55: "drizzle",
  56: "drizzle",
  57: "drizzle",
  61: "rain",
  63: "rain",
  65: "hard-rain",
  66: "drizzle",
  67: "hard-rain",
  71: "snow",
  73: "snow",
  75: "snow",
  77: "snow",
  80: "drizzle",
  81: "rain",
  82: "hard-rain",
  85: "snow",
  86: "snow",
  95: "thunderstorm",
  96: "thunderstorm",
  99: "thunderstorm"
};

const weatherdescription =
  weatherMap[dataweather] || "overcast";

return(weatherdescription);
}





////////////////////////////////////////////////////////////////////
////////////////// FORMAT WIND DIRECTION ///////////////////////////


function getWindDirection(deg) {
  const directions = [
    "↑","↗","→","↘","↓","↙","↑","↖"
  ];
  const index = Math.round(deg / 45) % 8;
  return directions[index];
}


//////////////////////////////////////////////////////////
//////////////////// GET MOON PHASE //////////////////////

function getMoonPhase(date = new Date()) {

  const lunarCycle = 29.53058867;
  const knownNewMoon = new Date("2000-01-06T18:14:00Z");
  const daysSince = (date - knownNewMoon) / (1000 * 60 * 60 * 24);
  const moonAge = daysSince % lunarCycle;
  if (moonAge < 1.84566) return "New Moon";
  if (moonAge < 5.53699) return "Waxing Crescent";
  if (moonAge < 9.22831) return "First Quarter";
  if (moonAge < 12.91963) return "Waxing Gibbous";
  if (moonAge < 16.61096) return "Full Moon";
  if (moonAge < 20.30228) return "Waning Gibbous";
  if (moonAge < 23.99361) return "Last Quarter";
  if (moonAge < 27.68493) return "Waning Crescent";

  return "New Moon";
}





/////////////////////////////////////////////////////////////////////
////////////////////// GET MONSTER THREATS //////////////////////////
/////////////////////////////////////////////////////////////////////

function getVampireThreat(weather) {
  if (weather.isDay === 1) {
    return "LOW";
  } else {
    return "HIGH";
  }
}

///////////////////////////////////////////////////////////////

function getWerewolfThreat(weather) {
  if (weather.isDay === 1) {
    return "LOW";
  } else {
  if (weather.moonphase == "New Moon") {return "LOW"};
  if (weather.moonphase == "Waxing Crescent") {return "MEDIUM"};
  if (weather.moonphase == "First Quarter") {return "MEDIUM"};
  if (weather.moonphase == "Waxing Gibbous") {return "HIGH"};
  if (weather.moonphase == "Full Moon") {return "SEVERE"};
  if (weather.moonphase == "Waning Gibbous") {return "HIGH"};
  if (weather.moonphase == "Last Quarter") {return "MEDIUM"};
  if (weather.moonphase == "Waning Crescent") {return "MEDIUM"};

  }
}


///////////////////////////////////////////////////////////////


function getSwampMonster(weather) {

let humidrate;

if (weather.humidity < 50) humidrate = "LOW";
else if (weather.humidity < 70) humidrate = "MODERATE";
else if (weather.humidity < 85) humidrate = "HIGH";
else if (weather.humidity < 95) humidrate = "VERY HIGH";
else humidrate = "SEVERE";
  return humidrate;
}





