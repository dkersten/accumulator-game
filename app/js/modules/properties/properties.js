// consts for property price DOM elements
const vendingCostEl = document.querySelector('.vending-machine > .left .price')
const foodCartCostEl = document.querySelector('.food-cart > .left .price')
const foodTruckCostEl = document.querySelector('.food-truck > .left .price')
const restaurantCostEl = document.querySelector('.restaurant > .left .price')
const franchiseCostEl = document.querySelector('.franchise > .left .price')

// consts for properties owned DOM elements
const vendingOwnedEl = document.querySelector('.vending-machine > .right .quantity')
const foodCartOwnedEl = document.querySelector('.food-cart > .right .quantity')
const foodTruckOwnedEl = document.querySelector('.food-truck > .right .quantity')
const restaurantOwnedEl = document.querySelector('.restaurant > .right .quantity')
const franchiseOwnedEl = document.querySelector('.franchise > .right .quantity')

// function to set prices of properties on DOM
const setPropertyPrices = () => {
    vendingCostEl.innerHTML = vendingPrice.toLocaleString()
    foodCartCostEl.innerHTML = foodCartPrice.toLocaleString()
    foodTruckCostEl.innerHTML = foodTruckPrice.toLocaleString()
    restaurantCostEl.innerHTML = restaurantPrice.toLocaleString()
    franchiseCostEl.innerHTML = franchisePrice.toLocaleString()
}

// function to set properties owned on DOM
const setPropertiesOwned = () => {
    vendingOwnedEl.innerHTML = vendingOwned
    foodCartOwnedEl.innerHTML = foodCartOwned
    foodTruckOwnedEl.innerHTML = foodTruckOwned
    restaurantOwnedEl.innerHTML = restaurantOwned
    franchiseOwnedEl.innerHTML = franchiseOwned
}

// function to set dollars per second
const setPerSecond = () => {
    perSecondTotalEl.innerHTML = CPSScore.toLocaleString()
}