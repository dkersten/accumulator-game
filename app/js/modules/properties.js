// const vendingCard = document.querySelector('.vending-machine')
// const foodCartCard = document.querySelector('.food-cart')
// const foodTruckCard = document.querySelector('.food-truck')
// const restaurantCard = document.querySelector('.restaurant')
// const franchiseCard = document.querySelector('.franchise')

// consts for property price DOM elements
const vendingCostEl = document.querySelector('.vending-machine > .left .price')
const foodCartCostEl = document.querySelector('.food-cart > .left .price')
const foodTruckCostEl = document.querySelector('.food-truck > .left .price')
const restaurantCostEl = document.querySelector('.restaurant > .left .price')
const franchiseCostEl = document.querySelector('.franchise > .left .price')

// function to set prices of properties on DOM
const setPropertyPrices = () => {
    vendingCostEl.innerHTML = vendingPrice
    foodCartCostEl.innerHTML = foodCartPrice
    foodTruckCostEl.innerHTML = foodCartPrice
    restaurantCostEl.innerHTML = restaurantPrice
    franchiseCostEl.innerHTML = franchisePrice
}
setPropertyPrices()

// on load disable properties to be bought
vendingCard.disabled = true
foodCartCard.disabled = true
foodTruckCard.disabled = true
restaurantCard.disabled = true
franchiseCard.disabled = true

// on load add 'disabled' class to properties
vendingCard.classList.add('disabled')
foodCartCard.classList.add('disabled')
foodTruckCard.classList.add('disabled')
restaurantCard.classList.add('disabled')
franchiseCard.classList.add('disabled')

// function to continually run, calls current score check
window.setInterval(() => {
    purchasingCheck()
}, 250)

// current score check to see if user can purchase property
const purchasingCheck = () => {
    if (CURRENTSCORE >= vendingPrice) {
        vendingCard.classList.remove('disabled')
        vendingCard.classList.add('enabled')
        vendingCard.disabled = false;
    } 

    if (CURRENTSCORE >= foodCartPrice) {
        foodCartCard.classList.remove('disabled')
        foodCartCard.classList.add('enabled')
        foodCartCard.disabled = false;
    }
    
    if (CURRENTSCORE >= foodTruckPrice) {
        foodTruckCard.classList.remove('disabled')
        foodTruckCard.classList.add('enabled')
        foodTruckCard.disabled = false;
    }
    
    if (CURRENTSCORE >= restaurantPrice) {
        restaurantCard.classList.remove('disabled')
        restaurantCard.classList.add('enabled')
        restaurantCard.disabled = false;
    }
    
    if (CURRENTSCORE >= franchisePrice) {
        franchiseCard.classList.remove('disabled')
        franchiseCard.classList.add('enabled')
        franchiseCard.disabled = false;
    }
}

// function call when a user purchases a vending machine
vendingCard.addEventListener('click', (e) => {
    if (CURRENTSCORE >= vendingPrice) {
        console.log('bought a vending machine')
    } else {
        console.log("can't buy this")
    }
})