// DOM elements for rw purchase prices
const costBelAirMansionEl = document.querySelector('.rw-purchases-container .bel-air-mansion .price')
const costSantaMonicaBeachHouseEl = document.querySelector('.rw-purchases-container .santa-monica-beachouse .price')
const costLaJollaMansionEl = document.querySelector('.rw-purchases-container .la-jolla-mansion .price')
const costnyNyPenthouseEl = document.querySelector('.rw-purchases-container .ny-ny-penthouse .price')
const costBirKeyMansionEl = document.querySelector('.rw-purchases-container .bird-key-mansion .price')

// consts for RW purchase prices
const costBelAirMansion = 67500000
const costSantaMonicaBeachHouse = 5995000
const costLaJollaMansion = 26900000
const costnyNyPenthouse = 90000000
const costBirKeyMansion = 6500000

// set prices of real world prices on load
costBelAirMansionEl.innerHTML = costBelAirMansion.toLocaleString()
costSantaMonicaBeachHouseEl.innerHTML = costSantaMonicaBeachHouse.toLocaleString()
costLaJollaMansionEl.innerHTML = costLaJollaMansion.toLocaleString()
costnyNyPenthouseEl.innerHTML = costnyNyPenthouse.toLocaleString()
costBirKeyMansionEl.innerHTML = costBirKeyMansion.toLocaleString()