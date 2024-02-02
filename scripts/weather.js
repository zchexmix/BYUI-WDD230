const card = document.querySelector("#weathercard");
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weatherIcon');
const captionDesc = document.querySelector('#figcap');

const url = "https://api.openweathermap.org/data/2.5/weather?lat=51.504&lon=-0.1257&units=imperial&appid=3f88f65f0095b43b5bf2ae9d6ffeba38";
// 51.504519202570094, -0.12570942759633072
async function getWeather() {
    try {
  
        const response = await fetch(url);
    
  
        if (response.ok) {
  
          const data = await response.json();
          console.log(data);
          displayWeather(data);
          
        } else {
  
          throw new Error(`Error: ${response.statusText}`);
        }
      } catch (error) {
  
        console.error('An error occurred:', error.message);
      }  
}
getWeather();



function displayWeather(data) {
    const temp = (data.main.temp)
    currentTemp.textContent = `London Current Temperature: ${temp}`+ '\u00B0F';
    const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute('src' , `${iconSrc}`);
    weatherIcon.setAttribute('alt', 'Weather Icon');
    weatherIcon.setAttribute("width", "50")
    weatherIcon.setAttribute("height", "auto");
    captionDesc.textContent = `Conditions: ${data.weather[0].description}`;
}