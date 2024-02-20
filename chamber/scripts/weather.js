const weatherCard = document.querySelector('#current-weather');
const forecastElement = document.querySelector('#forecast');
const dayOne = document.querySelector('#day-one');
const dayTwo = document.querySelector('#day-two');
const dayThree = document.querySelector('#day-three');



const url = "https://api.openweathermap.org/data/2.5/forecast?lat=40.889&lon=-111.880&units=imperial&appid=3f88f65f0095b43b5bf2ae9d6ffeba38";
// const forecastUrl = 
//  40.889224261030286, -111.88080750042226

async function getWeather() {
    try {
        response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            displayWeather(data);
        } else {

            throw new Error(`Error: ${response.statusText}`);
          }
    } catch (error) {
      
        console.error('An error occurred:', error.message);
    }  
    
}
getWeather();

// async function getForecast() {
//     try {
//         response2 = await fetch(forecastUrl);
//         if (response2.ok) {
//             const dataForecast = await response2.json();
//             console.log(dataForecast);
//             // displayForcast(dataForecast);
//         } else {

//             throw new Error(`Error: ${response2.statusText}`);
//           }
//     } catch (error) {
      
//         console.error('An error occurred:', error.message);
//     }  
    
// }
// getForecast();



function displayWeather(data) {
    console.log(data.list[0].dt / 86400)
    const currentWeather = document.createElement('h4');
    const feelsLike = document.createElement('p');
    const weatherIcon = document.createElement('img');
    const figcap = document.createElement('figcaption');
    const forecast = document.createElement('p');
    const imgSrc = `https://openweathermap.org/img/w/${data.list[1].weather[0].icon}.png`;
    currentWeather.innerHTML = `Bountifuls Current Temperature: ${data.list[0].main.temp}&deg;F`;
    weatherIcon.setAttribute('src', imgSrc);
    weatherIcon.setAttribute('alt', 'Weather Icon for current weather');
    weatherIcon.setAttribute('width', '50');
    weatherIcon.setAttribute('height', 'auto');
    figcap.textContent = `Conditions: ${data.list[0].weather[0].description}`;
    feelsLike.innerHTML = `Feels like: ${data.list[0].main.feels_like}&deg;F`;

    const day1Data = (data.list[8].main.temp);
    const day2Data = (data.list[16].main.temp);
    const day3Data = (data.list[24].main.temp);

    const tomorrow = document.createElement('p');
    const twoDay = document.createElement('p');
    const thirdDay = document.createElement('p');
    const tomorrowIcon = document.createElement('img');
    const twoDayIcon = document.createElement('img');
    const thirdDayIcon = document.createElement('img');
    const tomorrowDesc = document.createElement('p');
    const twoDayDesc = document.createElement('p');
    const thirdDayDesc = document.createElement('p');

    const tomorrowSrc = `https://openweathermap.org/img/w/${data.list[8].weather[0].icon}.png`;
    const twoDaySrc = `https://openweathermap.org/img/w/${data.list[16].weather[0].icon}.png`;
    const thirdDaySrc = `https://openweathermap.org/img/w/${data.list[24].weather[0].icon}.png`;

    tomorrowDesc.innerHTML = `Conditions: ${data.list[8].weather[0].description}`;
    twoDayDesc.innerHTML = `Conditions: ${data.list[16].weather[0].description}`;
    thirdDayDesc.innerHTML = `Conditions: ${data.list[24].weather[0].description}`;

    tomorrowIcon.setAttribute('src' , `${tomorrowSrc}`);
    tomorrowIcon.setAttribute('alt', 'Weather Icon');
    tomorrowIcon.setAttribute("width", "50");
    tomorrowIcon.setAttribute("height", "auto");

    twoDayIcon.setAttribute('src' , `${twoDaySrc}`);
    twoDayIcon.setAttribute('alt', 'Weather Icon');
    twoDayIcon.setAttribute("width", "50");
    twoDayIcon.setAttribute("height", "auto");

    thirdDayIcon.setAttribute('src' , `${thirdDaySrc}`);
    thirdDayIcon.setAttribute('alt', 'Weather Icon');
    thirdDayIcon.setAttribute("width", "50");
    thirdDayIcon.setAttribute("height", "auto");


    

    tomorrow.innerHTML = `Tomorrow: ${day1Data}&deg;F`;
    twoDay.innerHTML = `In 2 Days: ${day2Data}&deg;F`;
    thirdDay.innerHTML = `In 3 Days: ${day3Data}&deg;F`;

    
    dayOne.appendChild(tomorrowIcon);
    dayOne.appendChild(tomorrow);
    dayOne.appendChild(tomorrowDesc);
    dayTwo.appendChild(twoDayIcon);
    dayTwo.appendChild(twoDay);
    dayTwo.appendChild(twoDayDesc);
    dayThree.appendChild(thirdDayIcon);
    dayThree.appendChild(thirdDay);
    dayThree.appendChild(thirdDayDesc);

    weatherCard.append(currentWeather, feelsLike, weatherIcon, figcap, forecast);

}
