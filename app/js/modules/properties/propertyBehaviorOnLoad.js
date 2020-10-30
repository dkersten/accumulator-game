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

// function to continually run, calls current score check
window.setInterval(() => {
    purchasingCheck()
}, 250)