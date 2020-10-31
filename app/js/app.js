let CURRENTSCORE = 100000000;
let CPSScore = 0;
const propertiesPercentageIncrease = 1.4
const purchasesPercentageIncrease = 1.2
let totalPropertiesOwned = 0
let totalUpgradesOwned = 0

// get necessary DOM elements
const vendingCard = document.querySelector('.vending-machine')
const foodCartCard = document.querySelector('.food-cart')
const foodTruckCard = document.querySelector('.food-truck')
const restaurantCard = document.querySelector('.restaurant')
const franchiseCard = document.querySelector('.franchise')

// get necessary DOM elements
const vendingCardPurchaseBtn = document.querySelector('.vending-machine button.buy')
const foodCartCardPurchaseBtn = document.querySelector('.food-cart button.buy')
const foodTruckCardPurchaseBtn = document.querySelector('.food-truck button.buy')
const restaurantCardPurchaseBtn = document.querySelector('.restaurant button.buy')
const franchiseCardPurchaseBtn = document.querySelector('.franchise button.buy')

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

    // update current score on the DOM after purchase
const updateWealthAfterPurchase = (pricePaid) => {
    currentWealthNum.innerHTML = pricePaid.toLocaleString()
}

// trigger function to add properties to DOM (should only run on first click)
const propertyContainerEl = document.querySelector('.properties-container')

// function make sure that a property is purchased, then remove the eventhandler from the DOM
const purchasePropertyOnceFunc = (e) => {
    if (e.target.classList[0] === "buy") {
        if (!e.target.disabled) {
            showAllUpgrades()
            removeHandler()
        }
    }
}

// eventhandler to make sure that a property is purchased, then remove the eventhandler from the DOM
propertyContainerEl.addEventListener('click', purchasePropertyOnceFunc)

// remove eventhandler from the DOM
const removeHandler = () => {
    propertyContainerEl.removeEventListener('click', purchasePropertyOnceFunc)
}
