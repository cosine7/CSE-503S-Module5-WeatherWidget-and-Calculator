window.addEventListener('DOMContentLoaded', () => {
  const temperature = document.getElementsByClassName('weather-temp')[0];
  const humidity = document.getElementsByClassName('weather-humidity')[0];
  const location = document.getElementsByClassName('weather-loc')[0];
  const tomorrowImg = document.getElementsByClassName('weather-tomorrow')[0];
  const dayafterImg = document.getElementsByClassName('weather-dayaftertomorrow')[0];

  function getImageURL(code) {
    return `http://us.yimg.com/i/us/nws/weather/gr/${code}ds.png`;
  }

  function fetchWeather() {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('GET', 'https://classes.engineering.wustl.edu/cse330/content/weather_json.php');
    xhr.send();
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== 4) {
        return;
      }
      const { response } = xhr;
      temperature.innerText = response.current.temp;
      humidity.innerText = response.atmosphere.humidity;
      const strong = document.createElement('strong');
      strong.innerText = response.location.city;
      location.innerHTML = '';
      location.append(strong);
      location.append(` ${response.location.state}`);
      tomorrowImg.src = getImageURL(response.tomorrow.code);
      dayafterImg.src = getImageURL(response.dayafter.code);
    };
  }
  fetchWeather();
});
