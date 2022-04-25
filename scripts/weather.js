const temperature = document.getElementsByClassName('weather-temp')[0];
const humidity = document.getElementsByClassName('weather-humidity')[0];
const location = document.getElementsByClassName('weather-loc')[0];
const tomorrowImg = document.getElementsByClassName('weather-tomorrow')[0];
const dayafterImg = document.getElementsByClassName('weather-dayaftertomorrow')[0];

function getImageURL(code) {
  return `http://us.yimg.com/i/us/nws/weather/gr/${code}ds.png`;
}

async function fetchWeather() {
  try {
    const response = await fetch('https://classes.engineering.wustl.edu/cse330/content/weather_json.php');
    const data = await response.json();
    temperature.textContent = data.current.temp;
    humidity.textContent = data.atmosphere.humidity;
    const strong = document.createElement('strong');
    strong.textContent = data.location.city;
    location.innerHTML = '';
    location.append(strong, ` ${data.location.state}`);
    tomorrowImg.src = getImageURL(data.tomorrow.code);
    dayafterImg.src = getImageURL(data.dayafter.code);
  } catch (error) {
    window.alert(error);
  }
}

const button = document.createElement('button');
button.addEventListener('click', fetchWeather);
button.textContent = 'Update';
document.body.append(button);
await fetchWeather();
