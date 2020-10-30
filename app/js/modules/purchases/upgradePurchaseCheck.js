const purchasingUpgradeCheck = () => {
    if (CURRENTSCORE >= ingredientsPrice) {
        ingredientsCard.classList.remove('disabled')
        ingredientsCard.classList.add('enabled')
        ingredientsCard.disabled = false
    } else {
        ingredientsCard.classList.remove('enabled')
        ingredientsCard.classList.add('disabled')
        ingredientsCard.disabled = true
    }

    if (CURRENTSCORE >= trainingPrice) {
        trainingCard.classList.remove('disabled')
        trainingCard.classList.add('enabled')
        trainingCard.disabled = false
    } else {
        trainingCard.classList.remove('enabled')
        trainingCard.classList.add('disabled')
        trainingCard.disabled = true
    }

    if (CURRENTSCORE >= smMarketingCampaignPrice) {
        smMarketingCard.classList.remove('disabled')
        smMarketingCard.classList.add('enabled')
        smMarketingCard.disabled = false
    } else {
        smMarketingCard.classList.remove('enabled')
        smMarketingCard.classList.add('disabled')
        smMarketingCard.disabled = true
    }

    if (CURRENTSCORE >= printMarketingCampaignPrice) {
        printMarketingCard.classList.remove('disabled')
        printMarketingCard.classList.add('enabled')
        printMarketingCard.disabled = false
    } else {
        printMarketingCard.classList.remove('enabled')
        printMarketingCard.classList.add('disabled')
        printMarketingCard.disabled = true
    }

    if (CURRENTSCORE >= tvMarketingCampaignPrice) {
        tvMarketingCard.classList.remove('disabled')
        tvMarketingCard.classList.add('enabled')
        tvMarketingCard.disabled = false
    } else {
        tvMarketingCard.classList.remove('enabled')
        tvMarketingCard.classList.add('disabled')
        tvMarketingCard.disabled = true
    }

    if (CURRENTSCORE >= logisticsUpgradePrice) {
        logisticsEfficencyCard.classList.remove('disabled')
        logisticsEfficencyCard.classList.add('enabled')
        logisticsEfficencyCard.disabled = false
    } else {
        logisticsEfficencyCard.classList.remove('enabled')
        logisticsEfficencyCard.classList.add('disabled')
        logisticsEfficencyCard.disabled = true
    }
}