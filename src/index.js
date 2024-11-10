function updateWeather(response) {
  let temp = document.querySelector(`#temperature-value`);
  let temperature = response.data.temperature.current;
  temp.innerHTML = Math.round(temperature);
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
  console.log(searchInput.value);
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
