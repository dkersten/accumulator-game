// current score check to see if user can purchase property
const purchasingCheck = () => {
    if (CURRENTSCORE >= vendingPrice) {
        vendingCard.classList.remove('disabled')
        vendingCard.classList.add('enabled')
        vendingCard.disabled = false;
    } else {
        vendingCard.classList.remove('enabled')
        vendingCard.classList.add('disabled')
        vendingCard.disabled = true;
    }

    if (CURRENTSCORE >= foodCartPrice) {
        foodCartCard.classList.remove('disabled')
        foodCartCard.classList.add('enabled')
        foodCartCard.disabled = false;
    } else {
        foodCartCard.classList.remove('enabled')
        foodCartCard.classList.add('disabled')
        foodCartCard.disabled = true;
    }
    
    if (CURRENTSCORE >= foodTruckPrice) {
        foodTruckCard.classList.remove('disabled')
        foodTruckCard.classList.add('enabled')
        foodTruckCard.disabled = false;
    } else {
        foodTruckCard.classList.remove('enabled')
        foodTruckCard.classList.add('disabled')
        foodTruckCard.disabled = true;
    }
    
    if (CURRENTSCORE >= restaurantPrice) {
        restaurantCard.classList.remove('disabled')
        restaurantCard.classList.add('enabled')
        restaurantCard.disabled = false;
    } else {
        restaurantCard.classList.remove('enabled')
        restaurantCard.classList.add('disabled')
        restaurantCard.disabled = true;
    }
    
    if (CURRENTSCORE >= franchisePrice) {
        franchiseCard.classList.remove('disabled')
        franchiseCard.classList.add('enabled')
        franchiseCard.disabled = false;
    } else {
        franchiseCard.classList.remove('enabled')
        franchiseCard.classList.add('disabled')
        franchiseCard.disabled = true;
    }
}