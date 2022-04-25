const temperature = document.getElementsByClassName('weather-temp')[0];
const humidity = document.getElementsByClassName('weather-humidity')[0];
const location = document.getElementsByClassName('weather-loc')[0];
const tomorrowImg = document.getElementsByClassName('weather-tomorrow')[0];
const dayafterImg = document.getElementsByClassName('weather-dayaftertomorrow')[0];

function getImageURL(code) {
  return `http://us.yimg.com/i/us/nws/weather/gr/${code}ds.png`;
}

function fetchWeather() {
  fetch('https://classes.engineering.wustl.edu/cse330/content/weather_json.php')
    .then((response) => response.json())
    .then((data) => {
      temperature.innerText = data.current.temp;
      humidity.innerText = data.atmosphere.humidity;
      const strong = document.createElement('strong');
      strong.innerText = data.location.city;
      location.innerHTML = '';
      location.append(strong);
      location.append(` ${data.location.state}`);
      tomorrowImg.src = getImageURL(data.tomorrow.code);
      dayafterImg.src = getImageURL(data.dayafter.code);
    })
    .catch((error) => alert(error));
}
fetchWeather();

const button = document.createElement('button');
button.addEventListener('click', fetchWeather);
button.innerText = 'Update';
document.body.append(button);
