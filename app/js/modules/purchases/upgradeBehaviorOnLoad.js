// set costs of purchases on load
setPurchasePrices()

// set purchases owned on load
setPurchasesOwned()

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

// on load add 'diabled' to property buy btns
ingredientsPurchaseBtn.disabled = true
trainingPurchaseBtn.disabled = true
smMarketingPurchaseBtn.disabled = true
printMarketingPurchaseBtn.disabled = true
tvMarketingPurchaseBtn.disabled = true
logisticsUpgradePurchaseBtn.disabled = true

// on load add 'diabled' class to property buy btns
ingredientsPurchaseBtn.classList.add('disabled')
trainingPurchaseBtn.classList.add('disabled')
smMarketingPurchaseBtn.classList.add('disabled')
printMarketingPurchaseBtn.classList.add('disabled')
tvMarketingPurchaseBtn.classList.add('disabled')
logisticsUpgradePurchaseBtn.classList.add('disabled')

// function to continually run, calls current score check
window.setInterval(() => {
    purchasingUpgradeCheck()
    netWorthCheck() // check to see if you haven more money than people
}, 250)
