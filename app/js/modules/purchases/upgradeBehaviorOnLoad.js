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

// function to continually run, calls current score check
window.setInterval(() => {
    purchasingUpgradeCheck()
}, 250)
