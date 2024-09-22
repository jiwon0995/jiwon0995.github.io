const API_KEY = "98165c5f8b728095ee6bf7bf35f7fd81";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    // todo: api key 401 error
    // const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    // fetch(url).then(response => response.json()).then(data => {
    //     const weather = data.weather[0].main;
    //     const city = data.name;
    // });
}

function onGeoError() {
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);