// function call when a user purchases a vending machine
vendingCardPurchaseBtn.addEventListener('click', (e) => {
    if (CURRENTSCORE >= vendingPrice) {
        CURRENTSCORE -= vendingPrice
        updateWealthAfterPurchase(CURRENTSCORE)

        vendingPrice = Math.ceil(vendingPrice * propertiesPercentageIncrease)
        setPropertyPrices()

        vendingOwned += 1
        setPropertiesOwned()

        CPSScore += 4
        setPerSecond()

        totalPropertiesOwned += 1
        checkForPropertyPurchase()

        totalPurchaseWorth += vendingPrice
    }
})

// function call when a user purchases a food cart
foodCartCardPurchaseBtn.addEventListener('click', (e) => {
    if (CURRENTSCORE >= foodCartPrice) {
        CURRENTSCORE -= foodCartPrice
        updateWealthAfterPurchase(CURRENTSCORE)

        foodCartPrice = Math.ceil(foodCartPrice * propertiesPercentageIncrease)
        setPropertyPrices()

        foodCartOwned += 1
        setPropertiesOwned()

        CPSScore += 40
        setPerSecond()

        totalPropertiesOwned += 1
        checkForPropertyPurchase()

        totalPurchaseWorth += foodCartPrice
    }
})

// function call when a user purchases a food truck
foodTruckCardPurchaseBtn.addEventListener('click', (e) => {
    if (CURRENTSCORE >= foodTruckPrice) {
        CURRENTSCORE -= foodTruckPrice
        updateWealthAfterPurchase(CURRENTSCORE)

        foodTruckPrice = Math.ceil(foodTruckPrice * propertiesPercentageIncrease)
        setPropertyPrices()

        foodTruckOwned += 1
        setPropertiesOwned()

        CPSScore += 75
        setPerSecond()

        totalPropertiesOwned += 1
        checkForPropertyPurchase()

        totalPurchaseWorth += foodTruckPrice
    }
})

// function call when a user purchases a restaurant
restaurantCardPurchaseBtn.addEventListener('click', (e) => {
    if (CURRENTSCORE >= restaurantPrice) {
        CURRENTSCORE -= restaurantPrice
        updateWealthAfterPurchase(CURRENTSCORE)

        restaurantPrice = Math.ceil(restaurantPrice * propertiesPercentageIncrease)
        setPropertyPrices()

        restaurantOwned += 1
        setPropertiesOwned()

        CPSScore += 400
        setPerSecond()

        totalPropertiesOwned += 1
        checkForPropertyPurchase()

        totalPurchaseWorth += restaurantPrice
    }
})

// function call when a user purchases a franchise
franchiseCardPurchaseBtn.addEventListener('click', (e) => {
    if (CURRENTSCORE >= franchisePrice) {
        CURRENTSCORE -= franchisePrice
        updateWealthAfterPurchase(CURRENTSCORE)

        franchisePrice = Math.ceil(franchisePrice * propertiesPercentageIncrease)
        setPropertyPrices()

        franchiseOwned += 1
        setPropertiesOwned()

        CPSScore += 1000
        setPerSecond()

        totalPropertiesOwned += 1
        checkForPropertyPurchase()

        totalPurchaseWorth += franchisePrice
    }
})