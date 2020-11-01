let CURRENTSCORE=1e8,CPSScore=0;const propertiesPercentageIncrease=1.4,purchasesPercentageIncrease=1.2;let totalPropertiesOwned=0,totalUpgradesOwned=0;const vendingCard=document.querySelector(".vending-machine"),foodCartCard=document.querySelector(".food-cart"),foodTruckCard=document.querySelector(".food-truck"),restaurantCard=document.querySelector(".restaurant"),franchiseCard=document.querySelector(".franchise"),vendingCardPurchaseBtn=document.querySelector(".vending-machine button.buy"),foodCartCardPurchaseBtn=document.querySelector(".food-cart button.buy"),foodTruckCardPurchaseBtn=document.querySelector(".food-truck button.buy"),restaurantCardPurchaseBtn=document.querySelector(".restaurant button.buy"),franchiseCardPurchaseBtn=document.querySelector(".franchise button.buy");let vendingPrice=200,foodCartPrice=5e4,foodTruckPrice=1e5,restaurantPrice=2e6,franchisePrice=5e7,vendingOwned=0,foodCartOwned=0,foodTruckOwned=0,restaurantOwned=0,franchiseOwned=0,ingredientsPrice=2e3,trainingPrice=1e4,smMarketingCampaignPrice=25e3,printMarketingCampaignPrice=6e4,tvMarketingCampaignPrice=1e5,logisticsUpgradePrice=25e4,ingreadientsPurchased=0,trainingPurchased=0,smMarketingCampaignPurchased=0,printMarketingCampaignPurchased=0,tvMarketingCampaignPurchased=0,supplyChainLogicticsUpgraded=0;const updateWealthAfterPurchase=e=>{currentWealthNum.innerHTML=e.toLocaleString()},propertyContainerEl=document.querySelector(".properties-container"),purchasePropertyOnceFunc=e=>{"buy"===e.target.classList[0]&&(e.target.disabled||(showAllUpgrades(),removeHandler()))};propertyContainerEl.addEventListener("click",purchasePropertyOnceFunc);const removeHandler=()=>{propertyContainerEl.removeEventListener("click",purchasePropertyOnceFunc)},dollar=document.querySelector("div.dollar");dollar.addEventListener("click",(()=>{updateWealthFromDollarClick()}));const currentWealthNum=document.querySelector("span.wealth-count-num"),perSecondTotalEl=document.querySelector(".per-second-num"),updateWealthFromDollarClick=()=>{CURRENTSCORE+=1,currentWealthNum.textContent="",currentWealthNum.textContent=CURRENTSCORE.toLocaleString()},perSecondToTotal=()=>{window.setInterval((()=>{CURRENTSCORE+=CPSScore,currentWealthNum.textContent=CURRENTSCORE.toLocaleString()}),1e3)};window.setInterval((()=>{CURRENTSCORE+=CPSScore,currentWealthNum.textContent=CURRENTSCORE.toLocaleString()}),1e3),propertyContainerEl.addEventListener("click",(e=>{if("more-info"===e.target.classList[0]){const a=e.target.parentNode.parentNode.children[1];console.log(e.target.classList[1]),"hidden"===e.target.classList[1]?(e.target.classList.remove("hidden"),e.target.classList.add("shown"),e.target.innerHTML='More Info <i class="fal fa-angle-up"></i>',a.classList.add("show"),a.classList.remove("hide")):"shown"===e.target.classList[1]&&(e.target.classList.remove("shown"),e.target.classList.add("hidden"),e.target.innerHTML='\n            More Info <i class="fal fa-angle-down"></i>',a.classList.add("hide"),a.classList.remove("show"))}}));const vendingCostEl=document.querySelector(".vending-machine > .left .price"),foodCartCostEl=document.querySelector(".food-cart > .left .price"),foodTruckCostEl=document.querySelector(".food-truck > .left .price"),restaurantCostEl=document.querySelector(".restaurant > .left .price"),franchiseCostEl=document.querySelector(".franchise > .left .price"),vendingOwnedEl=document.querySelector(".vending-machine > .right .quantity"),foodCartOwnedEl=document.querySelector(".food-cart > .right .quantity"),foodTruckOwnedEl=document.querySelector(".food-truck > .right .quantity"),restaurantOwnedEl=document.querySelector(".restaurant > .right .quantity"),franchiseOwnedEl=document.querySelector(".franchise > .right .quantity"),setPropertyPrices=()=>{vendingCostEl.innerHTML=vendingPrice.toLocaleString(),foodCartCostEl.innerHTML=foodCartPrice.toLocaleString(),foodTruckCostEl.innerHTML=foodTruckPrice.toLocaleString(),restaurantCostEl.innerHTML=restaurantPrice.toLocaleString(),franchiseCostEl.innerHTML=franchisePrice.toLocaleString()},setPropertiesOwned=()=>{vendingOwnedEl.innerHTML=vendingOwned,foodCartOwnedEl.innerHTML=foodCartOwned,foodTruckOwnedEl.innerHTML=foodTruckOwned,restaurantOwnedEl.innerHTML=restaurantOwned,franchiseOwnedEl.innerHTML=franchiseOwned},setPerSecond=()=>{perSecondTotalEl.innerHTML=CPSScore.toLocaleString()};setPropertyPrices(),setPropertiesOwned(),vendingCard.disabled=!0,foodCartCard.disabled=!0,foodTruckCard.disabled=!0,restaurantCard.disabled=!0,franchiseCard.disabled=!0,vendingCard.classList.add("disabled"),foodCartCard.classList.add("disabled"),foodTruckCard.classList.add("disabled"),restaurantCard.classList.add("disabled"),franchiseCard.classList.add("disabled"),vendingCardPurchaseBtn.disabled=!0,foodCartCardPurchaseBtn.disabled=!0,foodTruckCardPurchaseBtn.disabled=!0,restaurantCardPurchaseBtn.disabled=!0,franchiseCardPurchaseBtn.disabled=!0,vendingCardPurchaseBtn.classList.add("disabled"),foodCartCardPurchaseBtn.classList.add("disabled"),foodTruckCardPurchaseBtn.classList.add("disabled"),restaurantCardPurchaseBtn.classList.add("disabled"),franchiseCardPurchaseBtn.classList.add("disabled"),window.setInterval((()=>{purchasingCheck()}),250),vendingCardPurchaseBtn.addEventListener("click",(e=>{CURRENTSCORE>=vendingPrice&&(CURRENTSCORE-=vendingPrice,updateWealthAfterPurchase(CURRENTSCORE),vendingPrice=Math.ceil(1.4*vendingPrice),setPropertyPrices(),vendingOwned+=1,setPropertiesOwned(),CPSScore+=4,setPerSecond(),totalPropertiesOwned+=1)})),foodCartCardPurchaseBtn.addEventListener("click",(e=>{CURRENTSCORE>=foodCartPrice&&(CURRENTSCORE-=foodCartPrice,updateWealthAfterPurchase(CURRENTSCORE),foodCartPrice=Math.ceil(1.4*foodCartPrice),setPropertyPrices(),foodCartOwned+=1,setPropertiesOwned(),CPSScore+=40,setPerSecond(),totalPropertiesOwned+=1,checkForPropertyPurchase())})),foodTruckCardPurchaseBtn.addEventListener("click",(e=>{CURRENTSCORE>=foodTruckPrice&&(CURRENTSCORE-=foodTruckPrice,updateWealthAfterPurchase(CURRENTSCORE),foodTruckPrice=Math.ceil(1.4*foodTruckPrice),setPropertyPrices(),foodTruckOwned+=1,setPropertiesOwned(),CPSScore+=75,setPerSecond(),totalPropertiesOwned+=1,checkForPropertyPurchase())})),restaurantCardPurchaseBtn.addEventListener("click",(e=>{CURRENTSCORE>=restaurantPrice&&(CURRENTSCORE-=restaurantPrice,updateWealthAfterPurchase(CURRENTSCORE),restaurantPrice=Math.ceil(1.4*restaurantPrice),setPropertyPrices(),restaurantOwned+=1,setPropertiesOwned(),CPSScore+=400,setPerSecond(),totalPropertiesOwned+=1,checkForPropertyPurchase())})),franchiseCardPurchaseBtn.addEventListener("click",(e=>{CURRENTSCORE>=franchisePrice&&(CURRENTSCORE-=franchisePrice,updateWealthAfterPurchase(CURRENTSCORE),franchisePrice=Math.ceil(1.4*franchisePrice),setPropertyPrices(),franchiseOwned+=1,setPropertiesOwned(),CPSScore+=1e3,setPerSecond(),totalPropertiesOwned+=1)}));const purchasingCheck=()=>{CURRENTSCORE>=vendingPrice?(vendingCard.classList.remove("disabled"),vendingCard.classList.add("enabled"),vendingCard.disabled=!1,vendingCardPurchaseBtn.classList.remove("disabled"),vendingCardPurchaseBtn.classList.add("enabled"),vendingCardPurchaseBtn.disabled=!1):(vendingCard.classList.remove("enabled"),vendingCard.classList.add("disabled"),vendingCard.disabled=!0,vendingCardPurchaseBtn.classList.remove("enabled"),vendingCardPurchaseBtn.classList.add("disabled"),vendingCardPurchaseBtn.disabled=!0),CURRENTSCORE>=foodCartPrice?(foodCartCard.classList.remove("disabled"),foodCartCard.classList.add("enabled"),foodCartCard.disabled=!1,foodCartCardPurchaseBtn.classList.remove("disabled"),foodCartCardPurchaseBtn.classList.add("enabled"),foodCartCardPurchaseBtn.disabled=!1):(foodCartCard.classList.remove("enabled"),foodCartCard.classList.add("disabled"),foodCartCard.disabled=!0,foodCartCardPurchaseBtn.classList.remove("enabled"),foodCartCardPurchaseBtn.classList.add("disabled"),foodCartCardPurchaseBtn.disabled=!0),CURRENTSCORE>=foodTruckPrice?(foodTruckCard.classList.remove("disabled"),foodTruckCard.classList.add("enabled"),foodTruckCard.disabled=!1,foodTruckCardPurchaseBtn.classList.remove("disabled"),foodTruckCardPurchaseBtn.classList.add("enabled"),foodTruckCardPurchaseBtn.disabled=!1):(foodTruckCard.classList.remove("enabled"),foodTruckCard.classList.add("disabled"),foodTruckCard.disabled=!0,foodTruckCardPurchaseBtn.classList.remove("enabled"),foodTruckCardPurchaseBtn.classList.add("disabled"),foodTruckCardPurchaseBtn.disabled=!0),CURRENTSCORE>=restaurantPrice?(restaurantCard.classList.remove("disabled"),restaurantCard.classList.add("enabled"),restaurantCard.disabled=!1,restaurantCardPurchaseBtn.classList.remove("disabled"),restaurantCardPurchaseBtn.classList.add("enabled"),restaurantCardPurchaseBtn.disabled=!1):(restaurantCard.classList.remove("enabled"),restaurantCard.classList.add("disabled"),restaurantCard.disabled=!0,restaurantCardPurchaseBtn.classList.remove("enabled"),restaurantCardPurchaseBtn.classList.add("disabled"),restaurantCardPurchaseBtn.disabled=!0),CURRENTSCORE>=franchisePrice?(franchiseCard.classList.remove("disabled"),franchiseCard.classList.add("enabled"),franchiseCard.disabled=!1,franchiseCardPurchaseBtn.classList.remove("disabled"),franchiseCardPurchaseBtn.classList.add("enabled"),franchiseCardPurchaseBtn.disabled=!1):(franchiseCard.classList.remove("enabled"),franchiseCard.classList.add("disabled"),franchiseCard.disabled=!0,franchiseCardPurchaseBtn.classList.remove("enabled"),franchiseCardPurchaseBtn.classList.add("disabled"),franchiseCardPurchaseBtn.disabled=!0)},purchasesContainerEl=document.querySelector(".purchases-container");purchasesContainerEl.addEventListener("click",(e=>{if("more-info"===e.target.classList[0]){const a=e.target.parentNode.parentNode.children[1];"hidden"===e.target.classList[1]?(e.target.classList.remove("hidden"),e.target.classList.add("shown"),e.target.innerHTML='More Info <i class="fal fa-angle-up"></i>',a.classList.add("show"),a.classList.remove("hide")):"shown"===e.target.classList[1]&&(e.target.classList.remove("shown"),e.target.classList.add("hidden"),e.target.innerHTML='\n            More Info <i class="fal fa-angle-down"></i>',a.classList.add("hide"),a.classList.remove("show"))}}));const ingredientsCostEl=document.querySelector(".ingredients .left .price"),trainingCostEl=document.querySelector(".training .left .price"),smMarketingCampaignCostEl=document.querySelector(".sm-marketing .left .price"),printMarketingCampaignCostEl=document.querySelector(".print-marketing .left .price"),tvMarketingCampaignCostEl=document.querySelector(".tv-marketing .left .price"),logisticsEfficiencyUpgradeCostEl=document.querySelector(".supply-chain-logistics .left .price"),ingredientsCard=document.querySelector(".purchase.ingredients"),trainingCard=document.querySelector(".purchase.training"),smMarketingCard=document.querySelector(".purchase.sm-marketing"),printMarketingCard=document.querySelector(".purchase.print-marketing"),tvMarketingCard=document.querySelector(".purchase.tv-marketing"),logisticsEfficencyCard=document.querySelector(".purchase.supply-chain-logistics"),ingredientsOwnedEl=document.querySelector(".purchase.ingredients div.top div.right span.quantity"),trainingsOwnedEl=document.querySelector(".purchase.training div.top div.right span.quantity"),smMarketingCampaignOwnedEl=document.querySelector(".purchase.sm-marketing div.top div.right span.quantity"),printMarketingCampaignOwnedEl=document.querySelector(".purchase.print-marketing div.top div.right span.quantity"),tvMarketingCampaignOwnedEl=document.querySelector(".purchase.tv-marketing div.top div.right span.quantity"),logisticsUpgradeOwnedEl=document.querySelector(".supply-chain-logistics div.top div.right span.quantity"),ingredientsPurchaseBtn=document.querySelector(".purchase.ingredients button.buy"),trainingPurchaseBtn=document.querySelector(".purchase.training button.buy"),smMarketingPurchaseBtn=document.querySelector(".purchase.sm-marketing button.buy"),printMarketingPurchaseBtn=document.querySelector(".purchase.print-marketing button.buy"),tvMarketingPurchaseBtn=document.querySelector(".purchase.tv-marketing button.buy"),logisticsUpgradePurchaseBtn=document.querySelector(".purchase.supply-chain-logistics button.buy"),setPurchasePrices=()=>{ingredientsCostEl.innerHTML=ingredientsPrice.toLocaleString(),trainingCostEl.innerHTML=trainingPrice.toLocaleString(),smMarketingCampaignCostEl.innerHTML=smMarketingCampaignPrice.toLocaleString(),printMarketingCampaignCostEl.innerHTML=printMarketingCampaignPrice.toLocaleString(),tvMarketingCampaignCostEl.innerHTML=tvMarketingCampaignPrice.toLocaleString(),logisticsEfficiencyUpgradeCostEl.innerHTML=logisticsUpgradePrice.toLocaleString()},setPurchasesOwned=()=>{ingredientsOwnedEl.innerHTML=ingreadientsPurchased,trainingsOwnedEl.innerHTML=trainingPurchased,smMarketingCampaignOwnedEl.innerHTML=smMarketingCampaignPurchased,printMarketingCampaignOwnedEl.innerHTML=printMarketingCampaignPurchased,tvMarketingCampaignOwnedEl.innerHTML=tvMarketingCampaignPurchased,logisticsUpgradeOwnedEl.innerHTML=supplyChainLogicticsUpgraded},purchaseContainerEl=document.querySelector(".purchase-container"),purchaseUpgradeNotice=document.createElement("p");purchaseUpgradeNotice.classList.add("upgrade-notice"),purchaseContainerEl.appendChild(purchaseUpgradeNotice),purchaseUpgradeNotice.textContent="Make a property purchase to unlock all upgrades to your business. Purchasing upgrades will increase your money made automatically per second.";const showAllUpgrades=()=>{document.querySelector(".purchases-container").classList.remove("hide"),purchaseUpgradeNotice.remove()};setPurchasePrices(),setPurchasesOwned(),ingredientsCard.disabled=!0,trainingCard.disabled=!0,smMarketingCard.disabled=!0,printMarketingCard.disabled=!0,tvMarketingCard.disabled=!0,logisticsEfficencyCard.disabled=!0,ingredientsCard.classList.add("disabled"),trainingCard.classList.add("disabled"),smMarketingCard.classList.add("disabled"),printMarketingCard.classList.add("disabled"),tvMarketingCard.classList.add("disabled"),logisticsEfficencyCard.classList.add("disabled"),ingredientsPurchaseBtn.disabled=!0,trainingPurchaseBtn.disabled=!0,smMarketingPurchaseBtn.disabled=!0,printMarketingPurchaseBtn.disabled=!0,tvMarketingPurchaseBtn.disabled=!0,logisticsUpgradePurchaseBtn.disabled=!0,ingredientsPurchaseBtn.classList.add("disabled"),trainingPurchaseBtn.classList.add("disabled"),smMarketingPurchaseBtn.classList.add("disabled"),printMarketingPurchaseBtn.classList.add("disabled"),tvMarketingPurchaseBtn.classList.add("disabled"),logisticsUpgradePurchaseBtn.classList.add("disabled"),window.setInterval((()=>{purchasingUpgradeCheck()}),250),ingredientsPurchaseBtn.addEventListener("click",(e=>{CURRENTSCORE>=ingredientsPrice&&(CURRENTSCORE-=ingredientsPrice,updateWealthAfterPurchase(CURRENTSCORE),ingredientsPrice=Math.ceil(1.2*ingredientsPrice),setPurchasePrices(),ingreadientsPurchased+=1,setPurchasesOwned(),CPSScore+=10,setPerSecond(),totalUpgradesOwned+=1)})),trainingPurchaseBtn.addEventListener("click",(e=>{console.log("training"),CURRENTSCORE>=trainingPrice&&(CURRENTSCORE-=trainingPrice,updateWealthAfterPurchase(CURRENTSCORE),trainingPrice=Math.ceil(1.2*trainingPrice),setPurchasePrices(),trainingPurchased+=1,setPurchasesOwned(),CPSScore+=50,setPerSecond(),totalUpgradesOwned+=1)})),smMarketingPurchaseBtn.addEventListener("click",(e=>{CURRENTSCORE>=smMarketingCampaignPrice&&(CURRENTSCORE-=smMarketingCampaignPrice,updateWealthAfterPurchase(CURRENTSCORE),smMarketingCampaignPrice=Math.ceil(1.2*smMarketingCampaignPrice),setPurchasePrices(),smMarketingCampaignPurchased+=1,setPurchasesOwned(),CPSScore+=72,setPerSecond(),totalUpgradesOwned+=1)})),printMarketingPurchaseBtn.addEventListener("click",(e=>{console.log("training"),CURRENTSCORE>=printMarketingCampaignPrice&&(CURRENTSCORE-=printMarketingCampaignPrice,updateWealthAfterPurchase(CURRENTSCORE),printMarketingCampaignPrice=Math.ceil(1.2*printMarketingCampaignPrice),setPurchasePrices(),printMarketingCampaignPurchased+=1,setPurchasesOwned(),CPSScore+=95,setPerSecond(),totalUpgradesOwned+=1)})),tvMarketingPurchaseBtn.addEventListener("click",(e=>{console.log("training"),CURRENTSCORE>=tvMarketingCampaignPrice&&(CURRENTSCORE-=tvMarketingCampaignPrice,updateWealthAfterPurchase(CURRENTSCORE),tvMarketingCampaignPrice=Math.ceil(1.2*tvMarketingCampaignPrice),setPurchasePrices(),tvMarketingCampaignPurchased+=1,setPurchasesOwned(),CPSScore+=117,setPerSecond(),totalUpgradesOwned+=1)})),logisticsUpgradePurchaseBtn.addEventListener("click",(e=>{console.log("training"),CURRENTSCORE>=logisticsUpgradePrice&&(CURRENTSCORE-=logisticsUpgradePrice,updateWealthAfterPurchase(CURRENTSCORE),logisticsUpgradePrice=Math.ceil(1.2*logisticsUpgradePrice),setPurchasePrices(),supplyChainLogicticsUpgraded+=1,setPurchasesOwned(),CPSScore+=155,setPerSecond(),totalUpgradesOwned+=1)}));const purchasingUpgradeCheck=()=>{CURRENTSCORE>=ingredientsPrice?(ingredientsCard.classList.remove("disabled"),ingredientsCard.classList.add("enabled"),ingredientsCard.disabled=!1,ingredientsPurchaseBtn.classList.remove("disabled"),ingredientsPurchaseBtn.classList.add("enabled"),ingredientsPurchaseBtn.disabled=!1):(ingredientsCard.classList.remove("enabled"),ingredientsCard.classList.add("disabled"),ingredientsCard.disabled=!0,ingredientsPurchaseBtn.classList.remove("enabled"),ingredientsPurchaseBtn.classList.add("disabled"),ingredientsPurchaseBtn.disabled=!0),CURRENTSCORE>=trainingPrice?(trainingCard.classList.remove("disabled"),trainingCard.classList.add("enabled"),trainingCard.disabled=!1,trainingPurchaseBtn.classList.remove("disabled"),trainingPurchaseBtn.classList.add("enabled"),trainingPurchaseBtn.disabled=!1):(trainingCard.classList.remove("enabled"),trainingCard.classList.add("disabled"),trainingCard.disabled=!0,trainingPurchaseBtn.classList.remove("enabled"),trainingPurchaseBtn.classList.add("disabled"),trainingPurchaseBtn.disabled=!0),CURRENTSCORE>=smMarketingCampaignPrice?(smMarketingCard.classList.remove("disabled"),smMarketingCard.classList.add("enabled"),smMarketingCard.disabled=!1,smMarketingPurchaseBtn.classList.remove("disabled"),smMarketingPurchaseBtn.classList.add("enabled"),smMarketingPurchaseBtn.disabled=!1):(smMarketingCard.classList.remove("enabled"),smMarketingCard.classList.add("disabled"),smMarketingCard.disabled=!0,smMarketingPurchaseBtn.classList.remove("enabled"),smMarketingPurchaseBtn.classList.add("disabled"),smMarketingPurchaseBtn.disabled=!0),CURRENTSCORE>=printMarketingCampaignPrice?(printMarketingCard.classList.remove("disabled"),printMarketingCard.classList.add("enabled"),printMarketingCard.disabled=!1,printMarketingPurchaseBtn.classList.remove("disabled"),printMarketingPurchaseBtn.classList.add("enabled"),printMarketingPurchaseBtn.disabled=!1):(printMarketingCard.classList.remove("enabled"),printMarketingCard.classList.add("disabled"),printMarketingCard.disabled=!0,printMarketingPurchaseBtn.classList.remove("enabled"),printMarketingPurchaseBtn.classList.add("disabled"),printMarketingPurchaseBtn.disabled=!0),CURRENTSCORE>=tvMarketingCampaignPrice?(tvMarketingCard.classList.remove("disabled"),tvMarketingCard.classList.add("enabled"),tvMarketingCard.disabled=!1,tvMarketingPurchaseBtn.classList.remove("disabled"),tvMarketingPurchaseBtn.classList.add("enabled"),tvMarketingPurchaseBtn.disabled=!1):(tvMarketingCard.classList.remove("enabled"),tvMarketingCard.classList.add("disabled"),tvMarketingCard.disabled=!0,tvMarketingPurchaseBtn.classList.remove("enabled"),tvMarketingPurchaseBtn.classList.add("disabled"),tvMarketingPurchaseBtn.disabled=!0),CURRENTSCORE>=logisticsUpgradePrice?(logisticsEfficencyCard.classList.remove("disabled"),logisticsEfficencyCard.classList.add("enabled"),logisticsEfficencyCard.disabled=!1,logisticsUpgradePurchaseBtn.classList.remove("disabled"),logisticsUpgradePurchaseBtn.classList.add("enabled"),logisticsUpgradePurchaseBtn.disabled=!1):(logisticsEfficencyCard.classList.remove("enabled"),logisticsEfficencyCard.classList.add("disabled"),logisticsEfficencyCard.disabled=!0,logisticsUpgradePurchaseBtn.classList.remove("enabled"),logisticsUpgradePurchaseBtn.classList.add("disabled"),logisticsUpgradePurchaseBtn.disabled=!0)};