purchaseBtnBelAirMansion.addEventListener('click', (e) => {
    CURRENTSCORE -= costBelAirMansion
    updateWealthAfterPurchase(CURRENTSCORE)

    belAirMansionOwned += 1
    setRwPurchasesOwned()

    rwPurchaseCheck()
    
    totalRWPurchaseWorth += costBelAirMansion
})

purchaseBtnSantaMonicaBeachHouse.addEventListener('click', (e) => {
    CURRENTSCORE -= costSantaMonicaBeachHouse
    updateWealthAfterPurchase(CURRENTSCORE)

    santaMonicaOwned += 1
    setRwPurchasesOwned()
    
    rwPurchaseCheck()
    
    totalRWPurchaseWorth += costSantaMonicaBeachHouse
})

purchaseBtnLaJollaMansion.addEventListener('click', (e) => {
    CURRENTSCORE -= costLaJollaMansion
    updateWealthAfterPurchase(CURRENTSCORE)

    laJollaOwned += 1
    setRwPurchasesOwned()
    
    rwPurchaseCheck()
    
    totalRWPurchaseWorth += costLaJollaMansion
})

purchaseBtnNyNyPenthouse.addEventListener('click', (e) => {
    CURRENTSCORE -= costnyNyPenthouse
    updateWealthAfterPurchase(CURRENTSCORE)

    nyNyPenthouseOwned += 1
    setRwPurchasesOwned()
    
    rwPurchaseCheck()
    
    totalRWPurchaseWorth += costnyNyPenthouse
})

purchaseBtnBirdKeyMansion.addEventListener('click', (e) => {
    CURRENTSCORE -= costBirdKeyMansion
    updateWealthAfterPurchase(CURRENTSCORE)

    birdKeyOwned += 1
    setRwPurchasesOwned()
    
    rwPurchaseCheck()
    
    totalRWPurchaseWorth += costBirdKeyMansion
})