import WEATHER_API from './apikey.js'

import { Draggable, Swappable } from '@shopify/draggable'

let currentCities = localStorage.getItem('cities') ? JSON.parse(localStorage.getItem('cities')) : []

currentCities.forEach(async city => {
    await CreateWeatherElements(city)
})

// Functions that fetch data
async function GetSearchData(searchQuery) {
    searchQuery = searchQuery == '' ? ' ' : searchQuery
    const response = await fetch(`https://api.weatherapi.com/v1/search.json?key=${WEATHER_API}&q=${searchQuery}`, { mode: 'cors' });
    const cityData = await response.json();
    return cityData
}

async function GetWeatherData(searchQuery) {
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API}&q=${searchQuery}&aqi=yes&days=3`, { mode: 'cors' });
    const weatherData = await response.json();
    return weatherData;
}

async function CreateWeatherElements(searchQuery) {
    let weatherData = await GetWeatherData(searchQuery)

    AddCitiesElement({
        cityName: weatherData.location.name,
        cityRegion: weatherData.location.region,
        cityCountry: weatherData.location.country,
        cityWeather: weatherData.current.temp_c,
        cityTime: ChangeTo12HourFormat(weatherData.location.localtime.split(" ")[1]),
        cityWeatherCondition: weatherData.current.condition.text,
        cityHighTemp: weatherData.forecast["forecastday"][0].day.maxtemp_c,
        cityLowTemp: weatherData.forecast["forecastday"][0].day.mintemp_c,
    });
}

function AddCitiesElement({ cityName, cityRegion, cityCountry, cityTime, cityWeatherCondition, cityWeather, cityHighTemp, cityLowTemp }) {
    const cityElement = document.createElement('button')
    cityElement.classList.add('home-city-button')
    cityElement.setAttribute('data-city', `${cityName}${cityRegion ? ', ' + cityRegion : ''}, ${cityCountry}`)

    cityElement.addEventListener('click', () => {
        document.getElementById('weather-section').classList.add('weather-section-opened')
    })

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

// DOM Elements
const searchBox = document.getElementById('search-box')
const searchOptions = document.getElementById('search-options')
const closeSearchIcon = document.getElementById('close-search-icon')
const editButton = document.getElementById('edit-button')
const editMenu = document.getElementById('edit-menu')
const editContextMenu = document.getElementById('edit-context-menu')
const editList = document.getElementById('edit-context-menu-edit-list')
const editMenuBackdrop = document.getElementById('edit-menu-backdrop')

editButton.addEventListener('click', () => {
    editContextMenu.classList.toggle('edit-context-menu-closed')
    editMenu.classList.toggle('edit-menu-opened')
})

editMenuBackdrop.addEventListener('click', () => {
    editContextMenu.classList.add('edit-context-menu-closed')
    editMenu.classList.remove('edit-menu-opened')
})

closeSearchIcon.addEventListener('click', () => {
    searchBox.value = ''
    searchOptions.innerHTML = ''
})

searchBox.addEventListener('focusin', () => {
    searchOptions.classList.remove('hidden')
})

searchBox.addEventListener('input', async e => {
    let searchResults = await GetSearchData(searchBox.value)
    searchOptions.innerHTML = ''
    for (let i = 0; i < searchResults.length; i++) {
        const searchOption = document.createElement('button')
        searchOption.textContent = `${searchResults[i].name}${searchResults[i].region ? ', ' + searchResults[i].region : ''}, ${searchResults[i].country}`
        searchOption.addEventListener('click', () => {
            OnSearchEnter(searchResults[i])
        })
        searchOption.addEventListener('click', e => {
            searchOptions.classList.add('hidden')
        })
        searchOptions.appendChild(searchOption)
    }
})

function OnSearchEnter(searchResults) {
    if (currentCities.includes(`${searchResults.name}${searchResults.region ? ', ' + searchResults.region : ''}, ${searchResults.country}`)) {
        return;
    }

    currentCities.push(`${searchResults.name}${searchResults.region ? ', ' + searchResults.region : ''}, ${searchResults.country}`)
    localStorage.setItem('cities', JSON.stringify(currentCities))

    CreateWeatherElements(`${searchResults.name}${searchResults.region ? ', ' + searchResults.region : ''}, ${searchResults.country}`)
}

const swappable = new Swappable(document.getElementById('added-cities'), {
    draggable: 'button',
    delay: {
        mouse: 300,
        drag: 0,
        touch: 300,
    }
});

swappable.on('swappable:start', e => { });
swappable.on('swappable:swapped', e => { });
swappable.on('swappable:stop', e => {
    setTimeout(() => {
        currentCities = []
        Array.from(document.getElementById('added-cities').children).forEach(child => {
            currentCities.push(child.getAttribute('data-city'))
        });
        localStorage.setItem('cities', JSON.stringify(currentCities))
    }, 0);
});