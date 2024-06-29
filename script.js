const apikey = "c1bc2dcd0461882ee7e8488902e5d10b";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

const url = (city) =>
    `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apikey}`;

async function getWeatherByLocation(city) {
    const resp = await fetch(url(city), {
        origin: "cors"
    });
    const respData = await resp.json();

    showWeatheronscreen(respData);
}


const showWeatheronscreen = (data) => {
    const weather = document.createElement('div');
    weather.classList.add('weather');
    console.log(data);


    weather.innerHTML = `
    <h1>
    ${data.name}
    </h1>
    <h2>
    <img  src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />
     ${data.main.temp}°C
     <img  src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />
     </h2>
    <small>${data.weather[0].main}</small>
    <br>
    

    `

    // clearmain
    main.innerHTML = ""

    // put weather in main
    main.appendChild(weather);
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    getWeatherByLocation(search.value);
});
