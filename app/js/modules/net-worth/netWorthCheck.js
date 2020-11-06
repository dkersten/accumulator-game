// called in upgradeBehaviorOnLoad.js
const netWorthCheck = () => {
    if (totalNetWorth >= bezosNwNum) {
        bezosNwEl.classList.remove("less")
        bezosNwEl.classList.add("more")
    } else if (totalNetWorth < bezosNwNum) {
        bezosNwEl.classList.remove("more")
        bezosNwEl.classList.add("less")
    }
    
    if (totalNetWorth >= arnaultNwNum) {
        arnaultNwEl.classList.remove("less")
        arnaultNwEl.classList.add("more")
    } else if (totalNetWorth < arnaultNwNum) {
        arnaultNwEl.classList.remove("more")
        arnaultNwEl.classList.add("less")
    }
    
    if (totalNetWorth >= gatesNwNum) {
        gatesNwEl.classList.remove("less")
        gatesNwEl.classList.add("more")
    } else if (totalNetWorth < gatesNwNum) {
        gatesNwEl.classList.remove("more")
        gatesNwEl.classList.add("less")
    }
    
    if (totalNetWorth >= zuckerbergNwNum) {
        zuckerbergNwEl.classList.remove("less")
        zuckerbergNwEl.classList.add("more")
    } else if (totalNetWorth < zuckerbergNwNum) {
        zuckerbergNwEl.classList.remove("more")
        zuckerbergNwEl.classList.add("less")
    }
    
    if (totalNetWorth >= muskNwNum) {
        muskNwEl.classList.remove("less")
        muskNwEl.classList.add("more")
    } else if (totalNetWorth < muskNwNum) {
        muskNwEl.classList.remove("more")
        muskNwEl.classList.add("less")
    }
    
    if (totalNetWorth >= ambaniNwNum) {
        ambaniNwEl.classList.remove("less")
        ambaniNwEl.classList.add("more")
    } else if (totalNetWorth < ambaniNwNum) {
        ambaniNwEl.classList.remove("more")
        ambaniNwEl.classList.add("less")
    }
    
    if (totalNetWorth >= buffettNwNum) {
        buffettNwEl.classList.remove("less")
        buffettNwEl.classList.add("more")
    } else if (totalNetWorth < buffettNwNum) {
        buffettNwEl.classList.remove("more")
        buffettNwEl.classList.add("less")
    }
    
    if (totalNetWorth >= ellisonNwNum) {
        ellisonNwEl.classList.remove("less")
        ellisonNwEl.classList.add("more")
    } else if (totalNetWorth < ellisonNwNum) {
        ellisonNwEl.classList.remove("more")
        ellisonNwEl.classList.add("less")
    }
    
    if (totalNetWorth >= ballmerNwNum) {
        ballmerNwEl.classList.remove("less")
        ballmerNwEl.classList.add("more")
    } else if (totalNetWorth < ballmerNwNum) {
        ballmerNwEl.classList.remove("more")
        ballmerNwEl.classList.add("less")
    }
    
    if (totalNetWorth >= pageNwNum) {
        console.log("yes")
        pageNwEl.classList.remove("less")
        pageNwEl.classList.add("more")
    } else if (totalNetWorth < pageNwNum) {
        pageNwEl.classList.remove("more")
        pageNwEl.classList.add("less")
    }
    
    
}