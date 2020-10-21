let CURRENTSCORE = 0;
let CPSSCore = 0;

// get necessary DOM elements
const vendingCard = document.querySelector('.vending-machine')
const foodCartCard = document.querySelector('.food-cart')
const foodTruckCard = document.querySelector('.food-truck')
const restaurantCard = document.querySelector('.restaurant')
const franchiseCard = document.querySelector('.franchise')

// property costs
let vendingPrice = 2,
    foodCartPrice = 4,
    foodTruckPrice = 6,
    restaurantPrice = 8,
    franchisePrice = 10