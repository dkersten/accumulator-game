const purchasingUpgradeCheck = () => {
    if (CURRENTSCORE >= ingredientsPrice) {
        ingredientsCard.classList.remove('disabled')
        ingredientsCard.classList.add('enabled')
        ingredientsCard.disabled = false

        ingredientsPurchaseBtn.classList.remove('disabled')
        ingredientsPurchaseBtn.classList.add('enabled')
        ingredientsPurchaseBtn.disabled = false
        
    } else {
        ingredientsCard.classList.remove('enabled')
        ingredientsCard.classList.add('disabled')
        ingredientsCard.disabled = true

        ingredientsPurchaseBtn.classList.remove('enabled')
        ingredientsPurchaseBtn.classList.add('disabled')
        ingredientsPurchaseBtn.disabled = true

    }

    if (CURRENTSCORE >= trainingPrice) {
        trainingCard.classList.remove('disabled')
        trainingCard.classList.add('enabled')
        trainingCard.disabled = false

        trainingPurchaseBtn.classList.remove('disabled')
        trainingPurchaseBtn.classList.add('enabled')
        trainingPurchaseBtn.disabled = false

    } else {
        trainingCard.classList.remove('enabled')
        trainingCard.classList.add('disabled')
        trainingCard.disabled = true

        trainingPurchaseBtn.classList.remove('enabled')
        trainingPurchaseBtn.classList.add('disabled')
        trainingPurchaseBtn.disabled = true

    }

    if (CURRENTSCORE >= smMarketingCampaignPrice) {
        smMarketingCard.classList.remove('disabled')
        smMarketingCard.classList.add('enabled')
        smMarketingCard.disabled = false

        smMarketingPurchaseBtn.classList.remove('disabled')
        smMarketingPurchaseBtn.classList.add('enabled')
        smMarketingPurchaseBtn.disabled = false

    } else {
        smMarketingCard.classList.remove('enabled')
        smMarketingCard.classList.add('disabled')
        smMarketingCard.disabled = true

        smMarketingPurchaseBtn.classList.remove('enabled')
        smMarketingPurchaseBtn.classList.add('disabled')
        smMarketingPurchaseBtn.disabled = true

    }

    if (CURRENTSCORE >= printMarketingCampaignPrice) {
        printMarketingCard.classList.remove('disabled')
        printMarketingCard.classList.add('enabled')
        printMarketingCard.disabled = false

        printMarketingPurchaseBtn.classList.remove('disabled')
        printMarketingPurchaseBtn.classList.add('enabled')
        printMarketingPurchaseBtn.disabled = false
        
    } else {
        printMarketingCard.classList.remove('enabled')
        printMarketingCard.classList.add('disabled')
        printMarketingCard.disabled = true

        printMarketingPurchaseBtn.classList.remove('enabled')
        printMarketingPurchaseBtn.classList.add('disabled')
        printMarketingPurchaseBtn.disabled = true
        
    }

    if (CURRENTSCORE >= tvMarketingCampaignPrice) {
        tvMarketingCard.classList.remove('disabled')
        tvMarketingCard.classList.add('enabled')
        tvMarketingCard.disabled = false

        tvMarketingPurchaseBtn.classList.remove('disabled')
        tvMarketingPurchaseBtn.classList.add('enabled')
        tvMarketingPurchaseBtn.disabled = false

    } else {
        tvMarketingCard.classList.remove('enabled')
        tvMarketingCard.classList.add('disabled')
        tvMarketingCard.disabled = true

        tvMarketingPurchaseBtn.classList.remove('enabled')
        tvMarketingPurchaseBtn.classList.add('disabled')
        tvMarketingPurchaseBtn.disabled = true

    }

    if (CURRENTSCORE >= logisticsUpgradePrice) {
        logisticsEfficencyCard.classList.remove('disabled')
        logisticsEfficencyCard.classList.add('enabled')
        logisticsEfficencyCard.disabled = false

        logisticsUpgradePurchaseBtn.classList.remove('disabled')
        logisticsUpgradePurchaseBtn.classList.add('enabled')
        logisticsUpgradePurchaseBtn.disabled = false

    } else {
        logisticsEfficencyCard.classList.remove('enabled')
        logisticsEfficencyCard.classList.add('disabled')
        logisticsEfficencyCard.disabled = true

        logisticsUpgradePurchaseBtn.classList.remove('enabled')
        logisticsUpgradePurchaseBtn.classList.add('disabled')
        logisticsUpgradePurchaseBtn.disabled = true

    }
}