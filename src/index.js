function updateWeather(response) {
  let temp = document.querySelector(`#temperature-value`);
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  let windSpeedElement = document.querySelector("#wind-speed");
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  let iconElement = document.querySelector("#icon");

  cityElement.innerHTML = response.data.city;
  temp.innerHTML = Math.round(temperature);
  windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
  timeElement.innerHTML = formatDate(date);
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-icon" />`;
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  let months = [
    `Jan`,
    `Feb`,
    `Mar`,
    `Apr`,
    `May`,
    `Jun`,
    `Jul`,
    `Aug`,
    `Sep`,
    `Oct`,
    `Nov`,
    `Dec`,
  ];
  let month = months[date.getMonth()]; 
  let currentDateElement = document.querySelector(`#date`); 
  let currentDate = date.getDate(); 
  let year = date.getFullYear();
  let newDayElement = document.querySelector(`#weekday`); 

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  newDayElement.innerHTML = `${day}`;
  currentDateElement.innerHTML = `${currentDate}, ${month} ${year}`; 

  return `${hours}:${minutes}`; 
}
function searchCity(city) {
  let apiKey = `91fcb4d53c98303ca43efo0f42at1227`;
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

  axios.get(apiURL).then(updateWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
