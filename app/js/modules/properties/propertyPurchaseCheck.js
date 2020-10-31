// current score check to see if user can purchase property
const purchasingCheck = () => {
    if (CURRENTSCORE >= vendingPrice) {
        vendingCard.classList.remove('disabled')
        vendingCard.classList.add('enabled')
        vendingCard.disabled = false;

        vendingCardPurchaseBtn.classList.remove('disabled')
        vendingCardPurchaseBtn.classList.add('enabled')
        vendingCardPurchaseBtn.disabled = false

    } else {
        vendingCard.classList.remove('enabled')
        vendingCard.classList.add('disabled')
        vendingCard.disabled = true;

        vendingCardPurchaseBtn.classList.remove('enabled')
        vendingCardPurchaseBtn.classList.add('disabled')
        vendingCardPurchaseBtn.disabled = true

    }

    if (CURRENTSCORE >= foodCartPrice) {
        foodCartCard.classList.remove('disabled')
        foodCartCard.classList.add('enabled')
        foodCartCard.disabled = false;

        foodCartCardPurchaseBtn.classList.remove('disabled')
        foodCartCardPurchaseBtn.classList.add('enabled')
        foodCartCardPurchaseBtn.disabled = false

    } else {
        foodCartCard.classList.remove('enabled')
        foodCartCard.classList.add('disabled')
        foodCartCard.disabled = true;

        foodCartCardPurchaseBtn.classList.remove('enabled')
        foodCartCardPurchaseBtn.classList.add('disabled')
        foodCartCardPurchaseBtn.disabled = true

    }
    
    if (CURRENTSCORE >= foodTruckPrice) {
        foodTruckCard.classList.remove('disabled')
        foodTruckCard.classList.add('enabled')
        foodTruckCard.disabled = false;

        foodTruckCardPurchaseBtn.classList.remove('disabled')
        foodTruckCardPurchaseBtn.classList.add('enabled')
        foodTruckCardPurchaseBtn.disabled = false
        
    } else {
        foodTruckCard.classList.remove('enabled')
        foodTruckCard.classList.add('disabled')
        foodTruckCard.disabled = true;

        foodTruckCardPurchaseBtn.classList.remove('enabled')
        foodTruckCardPurchaseBtn.classList.add('disabled')
        foodTruckCardPurchaseBtn.disabled = true

    }
    
    if (CURRENTSCORE >= restaurantPrice) {
        restaurantCard.classList.remove('disabled')
        restaurantCard.classList.add('enabled')
        restaurantCard.disabled = false;

        restaurantCardPurchaseBtn.classList.remove('disabled')
        restaurantCardPurchaseBtn.classList.add('enabled')
        restaurantCardPurchaseBtn.disabled = false

    } else {
        restaurantCard.classList.remove('enabled')
        restaurantCard.classList.add('disabled')
        restaurantCard.disabled = true;

        restaurantCardPurchaseBtn.classList.remove('enabled')
        restaurantCardPurchaseBtn.classList.add('disabled')
        restaurantCardPurchaseBtn.disabled = true
    }
    
    if (CURRENTSCORE >= franchisePrice) {
        franchiseCard.classList.remove('disabled')
        franchiseCard.classList.add('enabled')
        franchiseCard.disabled = false;

        franchiseCardPurchaseBtn.classList.remove('disabled')
        franchiseCardPurchaseBtn.classList.add('enabled')
        franchiseCardPurchaseBtn.disabled = false

    } else {
        franchiseCard.classList.remove('enabled')
        franchiseCard.classList.add('disabled')
        franchiseCard.disabled = true;

        franchiseCardPurchaseBtn.classList.remove('enabled')
        franchiseCardPurchaseBtn.classList.add('disabled')
        franchiseCardPurchaseBtn.disabled = true

    }
}