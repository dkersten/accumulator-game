// consts for purchase cost DOM elements
const ingredientsCostEl = document.querySelector('.ingredients > .left .price')
const trainingCostEl = document.querySelector('.training > .left .price')
const smMarketingCampaignCostEl = document.querySelector('.sm-marketing > .left .price')
const printMarketingCampaignCostEl = document.querySelector('.print-marketing > .left .price')
const tvMarketingCampaignCostEl = document.querySelector('.tv-marketing > .left .price')
const logisticsEfficiencyUpgradeCostEl = document.querySelector('.supply-chain-logistics > .left .price')

// consts for purchase card DOM elements
const ingredientsCard = document.querySelector('.purchase.ingredients')
const trainingCard = document.querySelector('.purchase.training')
const smMarketingCard = document.querySelector('.purchase.sm-marketing')
const printMarketingCard = document.querySelector('.purchase.print-marketing')
const tvMarketingCard = document.querySelector('.purchase.tv-marketing')
const logisticsEfficencyCard = document.querySelector('.purchase.supply-chain-logistics')

// consts for purchase owned DOM elements
const ingredientsOwnedEl = document.querySelector('.purchase.ingredients .quantity')
const trainingsOwnedEl = document.querySelector('.purchase.training .quantity')
const smMarketingCampaignOwnedEl = document.querySelector('.purchase.sm-marketing .quantity')
const printMarketingCampaignOwnedEl = document.querySelector('.purchase.print-marketing .quantity')
const tvMarketingCampaignOwnedEl = document.querySelector('.purchase.tv-marketing .quantity')
const logisticsUpgradeOwnedEl = document.querySelector('.purchase.supply-chain-logistics .quantity')


// disable purchase cards by default on load
ingredientsCard.disabled = true
trainingCard.disabled = true
smMarketingCard.disabled = true
printMarketingCard.disabled = true
tvMarketingCard.disabled = true
logisticsEfficencyCard.disabled = true

// on load add 'disabled' class to purchases
ingredientsCard.classList.add('disabled')
trainingCard.classList.add('disabled')
smMarketingCard.classList.add('disabled')
printMarketingCard.classList.add('disabled')
tvMarketingCard.classList.add('disabled')
logisticsEfficencyCard.classList.add('disabled')

// set costs of purchases
const setPurchasePrices = () => {
    ingredientsCostEl.innerHTML = ingredientsPrice.toLocaleString()
    trainingCostEl.innerHTML = trainingPrice.toLocaleString()
    smMarketingCampaignCostEl.innerHTML = smMarketingCampaignPrice.toLocaleString()
    printMarketingCampaignCostEl.innerHTML = printMarketingCampaignPrice.toLocaleString()
    tvMarketingCampaignCostEl.innerHTML = tvMarketingCampaignPrice.toLocaleString()
    logisticsEfficiencyUpgradeCostEl.innerHTML = logisticsUpgradePrice.toLocaleString()
}
// set costs of purchases on load
setPurchasePrices()

// set purchases owned
const setPurchasesOwned = () => {
    ingredientsOwnedEl.innerHTML = ingreadientsPurchased
    trainingsOwnedEl.innerHTML = trainingPurchased
    smMarketingCampaignOwnedEl.innerHTML = smMarketingCampaignPurchased
    printMarketingCampaignOwnedEl.innerHTML = printMarketingCampaignPurchased
    tvMarketingCampaignOwnedEl.innerHTML = tvMarketingCampaignPurchased
    logisticsUpgradeOwnedEl.innerHTML = supplyChainLogicticsUpgraded
}

// set purchases owned on load
setPurchasesOwned()

// function to continually run, calls current score check
window.setInterval(() => {
    purchasingUpgradeCheck()
}, 250)

const purchasingUpgradeCheck = () => {
    if (CURRENTSCORE >= ingredientsPrice) {
        ingredientsCard.classList.remove('disabled')
        ingredientsCard.classList.add('enabled')
        ingredientsCard.disabled = false
    } else {
        ingredientsCard.classList.remove('enabled')
        ingredientsCard.classList.add('disabled')
        ingredientsCard.disabled = true
    }

    if (CURRENTSCORE >= trainingPrice) {
        trainingCard.classList.remove('disabled')
        trainingCard.classList.add('enabled')
        trainingCard.disabled = false
    } else {
        trainingCard.classList.remove('enabled')
        trainingCard.classList.add('disabled')
        trainingCard.disabled = true
    }

    if (CURRENTSCORE >= smMarketingCampaignPrice) {
        smMarketingCard.classList.remove('disabled')
        smMarketingCard.classList.add('enabled')
        smMarketingCard.disabled = false
    } else {
        smMarketingCard.classList.remove('enabled')
        smMarketingCard.classList.add('disabled')
        smMarketingCard.disabled = true
    }

    if (CURRENTSCORE >= printMarketingCampaignPrice) {
        printMarketingCard.classList.remove('disabled')
        printMarketingCard.classList.add('enabled')
        printMarketingCard.disabled = false
    } else {
        printMarketingCard.classList.remove('enabled')
        printMarketingCard.classList.add('disabled')
        printMarketingCard.disabled = true
    }

    if (CURRENTSCORE >= tvMarketingCampaignPrice) {
        tvMarketingCard.classList.remove('disabled')
        tvMarketingCard.classList.add('enabled')
        tvMarketingCard.disabled = false
    } else {
        tvMarketingCard.classList.remove('enabled')
        tvMarketingCard.classList.add('disabled')
        tvMarketingCard.disabled = true
    }

    if (CURRENTSCORE >= logisticsUpgradePrice) {
        logisticsEfficencyCard.classList.remove('disabled')
        logisticsEfficencyCard.classList.add('enabled')
        logisticsEfficencyCard.disabled = false
    } else {
        logisticsEfficencyCard.classList.remove('enabled')
        logisticsEfficencyCard.classList.add('disabled')
        logisticsEfficencyCard.disabled = true
    }
}

// function call when a user purchases ingredients upgrade
ingredientsCard.addEventListener('click', (e) => {
    if (CURRENTSCORE >= ingredientsPrice) {
        CURRENTSCORE -= ingredientsPrice
        updateWealthAfterPurchase(CURRENTSCORE)

        ingredientsPrice = Math.ceil(ingredientsPrice * 1.2)
        setPurchasePrices()

        ingreadientsPurchased += 1
        setPurchasesOwned()

        CPSScore += 10
        setPerSecond()

        totalUpgradesOwned += 1
    }
})

// function call when a user purchases training upgrade
trainingCard.addEventListener('click', (e) => {
    console.log("training")
    if (CURRENTSCORE >= trainingPrice) {
        CURRENTSCORE -= trainingPrice
        updateWealthAfterPurchase(CURRENTSCORE)

        trainingPrice = Math.ceil(trainingPrice * 1.2)
        setPurchasePrices()

        trainingPurchased += 1
        setPurchasesOwned()

        CPSScore += 50
        setPerSecond()

        totalUpgradesOwned += 1
    }
})

// function call when a user purchases sm marketing campaign upgrade
smMarketingCard.addEventListener('click', (e) => {
    console.log("training")
    if (CURRENTSCORE >= smMarketingCampaignPrice) {
        CURRENTSCORE -= smMarketingCampaignPrice
        updateWealthAfterPurchase(CURRENTSCORE)

        smMarketingCampaignPrice = Math.ceil(smMarketingCampaignPrice * 1.2)
        setPurchasePrices()

        smMarketingCampaignPurchased += 1
        setPurchasesOwned()

        CPSScore += 72
        setPerSecond()

        totalUpgradesOwned += 1
    }
})

// function call when a user purchases print marketing campaign upgrade
printMarketingCard.addEventListener('click', (e) => {
    console.log("training")
    if (CURRENTSCORE >= printMarketingCampaignPrice) {
        CURRENTSCORE -= printMarketingCampaignPrice
        updateWealthAfterPurchase(CURRENTSCORE)

        printMarketingCampaignPrice = Math.ceil(printMarketingCampaignPrice * 1.2)
        setPurchasePrices()

        printMarketingCampaignPurchased += 1
        setPurchasesOwned()

        CPSScore += 95
        setPerSecond()

        totalUpgradesOwned += 1
    }
})

// function call when a user purchases tv marketing campaign upgrade
tvMarketingCard.addEventListener('click', (e) => {
    console.log("training")
    if (CURRENTSCORE >= tvMarketingCampaignPrice) {
        CURRENTSCORE -= tvMarketingCampaignPrice
        updateWealthAfterPurchase(CURRENTSCORE)

        tvMarketingCampaignPrice = Math.ceil(tvMarketingCampaignPrice * 1.2)
        setPurchasePrices()

        tvMarketingCampaignPurchased += 1
        setPurchasesOwned()

        CPSScore += 117
        setPerSecond()

        totalUpgradesOwned += 1
    }
})

// function call when a user purchases tv marketing campaign upgrade
logisticsEfficencyCard.addEventListener('click', (e) => {
    console.log("training")
    if (CURRENTSCORE >= logisticsUpgradePrice) {
        CURRENTSCORE -= logisticsUpgradePrice
        updateWealthAfterPurchase(CURRENTSCORE)

        logisticsUpgradePrice = Math.ceil(logisticsUpgradePrice * 1.2)
        setPurchasePrices()

        supplyChainLogicticsUpgraded += 1
        setPurchasesOwned()

        CPSScore += 155
        setPerSecond()

        totalUpgradesOwned += 1
    }
})

// show all properties (only after a property has been purchased)
