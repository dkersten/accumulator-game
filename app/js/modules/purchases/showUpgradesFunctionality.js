const purchaseContainerEl = document.querySelector('.purchase-container')
const purchaseUpgradeNotice = document.createElement('p')
purchaseUpgradeNotice.classList.add('upgrade-notice')
purchaseContainerEl.appendChild(purchaseUpgradeNotice)
purchaseUpgradeNotice.textContent = "Make a property purchase to unlock all upgrades to your business. Purchasing upgrades will increase your money made automatically per second."

// show all properties (only after a property has been purchased)
const showAllUpgrades = () => {
    const upgradeContainerEl = document.querySelector('.purchases-container')
    upgradeContainerEl.classList.remove('hide')
    purchaseUpgradeNotice.remove()
}