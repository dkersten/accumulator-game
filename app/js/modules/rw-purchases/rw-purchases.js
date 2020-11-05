// DOM elements for rw purchase cards
const BelAirMansionCardEl = document.querySelector('.rw-purchases-container .bel-air-mansion')
const SantaMonicaBeachHouseCardEl = document.querySelector('.rw-purchases-container .santa-monica-beachouse')
const LaJollaMansionCardEl = document.querySelector('.rw-purchases-container .la-jolla-mansion')
const nyNyPenthouseCardEl = document.querySelector('.rw-purchases-container .ny-ny-penthouse')
const BirdKeyMansionCardEl = document.querySelector('.rw-purchases-container .bird-key-mansion')

// DOM elements for rw purchase prices
const costBelAirMansionEl = document.querySelector('.rw-purchases-container .bel-air-mansion .price')
const costSantaMonicaBeachHouseEl = document.querySelector('.rw-purchases-container .santa-monica-beachouse .price')
const costLaJollaMansionEl = document.querySelector('.rw-purchases-container .la-jolla-mansion .price')
const costnyNyPenthouseEl = document.querySelector('.rw-purchases-container .ny-ny-penthouse .price')
const costBirdKeyMansionEl = document.querySelector('.rw-purchases-container .bird-key-mansion .price')

// DOM elements for rw purchase buttons
const purchaseBtnBelAirMansion = document.querySelector('.rw-purchases-container .bel-air-mansion button.buy')
const purchaseBtnSantaMonicaBeachHouse = document.querySelector('.rw-purchases-container .santa-monica-beachouse button.buy')
const purchaseBtnLaJollaMansion = document.querySelector('.rw-purchases-container .la-jolla-mansion button.buy')
const purchaseBtnNyNyPenthouse = document.querySelector('.rw-purchases-container .ny-ny-penthouse button.buy')
const purchaseBtnBirdKeyMansion = document.querySelector('.rw-purchases-container .bird-key-mansion button.buy')

// DOM Elements for rw proeprties owned
const belAirMansionOwnedEl = document.querySelector('.rw-purchases-container .bel-air-mansion .quantity')
const santaMonicaOwnedEl = document.querySelector('.rw-purchases-container .santa-monica-beachouse .quantity')
const laJollaOwnedEl = document.querySelector('.rw-purchases-container .la-jolla-mansion .quantity')
const nyNyPenthouseOwnedEl = document.querySelector('.rw-purchases-container .ny-ny-penthouse .quantity')
const birdKeyOwnedEl = document.querySelector('.rw-purchases-container .bird-key-mansion .quantity')

// consts for RW purchase prices
const costBelAirMansion = 67500000
const costSantaMonicaBeachHouse = 5995000
const costLaJollaMansion = 26900000
const costnyNyPenthouse = 90000000
const costBirdKeyMansion = 6500000

// vars for RW purchases owned
let belAirMansionOwned = 0
let santaMonicaOwned = 0
let laJollaOwned = 0
let nyNyPenthouseOwned = 0
let birdKeyOwned = 0

// set prices of real world prices on load
costBelAirMansionEl.innerHTML = costBelAirMansion.toLocaleString()
costSantaMonicaBeachHouseEl.innerHTML = costSantaMonicaBeachHouse.toLocaleString()
costLaJollaMansionEl.innerHTML = costLaJollaMansion.toLocaleString()
costnyNyPenthouseEl.innerHTML = costnyNyPenthouse.toLocaleString()
costBirdKeyMansionEl.innerHTML = costBirdKeyMansion.toLocaleString()

// set rw purchases owned
const setRwPurchasesOwned = () => {

    belAirMansionOwnedEl.innerHTML = belAirMansionOwned
    santaMonicaOwnedEl.innerHTML = santaMonicaOwned
    laJollaOwnedEl.innerHTML = laJollaOwned
    nyNyPenthouseOwnedEl.innerHTML = nyNyPenthouseOwned
    birdKeyOwnedEl.innerHTML = birdKeyOwned
}
setRwPurchasesOwned()

// set nums of real world properties owned
// belAirMansionOwnedEl.innerHTML = belAirMansionOwned
// santaMonicaOwnedEl.innerHTML = santaMonicaOwned
// laJollaOwnedEl.innerHTML = laJollaOwned
// nyNyPenthouseOwnedEl.innerHTML = nyNyPenthouseOwned
// birdKeyOwnedEl.innerHTML = birdKeyOwned

// disable cards on load
BelAirMansionCardEl.disabled = true
SantaMonicaBeachHouseCardEl.disabled = true
LaJollaMansionCardEl.disabled = true
nyNyPenthouseCardEl.disabled = true
BirdKeyMansionCardEl.disabled = true

// add 'disabled' class to disabled cards
BelAirMansionCardEl.classList.add('disabled')
SantaMonicaBeachHouseCardEl.classList.add('disabled')
LaJollaMansionCardEl.classList.add('disabled')
nyNyPenthouseCardEl.classList.add('disabled')
BirdKeyMansionCardEl.classList.add('disabled')