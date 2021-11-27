const weatherIcon = {
	"01" : "fas fa-sun",
	"02" : "fas fa-cloud-sun",
	"03" : "fas fa-cloud",
	"04" : "fas fa-cloud-meatball",
	"09" : "fas fa-cloud-sun-rain",
	"10" : "fas fa-cloud-showers-heavy",
	"11" : "fas fa-poo-storm",
	"13" : "far fa-snowflake",
	"50" : "fas fa-smog",
};

function onGeoOk(position) {
	const lat = position.coords.latitude;
	const lon = position.coords.longitude;
	const API_KEY = "5ea07160abd673b70cebec9268bb515b";
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
	fetch(url).then(response => response.json()).then(data => {
		const weather = document.querySelector("#weather");
		const temp = document.querySelector("#temp");
		const city = document.querySelector("#city");
		const icon = (data.weather[0].icon).substr(0, 2);
		const i = document.createElement("i");
		i.className = weatherIcon[icon];
		weather.appendChild(i);
		temp.innerText = `${Math.round(data.main.temp)}℃`;
		city.innerText = data.name;
	});
};

function onGeoErr() {
	const weather = document.querySelector("#weather");
	weather.innerText = "Can't find you. No weather for you";
};

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);