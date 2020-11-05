purchaseBtnBelAirMansion.addEventListener('click', (e) => {
    console.log("bel air buy")
    CURRENTSCORE -= costBelAirMansion
    updateWealthAfterPurchase(CURRENTSCORE)

    belAirMansionOwned += 1
    setRwPurchasesOwned()

    rwPurchaseCheck()
})

purchaseBtnSantaMonicaBeachHouse.addEventListener('click', (e) => {
    CURRENTSCORE -= costSantaMonicaBeachHouse
    updateWealthAfterPurchase(CURRENTSCORE)

    santaMonicaOwned += 1
    setRwPurchasesOwned()
    
    rwPurchaseCheck()
})

purchaseBtnLaJollaMansion.addEventListener('click', (e) => {
    CURRENTSCORE -= costLaJollaMansion
    updateWealthAfterPurchase(CURRENTSCORE)

    laJollaOwned += 1
    setRwPurchasesOwned()
    
    rwPurchaseCheck()
})

purchaseBtnNyNyPenthouse.addEventListener('click', (e) => {
    CURRENTSCORE -= costnyNyPenthouse
    updateWealthAfterPurchase(CURRENTSCORE)

    nyNyPenthouseOwned += 1
    setRwPurchasesOwned()
    
    rwPurchaseCheck()
})

purchaseBtnBirdKeyMansion.addEventListener('click', (e) => {
    CURRENTSCORE -= costBirdKeyMansion
    updateWealthAfterPurchase(CURRENTSCORE)

    birdKeyOwned += 1
    setRwPurchasesOwned()
    
    rwPurchaseCheck()
})