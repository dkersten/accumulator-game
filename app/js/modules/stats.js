const currentWealthNum = document.querySelector('span.wealth-count-num')

const updateWealthFromDollarClick = () => {
    CURRENTSCORE += 1

    currentWealthNum.textContent = ""
    currentWealthNum.textContent = CURRENTSCORE
}