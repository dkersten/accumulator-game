// consts for purchase cost DOM elements
const ingredientsCostEl = document.querySelector('.ingredients > .left .price')
const trainingCostEl = document.querySelector('.training > .left .price')
const smMarketingCampaignCostEl = document.querySelector('.sm-marketing > .left .price')
const printMarketingCampaignCostEl = document.querySelector('.print-marketing > .left .price')
const tvMarketingCampaignCostEl = document.querySelector('.tv-marketing > .left .price')
const logisticsEfficiencyUpgradeCostEl = document.querySelector('.supply-chain-logistics > .left .price')

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