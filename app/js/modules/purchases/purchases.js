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

// set costs of purchases
const setPurchasePrices = () => {
    ingredientsCostEl.innerHTML = ingredientsPrice.toLocaleString()
    trainingCostEl.innerHTML = trainingPrice.toLocaleString()
    smMarketingCampaignCostEl.innerHTML = smMarketingCampaignPrice.toLocaleString()
    printMarketingCampaignCostEl.innerHTML = printMarketingCampaignPrice.toLocaleString()
    tvMarketingCampaignCostEl.innerHTML = tvMarketingCampaignPrice.toLocaleString()
    logisticsEfficiencyUpgradeCostEl.innerHTML = logisticsUpgradePrice.toLocaleString()
}

// set purchases owned
const setPurchasesOwned = () => {
    ingredientsOwnedEl.innerHTML = ingreadientsPurchased
    trainingsOwnedEl.innerHTML = trainingPurchased
    smMarketingCampaignOwnedEl.innerHTML = smMarketingCampaignPurchased
    printMarketingCampaignOwnedEl.innerHTML = printMarketingCampaignPurchased
    tvMarketingCampaignOwnedEl.innerHTML = tvMarketingCampaignPurchased
    logisticsUpgradeOwnedEl.innerHTML = supplyChainLogicticsUpgraded
}