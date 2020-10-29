let CURRENTSCORE = 250000;
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

// purchases cost
let ingredientsPrice = 2000,
    trainingPrice = 10000,
    smMarketingCampaignPrice = 25000,
    printMarketingCampaignPrice = 60000,
    tvMarketingCampaignPrice = 100000,
    logisticsUpgradePrice = 250000

// purchases owned
let ingreadientsPurchased = 0,
    trainingPurchased = 0,
    smMarketingCampaignPurchased = 0,
    printMarketingCampaignPurchased = 0,
    tvMarketingCampaignPurchased = 0,
    supplyChainLogicticsUpgraded = 0