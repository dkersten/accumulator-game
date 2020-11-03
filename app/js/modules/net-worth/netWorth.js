// get DOM elements for net worth total
const bezosNwEl = document.querySelector('.bezos span.net-worth')
const arnaultNwEl = document.querySelector('.arnault span.net-worth')
const gatesNwEl = document.querySelector('.gates span.net-worth')
const zuckerbergNwEl = document.querySelector('.zuckerberg span.net-worth')
const muskNwEl = document.querySelector('.musk span.net-worth')
const ambaniNwEl = document.querySelector('.ambani span.net-worth')
const buffettNwEl = document.querySelector('.buffett span.net-worth')
const ellisonNwEl = document.querySelector('.ellison span.net-worth')
const ballmerNwEl = document.querySelector('.ballmer span.net-worth')
const pageNwEl = document.querySelector('.page span.net-worth')

// const 10 richest people's net worth
const bezosNwNum = 190900000000
const arnaultNwNum = 114700000000
const gatesNwNum = 113600000000
const zuckerbergNwNum = 103800000000
const muskNwNum = 91700000000
const ambaniNwNum = 77500000000
const buffettNwNum = 76600000000
const ellisonNwNum = 74800000000
const ballmerNwNum = 70700000000
const pageNwNum = 70300000000
                  
// function to format numbers to be more readable
const formatNumbers = (num) => {
    const nwNum = num.toString()
    if (nwNum.length >= 7 && nwNum.length <= 9) {
        if (nwNum.length === 7) {
            // first num, then 1 more
            let numArr = nwNum.split('')
            numArr = numArr.splice(0,2)
            numArr.splice(1, 0, ".")
            let numStr = numArr.join('')
            return `$${numStr}M`

        } else if (nwNum.length === 8) {
            // first 2 nums, then 1 more
            let numArr = nwNum.split('')
            numArr = numArr.splice(0,3)
            numArr.splice(2, 0, ".")
            let numStr = numArr.join('')
            return `$${numStr}M`

        } else if (nwNum.length === 9) {
            // first 3 nums, then 1 more
            let numArr = nwNum.split('')
            numArr = numArr.splice(0,4)
            numArr.splice(3, 0, ".")
            let numStr = numArr.join('')
            return `$${numStr}M`

        }

    } else if (nwNum.length >= 10 && nwNum.length <= 12) {
        if (nwNum.length === 10) {
            // first num, then 1 more
            let numArr = nwNum.split('')
            numArr = numArr.splice(0,2)
            numArr.splice(1, 0, ".")
            let numStr = numArr.join('')
            return `$${numStr}B`

        } else if (nwNum.length === 11) {
            // first 2 nums, then 1 more
            let numArr = nwNum.split('')
            numArr = numArr.splice(0,3)
            numArr.splice(2, 0, ".")
            let numStr = numArr.join('')
            return `$${numStr}B`

        } else if (nwNum.length === 12) {
            // first 3 nums, then 1 more
            let numArr = nwNum.split('')
            numArr = numArr.splice(0,4)
            numArr.splice(3, 0, ".")
            let numStr = numArr.join('')
            return `$${numStr}B`

        }
    }
}

// Populate people's nw on the DOM on load
bezosNwEl.innerHTML = formatNumbers(bezosNwNum)
arnaultNwEl.innerHTML = formatNumbers(arnaultNwNum)
gatesNwEl.innerHTML = formatNumbers(gatesNwNum)
zuckerbergNwEl.innerHTML = formatNumbers(zuckerbergNwNum)
muskNwEl.innerHTML = formatNumbers(muskNwNum)
ambaniNwEl.innerHTML = formatNumbers(ambaniNwNum)
buffettNwEl.innerHTML = formatNumbers(buffettNwNum)
ellisonNwEl.innerHTML = formatNumbers(ellisonNwNum)
ballmerNwEl.innerHTML = formatNumbers(ballmerNwNum)
pageNwEl.innerHTML = formatNumbers(pageNwNum)
