let CURRENTSCORE = 100000000;
let CPSScore = 0;

// get necessary DOM elements
const vendingCard = document.querySelector('.vending-machine')
const foodCartCard = document.querySelector('.food-cart')
const foodTruckCard = document.querySelector('.food-truck')
const restaurantCard = document.querySelector('.restaurant')
const franchiseCard = document.querySelector('.franchise')

// property costs
let vendingPrice = 200,
    foodCartPrice = 50000,
    foodTruckPrice = 100000,
    restaurantPrice = 2000000,
    franchisePrice = 50000000

// properties owned
let vendingOwned = 0,
    foodCartOwned = 0,
    foodTruckOwned = 0,
    restaurantOwned = 0,
    franchiseOwned = 0