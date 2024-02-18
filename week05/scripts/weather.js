const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = "https://api.openweathermap.org/data/2.5/weather?lat=40.889&lon=-111.880&units=imperial&appid=3f88f65f0095b43b5bf2ae9d6ffeba38";
//  40.889224261030286, -111.88080750042226

async function apiFetch() {
  try {

    const response = await fetch(url);


    if (response.ok) {

      const data = await response.json();
      // console.log(data);
      displayResults(data);
      
    } else {

      throw new Error(`Error: ${response.statusText}`);
    }
  } catch (error) {

    console.error('An error occurred:', error.message);
  }    
    
}
apiFetch();


function displayResults(data) {
    const tempFahrenheit = (data.main.temp);
    currentTemp.innerHTML = `Current Temp: ${tempFahrenheit} &deg;F`;
    const iconSrc = `https://openweathermap.org/img/w/04n.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src' , `${iconSrc}`);
    weatherIcon.setAttribute('alt', 'Weather Icon');
    weatherIcon.setAttribute("width", "50")
    weatherIcon.setAttribute("height", "auto");
    captionDesc.textContent = `Current Conditions: ${desc}`;
    captionDesc.style.fontSize = ".9rem";
}