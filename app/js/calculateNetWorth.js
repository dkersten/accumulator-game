// called every 250ms in purchases/upgradeBehaviorOnLoad.js
const setTotalNetWorth = () => {
    totalNetWorth = totalPurchaseWorth + totalRWPurchaseWorth + CURRENTSCORE

    netWorthEl.innerHTML = totalNetWorth.toLocaleString()
}