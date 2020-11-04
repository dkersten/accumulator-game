// continually called from purchases/upgradeBehaviorOnLoad.js
const rwPurchaseCheck = () => {
    if (CURRENTSCORE >= costBelAirMansion) {
        BelAirMansionCardEl.classList.remove('disabled')
        BelAirMansionCardEl.classList.add('enabled')
        BelAirMansionCardEl.disabled = false

    } else if (CURRENTSCORE < costBelAirMansion) {
        BelAirMansionCardEl.classList.remove('enabled')
        BelAirMansionCardEl.classList.add('disabled')
        BelAirMansionCardEl.disabled = true
    }

    if (CURRENTSCORE >= costSantaMonicaBeachHouse) {
        SantaMonicaBeachHouseCardEl.classList.remove('disabled')
        SantaMonicaBeachHouseCardEl.classList.add('enabled')
        SantaMonicaBeachHouseCardEl.disabled = false

    } else if (CURRENTSCORE < costSantaMonicaBeachHouse) {
        SantaMonicaBeachHouseCardEl.classList.remove('enabled')
        SantaMonicaBeachHouseCardEl.classList.add('disabled')
        SantaMonicaBeachHouseCardEl.disabled = true

    }

    if (CURRENTSCORE >= costLaJollaMansion) {
        LaJollaMansionCardEl.classList.remove('disabled')
        LaJollaMansionCardEl.classList.add('enabled')
        LaJollaMansionCardEl.disabled = false

    } else if (CURRENTSCORE < costLaJollaMansion) {
        LaJollaMansionCardEl.classList.remove('enabled')
        LaJollaMansionCardEl.classList.add('disabled')
        LaJollaMansionCardEl.disabled = true

    }

    if (CURRENTSCORE >= costnyNyPenthouse) {
        nyNyPenthouseCardEl.classList.remove('disabled')
        nyNyPenthouseCardEl.classList.add('enabled')
        nyNyPenthouseCardEl.disabled = false

    } else if (CURRENTSCORE < costnyNyPenthouse) {
        nyNyPenthouseCardEl.classList.remove('enabled')
        nyNyPenthouseCardEl.classList.add('disabled')
        nyNyPenthouseCardEl.disabled = true

    }

    if (CURRENTSCORE >= costBirdKeyMansion) {
        BirdKeyMansionCardEl.classList.remove('disabled')
        BirdKeyMansionCardEl.classList.add('enabled')
        BirdKeyMansionCardEl.disabled = false

    } else if (CURRENTSCORE < costBirdKeyMansion) {
        BirdKeyMansionCardEl.classList.remove('enabled')
        BirdKeyMansionCardEl.classList.add('disabled')
        BirdKeyMansionCardEl.disabled = true

    }
}