// continually called from purchases/upgradeBehaviorOnLoad.js
const rwPurchaseCheck = () => {
    if (CURRENTSCORE >= costBelAirMansion) {
        BelAirMansionCardEl.classList.remove('disabled')
        BelAirMansionCardEl.classList.add('enabled')
        BelAirMansionCardEl.disabled = false

        purchaseBtnBelAirMansion.classList.add('enabled')
        purchaseBtnBelAirMansion.classList.remove('disabled')
        purchaseBtnBelAirMansion.disabled = false

    } else if (CURRENTSCORE < costBelAirMansion) {
        BelAirMansionCardEl.classList.remove('enabled')
        BelAirMansionCardEl.classList.add('disabled')
        BelAirMansionCardEl.disabled = true

        purchaseBtnBelAirMansion.classList.add('disabled')
        purchaseBtnBelAirMansion.classList.add('enabled')
        purchaseBtnBelAirMansion.disabled = true
    }



    if (CURRENTSCORE >= costSantaMonicaBeachHouse) {
        SantaMonicaBeachHouseCardEl.classList.remove('disabled')
        SantaMonicaBeachHouseCardEl.classList.add('enabled')
        SantaMonicaBeachHouseCardEl.disabled = false

        purchaseBtnSantaMonicaBeachHouse.classList.add('enabled')
        purchaseBtnSantaMonicaBeachHouse.classList.remove('disabled')
        purchaseBtnSantaMonicaBeachHouse.disabled = false

    } else if (CURRENTSCORE < costSantaMonicaBeachHouse) {
        SantaMonicaBeachHouseCardEl.classList.remove('enabled')
        SantaMonicaBeachHouseCardEl.classList.add('disabled')
        SantaMonicaBeachHouseCardEl.disabled = true

        purchaseBtnSantaMonicaBeachHouse.classList.add('disabled')
        purchaseBtnSantaMonicaBeachHouse.classList.remove('enabled')
        purchaseBtnSantaMonicaBeachHouse.disabled = true

    }



    if (CURRENTSCORE >= costLaJollaMansion) {
        LaJollaMansionCardEl.classList.remove('disabled')
        LaJollaMansionCardEl.classList.add('enabled')
        LaJollaMansionCardEl.disabled = false

        purchaseBtnLaJollaMansion.classList.add('enabled')
        purchaseBtnLaJollaMansion.classList.remove('disabled')
        purchaseBtnLaJollaMansion.disabled = false

    } else if (CURRENTSCORE < costLaJollaMansion) {
        LaJollaMansionCardEl.classList.remove('enabled')
        LaJollaMansionCardEl.classList.add('disabled')
        LaJollaMansionCardEl.disabled = true

        purchaseBtnLaJollaMansion.classList.add('disabled')
        purchaseBtnLaJollaMansion.classList.remove('enabled')
        purchaseBtnLaJollaMansion.disabled = true

    }



    if (CURRENTSCORE >= costnyNyPenthouse) {
        nyNyPenthouseCardEl.classList.remove('disabled')
        nyNyPenthouseCardEl.classList.add('enabled')
        nyNyPenthouseCardEl.disabled = false

        purchaseBtnNyNyPenthouse.classList.add('enabled')
        purchaseBtnNyNyPenthouse.classList.remove('disabled')
        purchaseBtnNyNyPenthouse.disabled = false

    } else if (CURRENTSCORE < costnyNyPenthouse) {
        nyNyPenthouseCardEl.classList.remove('enabled')
        nyNyPenthouseCardEl.classList.add('disabled')
        nyNyPenthouseCardEl.disabled = true

        purchaseBtnNyNyPenthouse.classList.add('disabled')
        purchaseBtnNyNyPenthouse.classList.remove('enabled')
        purchaseBtnNyNyPenthouse.disabled = true

    }



    if (CURRENTSCORE >= costBirdKeyMansion) {
        BirdKeyMansionCardEl.classList.remove('disabled')
        BirdKeyMansionCardEl.classList.add('enabled')
        BirdKeyMansionCardEl.disabled = false

        purchaseBtnBirdKeyMansion.classList.remove('disabled')
        purchaseBtnBirdKeyMansion.classList.add('enabled')
        purchaseBtnBirdKeyMansion.disabled = false

    } else if (CURRENTSCORE < costBirdKeyMansion) {
        BirdKeyMansionCardEl.classList.remove('enabled')
        BirdKeyMansionCardEl.classList.add('disabled')
        BirdKeyMansionCardEl.disabled = true

        purchaseBtnBirdKeyMansion.classList.remove('enabled')
        purchaseBtnBirdKeyMansion.classList.add('disabled')
        purchaseBtnBirdKeyMansion.disabled = true

    }
}