// Global variables
let globalSearchResults = [];

// get weather according to user location 
/*
if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(async (position) => {
        await GetSearchData(`${position.coords.latitude},${position.coords.longitude}`);
        GetWeatherData(`${globalSearchResults[0].lat},${globalSearchResults[0].lon}`)
    },
        // use ip address in case user denied the location 
        function (error) {
            if (error.code == error.PERMISSION_DENIED) {
                GetWeatherData(`auto:ip`)
            }
        });

} else {
    // use ip address in case geolocation not supported 
    GetWeatherData(`auto:ip`)
}
*/

// Functions that fetch data
async function GetSearchData(searchQuery) {
    searchQuery = searchQuery == '' ? ' ' : searchQuery
    const response = await fetch(`https://api.weatherapi.com/v1/search.json?key=${WEATHER_API}&q=${searchQuery}`, { mode: 'cors' });
    const cityData = await response.json();
    globalSearchResults = cityData

    // Offline Use
    // globalSearchResults = [{ name: 'Alexandria', region: 'Al Iskandariyah', country: 'Egypt' }];
}

async function GetWeatherData(cords) {
    // Offline Use
    // const response = await fetch('./example.json')

    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API}&q=${cords}&aqi=yes&days=3`, { mode: 'cors' });
    const weatherData = await response.json();
    console.log(weatherData);
    console.log(weatherData.location.localtime.split(' '));

    AddCities({ cityName: weatherData.location.name, cityWeather: weatherData.current.temp_c, cityTime: ChangeTo12HourFormat(weatherData.location.localtime.split(' ')[1]), cityWeatherCondition: weatherData.current.condition.text, cityHighTemp: weatherData.forecast['forecastday'][0].day.maxtemp_c, cityLowTemp: weatherData.forecast['forecastday'][0].day.mintemp_c })
}

// DOM Elements
const searchBox = document.getElementById('search-box')
const searchOptions = document.getElementById('search-options')
const closeSearchIcon = document.getElementById('close-search-icon')
const editButton = document.getElementById('edit-button')

editButton.addEventListener('click', () => {
    document.getElementById('edit-context-menu').classList.toggle('edit-context-menu-closed')
})

const editList = document.getElementById('edit-context-menu-edit-list')

closeSearchIcon.addEventListener('click', () => {
    searchBox.value = ''
    searchOptions.innerHTML = ''
    globalSearchResults = []
})

searchBox.addEventListener('focusin', () => {
    searchOptions.innerHTML = ''
    for (let i = 0; i < globalSearchResults.length; i++) {
        const searchOption = document.createElement('button')
        searchOption.textContent = `${globalSearchResults[i].name}, ${globalSearchResults[i].region}, ${globalSearchResults[i].country}`
        searchOption.addEventListener('click', () => {
            GetWeatherData(`${globalSearchResults[i].lat},${globalSearchResults[i].lon}`)
        })
        searchOption.addEventListener('click', e => {
            searchOptions.innerHTML = ''
        })
        searchOptions.appendChild(searchOption)
    }
})

document.addEventListener('click', e => {
    // console.log(e.); 
}, true)

searchBox.addEventListener('input', async e => {
    await GetSearchData(searchBox.value)
    searchOptions.innerHTML = ''
    for (let i = 0; i < globalSearchResults.length; i++) {
        const searchOption = document.createElement('button')
        searchOption.textContent = `${globalSearchResults[i].name}${globalSearchResults[i].region ? ', ' + globalSearchResults[i].region : ''}, ${globalSearchResults[i].country}`
        searchOption.addEventListener('click', () => {
            GetWeatherData(`${globalSearchResults[i].lat},${globalSearchResults[i].lon}`)
        })
        searchOption.addEventListener('click', e => {
            searchOptions.innerHTML = ''
        })
        searchOptions.appendChild(searchOption)
    }
})

function AddCities({ cityName, cityTime, cityWeatherCondition, cityWeather, cityHighTemp, cityLowTemp }) {
    const cityElement = document.createElement('button')
    cityElement.classList.add('home-city-button')

    const cityNameElement = document.createElement('h2')
    cityNameElement.textContent = cityName
    cityNameElement.classList.add('home-city-name')

    const cityTimeElement = document.createElement('h2')
    cityTimeElement.textContent = cityTime
    cityTimeElement.classList.add('home-city-time')

    const cityWeatherConditionElement = document.createElement('h2')
    cityWeatherConditionElement.textContent = cityWeatherCondition
    cityWeatherConditionElement.classList.add('home-city-weather-condition')

    const cityWeatherElement = document.createElement('h2')
    cityWeatherElement.textContent = `${Number(cityWeather).toFixed(1)}°C`
    cityWeatherElement.classList.add('home-city-weather')

    const cityHighLowTempsElement = document.createElement('div')
    cityHighLowTempsElement.classList.add('home-city-high-low-temps')

    const cityHighTempElement = document.createElement('h2')
    cityHighTempElement.textContent = `H:${Number(cityHighTemp).toFixed(1)}°C`
    cityHighTempElement.classList.add('home-city-high-temp')

    const cityLowTempElement = document.createElement('h2')
    cityLowTempElement.textContent = `L:${Number(cityLowTemp).toFixed(1)}°C`
    cityLowTempElement.classList.add('home-city-low-temp')

    cityHighLowTempsElement.append(cityHighTempElement, cityLowTempElement)

    cityElement.append(cityNameElement, cityTimeElement, cityWeatherConditionElement, cityWeatherElement, cityHighLowTempsElement)

    document.getElementById('added-cities').appendChild(cityElement)
}

function ChangeWeatherSection(param) {
    const result = document.getElementById('result')
    result.innerHTML = param
}

// other Functions
function ChangeTo12HourFormat(timeString) {
    // Split the time string into hours and minutes
    const [hours, minutes] = timeString.split(':');

    // Convert hours to a 12-hour format
    const convertedHours = hours % 12 || 12;

    // Add AM/PM indicator
    const period = hours < 12 ? 'AM' : 'PM';

    // Return the formatted time string
    return `${convertedHours}:${minutes} ${period}`;
}