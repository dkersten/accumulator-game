const currentWealthNum = document.querySelector('span.wealth-count-num')
const perSecondTotalEl = document.querySelector('.per-second-num')

const updateWealthFromDollarClick = () => {
    CURRENTSCORE += 1

    currentWealthNum.textContent = ""
    currentWealthNum.textContent = CURRENTSCORE
}

// function to add per second score to total score
const perSecondToTotal = () => {
    window.setInterval(() => {
        CURRENTSCORE += CPSScore
        currentWealthNum.textContent = CURRENTSCORE
    }, 1000)
}
perSecondToTotal()