function newCity(event) {
  event.preventDefault();
  let searchinput = document.querySelector(`#search`);
  let city = document.querySelector(`#city`);
  city.innerHTML = searchinput.value;
}

let searchForm = document.querySelector(`#search-form`);
searchForm.addEventListener(`submit`, newCity);
