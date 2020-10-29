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

// set costs of purchases on load
const setPurchasePrices = () => {
    ingredientsCostEl.innerHTML = ingredientsPrice.toLocaleString()
    trainingCostEl.innerHTML = trainingPrice.toLocaleString()
    smMarketingCampaignCostEl.innerHTML = smMarketingCampaignPrice.toLocaleString()
    printMarketingCampaignCostEl.innerHTML = printMarketingCampaignPrice.toLocaleString()
    tvMarketingCampaignCostEl.innerHTML = tvMarketingCampaignPrice.toLocaleString()
    logisticsEfficiencyUpgradeCostEl.innerHTML = logisticsUpgradePrice.toLocaleString()
}
setPurchasePrices()

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