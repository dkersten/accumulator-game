setPropertyPrices()

setPropertiesOwned()

// on load disable properties to be bought
vendingCard.disabled = true
foodCartCard.disabled = true
foodTruckCard.disabled = true
restaurantCard.disabled = true
franchiseCard.disabled = true

// on load add 'disabled' class to properties
vendingCard.classList.add('disabled')
foodCartCard.classList.add('disabled')
foodTruckCard.classList.add('disabled')
restaurantCard.classList.add('disabled')
franchiseCard.classList.add('disabled')

// on load add 'diabled' to property buy btns
vendingCardPurchaseBtn.disabled = true
foodCartCardPurchaseBtn.disabled = true
foodTruckCardPurchaseBtn.disabled = true
restaurantCardPurchaseBtn.disabled = true
franchiseCardPurchaseBtn.disabled = true

// on load add 'diabled' class to property buy btns
vendingCardPurchaseBtn.classList.add('disabled')
foodCartCardPurchaseBtn.classList.add('disabled')
foodTruckCardPurchaseBtn.classList.add('disabled')
restaurantCardPurchaseBtn.classList.add('disabled')
franchiseCardPurchaseBtn.classList.add('disabled')

// function to continually run, calls current score check
window.setInterval(() => {
    purchasingCheck()
}, 250)