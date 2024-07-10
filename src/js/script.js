import WEATHER_API from './apikey.js'

import { Draggable, Swappable } from '@shopify/draggable'

// Home Section DOM
const searchBox = document.getElementById('search-box')
const searchOptions = document.getElementById('search-options')
const closeSearchIcon = document.getElementById('close-search-icon')
const editButton = document.getElementById('edit-button')
const editMenu = document.getElementById('edit-menu')
const editContextMenu = document.getElementById('edit-context-menu')
const editList = document.getElementById('edit-context-menu-edit-list')
const editMenuBackdrop = document.getElementById('edit-menu-backdrop')
const editContextMenuCelsius = document.getElementById('edit-context-menu-celsius')
const editContextMenuFahrenheit = document.getElementById('edit-context-menu-fahrenheit')
const trashCan = document.getElementById('trash-can')
const trashCanLid = document.getElementById('trash-can-lid')
// Weather Section DOM
const weatherSectionToggle = document.getElementById('weather-section-toggle')
const weatherSectionLocation = document.getElementById('weather-section-location')
const weatherSectionTime = document.getElementById('weather-section-time')
const weatherSectionTemp = document.getElementById('weather-section-temp')


let currentCities = localStorage.getItem('cities') ? JSON.parse(localStorage.getItem('cities')) : []
let userTempPreference = localStorage.getItem('userTempPreference') ? localStorage.getItem('userTempPreference') : 'c'

// Loading Initial start
if (userTempPreference == 'f') {
    editContextMenuCelsius.classList.remove('edit-context-menu-temp-active')
    editContextMenuFahrenheit.classList.add('edit-context-menu-temp-active')
}

let InitialCurrentCitiesIndex = 0
LoadInitialCities()

async function LoadInitialCities() {
    if (currentCities.length == 0) return

    await CreateWeatherElements(currentCities[InitialCurrentCitiesIndex])
    InitialCurrentCitiesIndex++
    if (InitialCurrentCitiesIndex < currentCities.length) {
        LoadInitialCities()
    }
}

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

    AddCitiesElement(weatherData);
    return weatherData.location.name;
}

function AddCitiesElement(weatherData) {
    const cityElement = document.createElement('button')
    cityElement.classList.add('home-city-button')
    cityElement.setAttribute('data-city', `${weatherData.location.name}${weatherData.location.region ? ', ' + weatherData.location.region : ''}, ${weatherData.location.country}`)

    cityElement.addEventListener('click', () => {
        ChangeWeatherSection(weatherData)
        document.getElementById('weather-section').classList.add('weather-section-opened')
    })

    const cityNameElement = document.createElement('h2')
    cityNameElement.textContent = weatherData.location.name
    cityNameElement.classList.add('home-city-name')

    const cityTimeElement = document.createElement('h2')
    cityTimeElement.textContent = ChangeTo12HourFormat(weatherData.location.localtime.split(" ")[1])
    cityTimeElement.classList.add('home-city-time')

    const cityWeatherConditionElement = document.createElement('h2')
    cityWeatherConditionElement.textContent = weatherData.current.condition.text
    cityWeatherConditionElement.classList.add('home-city-weather-condition')

    const cityWeatherElement = document.createElement('h2')
    cityWeatherElement.innerHTML = `<span class="temp_in_${userTempPreference}">${Number(weatherData.current['temp_' + userTempPreference]).toFixed(1)}</span>°<span class="temp_in_${userTempPreference}_symbol">${userTempPreference.toUpperCase()}</span>`
    cityWeatherElement.classList.add('home-city-weather')

    const cityHighLowTempsElement = document.createElement('div')
    cityHighLowTempsElement.classList.add('home-city-high-low-temps')

    const cityHighTempElement = document.createElement('h2')
    cityHighTempElement.innerHTML = `H: <span class="temp_in_${userTempPreference}">${Number(weatherData.forecast["forecastday"][0].day['maxtemp_' + userTempPreference]).toFixed(1)}</span>°<span class="temp_in_${userTempPreference}_symbol">${userTempPreference.toUpperCase()}</span>`
    cityHighTempElement.classList.add('home-city-high-temp')

    const cityLowTempElement = document.createElement('h2')
    cityLowTempElement.innerHTML = `L: <span class="temp_in_${userTempPreference}">${Number(weatherData.forecast["forecastday"][0].day['mintemp_' + userTempPreference]).toFixed(1)}</span>°<span class="temp_in_${userTempPreference}_symbol">${userTempPreference.toUpperCase()}</span>`
    cityLowTempElement.classList.add('home-city-low-temp')

    cityHighLowTempsElement.append(cityHighTempElement, cityLowTempElement)

    cityElement.append(cityNameElement, cityTimeElement, cityWeatherConditionElement, cityWeatherElement, cityHighLowTempsElement)

    document.getElementById('added-cities').appendChild(cityElement)
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

function ChangeToCelsius() {
    userTempPreference = 'c'
    localStorage.setItem('userTempPreference', 'c')

    editContextMenuFahrenheit.classList.remove('edit-context-menu-temp-active')
    editContextMenuCelsius.classList.add('edit-context-menu-temp-active')

    document.querySelectorAll('.temp_in_f').forEach(temp => {
        temp.classList.remove('temp_in_f')
        temp.classList.add('temp_in_c')
        temp.textContent = ((Number(temp.textContent) - 32) * 5 / 9).toFixed(1);
    })

    document.querySelectorAll('.temp_in_f_symbol').forEach(symbol => {
        symbol.classList.remove('temp_in_f_symbol')
        symbol.classList.add('temp_in_c_symbol')
        symbol.textContent = 'C'
    })
}

function ChangeToFahrenheit() {
    userTempPreference = 'f'
    localStorage.setItem('userTempPreference', 'f')

    editContextMenuCelsius.classList.remove('edit-context-menu-temp-active')
    editContextMenuFahrenheit.classList.add('edit-context-menu-temp-active')

    document.querySelectorAll('.temp_in_c').forEach(temp => {
        temp.classList.remove('temp_in_c')
        temp.classList.add('temp_in_f')
        temp.textContent = ((Number(temp.textContent) * 9 / 5) + 32).toFixed(1);
    })

    document.querySelectorAll('.temp_in_c_symbol').forEach(symbol => {
        symbol.classList.remove('temp_in_c_symbol')
        symbol.classList.add('temp_in_f_symbol')
        symbol.textContent = 'F'
    })
}

// Home Section DOM
editContextMenuCelsius.addEventListener('click', ChangeToCelsius)
editContextMenuFahrenheit.addEventListener('click', ChangeToFahrenheit)

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

let isDragActive = false
let isCanDelete = false

swappable.on('swappable:start', e => { isDragActive = true; trashCan.classList.add('trash-can-reveal') });
swappable.on('swappable:swapped', e => { });
swappable.on('swappable:stop', e => {
    setTimeout(() => {
        currentCities = []
        Array.from(document.getElementById('added-cities').children).forEach(child => {
            currentCities.push(child.getAttribute('data-city'))
        });
        localStorage.setItem('cities', JSON.stringify(currentCities))

        if (isCanDelete) {
            currentCities = currentCities.filter((element) => element !== e.dragEvent.source.getAttribute('data-city'))
            localStorage.setItem('cities', JSON.stringify(currentCities))
            document.getElementById('added-cities').removeChild(e.dragEvent.originalSource);
        }
        trashCan.classList.remove('trash-can-reveal')
        trashCanLid.classList.remove('trash-can-lid-open')
        isDragActive = false
        isCanDelete = false
    }, 0);
});

document.addEventListener('touchmove', e => {
    if (e.touches[0].clientX > trashCan.getBoundingClientRect().x &&
        e.touches[0].clientX < trashCan.getBoundingClientRect().x + trashCan.getBoundingClientRect().width &&
        e.touches[0].clientY > trashCan.getBoundingClientRect().y &&
        e.touches[0].clientY < trashCan.getBoundingClientRect().y + trashCan.getBoundingClientRect().height
    ) {
        if (isDragActive) {
            trashCanLid.classList.add('trash-can-lid-open')
            isCanDelete = true
        }
    } else {
        trashCanLid.classList.remove('trash-can-lid-open')
        isCanDelete = false
    }
})

trashCan.addEventListener('mouseover', e => {
    if (isDragActive) {
        trashCanLid.classList.add('trash-can-lid-open')
        isCanDelete = true
    }
})

trashCan.addEventListener('mouseleave', e => {
    trashCanLid.classList.remove('trash-can-lid-open')
    isCanDelete = false
})

weatherSectionToggle.addEventListener('click', e => {
    document.getElementById('weather-section').classList.remove('weather-section-opened')
})

function ChangeWeatherSection(weatherData) {
    weatherSectionLocation.textContent = `${weatherData.location.name}${weatherData.location.region ? ', ' + weatherData.location.region : ''}, ${weatherData.location.country}`
    weatherSectionTime.textContent = ChangeTo12HourFormat(weatherData.location.localtime.split(" ")[1])
    weatherSectionTemp.textContent = `${Number(weatherData.current.temp_c).toFixed(1)}°C`
}