// function call when a user purchases ingredients upgrade
ingredientsCard.addEventListener('click', (e) => {
    if (CURRENTSCORE >= ingredientsPrice) {
        CURRENTSCORE -= ingredientsPrice
        updateWealthAfterPurchase(CURRENTSCORE)

        ingredientsPrice = Math.ceil(ingredientsPrice * 1.2)
        setPurchasePrices()

        ingreadientsPurchased += 1
        setPurchasesOwned()

        CPSScore += 10
        setPerSecond()

        totalUpgradesOwned += 1
    }
})

// function call when a user purchases training upgrade
trainingCard.addEventListener('click', (e) => {
    console.log("training")
    if (CURRENTSCORE >= trainingPrice) {
        CURRENTSCORE -= trainingPrice
        updateWealthAfterPurchase(CURRENTSCORE)

        trainingPrice = Math.ceil(trainingPrice * 1.2)
        setPurchasePrices()

        trainingPurchased += 1
        setPurchasesOwned()

        CPSScore += 50
        setPerSecond()

        totalUpgradesOwned += 1
    }
})

// function call when a user purchases sm marketing campaign upgrade
smMarketingCard.addEventListener('click', (e) => {
    console.log("training")
    if (CURRENTSCORE >= smMarketingCampaignPrice) {
        CURRENTSCORE -= smMarketingCampaignPrice
        updateWealthAfterPurchase(CURRENTSCORE)

        smMarketingCampaignPrice = Math.ceil(smMarketingCampaignPrice * 1.2)
        setPurchasePrices()

        smMarketingCampaignPurchased += 1
        setPurchasesOwned()

        CPSScore += 72
        setPerSecond()

        totalUpgradesOwned += 1
    }
})

// function call when a user purchases print marketing campaign upgrade
printMarketingCard.addEventListener('click', (e) => {
    console.log("training")
    if (CURRENTSCORE >= printMarketingCampaignPrice) {
        CURRENTSCORE -= printMarketingCampaignPrice
        updateWealthAfterPurchase(CURRENTSCORE)

        printMarketingCampaignPrice = Math.ceil(printMarketingCampaignPrice * 1.2)
        setPurchasePrices()

        printMarketingCampaignPurchased += 1
        setPurchasesOwned()

        CPSScore += 95
        setPerSecond()

        totalUpgradesOwned += 1
    }
})

// function call when a user purchases tv marketing campaign upgrade
tvMarketingCard.addEventListener('click', (e) => {
    console.log("training")
    if (CURRENTSCORE >= tvMarketingCampaignPrice) {
        CURRENTSCORE -= tvMarketingCampaignPrice
        updateWealthAfterPurchase(CURRENTSCORE)

        tvMarketingCampaignPrice = Math.ceil(tvMarketingCampaignPrice * 1.2)
        setPurchasePrices()

        tvMarketingCampaignPurchased += 1
        setPurchasesOwned()

        CPSScore += 117
        setPerSecond()

        totalUpgradesOwned += 1
    }
})

// function call when a user purchases tv marketing campaign upgrade
logisticsEfficencyCard.addEventListener('click', (e) => {
    console.log("training")
    if (CURRENTSCORE >= logisticsUpgradePrice) {
        CURRENTSCORE -= logisticsUpgradePrice
        updateWealthAfterPurchase(CURRENTSCORE)

        logisticsUpgradePrice = Math.ceil(logisticsUpgradePrice * 1.2)
        setPurchasePrices()

        supplyChainLogicticsUpgraded += 1
        setPurchasesOwned()

        CPSScore += 155
        setPerSecond()

        totalUpgradesOwned += 1
    }
})