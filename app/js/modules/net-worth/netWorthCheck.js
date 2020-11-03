// called in upgradeBehaviorOnLoad.js
const netWorthCheck = () => {
    if (CURRENTSCORE >= bezosNwNum) {
        bezosNwEl.classList.remove("less")
        bezosNwEl.classList.add("more")
    } else if (CURRENTSCORE < bezosNwNum) {
        bezosNwEl.classList.remove("more")
        bezosNwEl.classList.add("less")
    }
    
    if (CURRENTSCORE >= arnaultNwNum) {
        arnaultNwEl.classList.remove("less")
        arnaultNwEl.classList.add("more")
    } else if (CURRENTSCORE < arnaultNwNum) {
        arnaultNwEl.classList.remove("more")
        arnaultNwEl.classList.add("less")
    }
    
    if (CURRENTSCORE >= gatesNwNum) {
        gatesNwEl.classList.remove("less")
        gatesNwEl.classList.add("more")
    } else if (CURRENTSCORE < gatesNwNum) {
        gatesNwEl.classList.remove("more")
        gatesNwEl.classList.add("less")
    }
    
    if (CURRENTSCORE >= zuckerbergNwNum) {
        zuckerbergNwEl.classList.remove("less")
        zuckerbergNwEl.classList.add("more")
    } else if (CURRENTSCORE < zuckerbergNwNum) {
        zuckerbergNwEl.classList.remove("more")
        zuckerbergNwEl.classList.add("less")
    }
    
    if (CURRENTSCORE >= muskNwNum) {
        muskNwEl.classList.remove("less")
        muskNwEl.classList.add("more")
    } else if (CURRENTSCORE < muskNwNum) {
        muskNwEl.classList.remove("more")
        muskNwEl.classList.add("less")
    }
    
    if (CURRENTSCORE >= ambaniNwNum) {
        ambaniNwEl.classList.remove("less")
        ambaniNwEl.classList.add("more")
    } else if (CURRENTSCORE < ambaniNwNum) {
        ambaniNwEl.classList.remove("more")
        ambaniNwEl.classList.add("less")
    }
    
    if (CURRENTSCORE >= buffettNwNum) {
        buffettNwEl.classList.remove("less")
        buffettNwEl.classList.add("more")
    } else if (CURRENTSCORE < buffettNwNum) {
        buffettNwEl.classList.remove("more")
        buffettNwEl.classList.add("less")
    }
    
    if (CURRENTSCORE >= ellisonNwNum) {
        ellisonNwEl.classList.remove("less")
        ellisonNwEl.classList.add("more")
    } else if (CURRENTSCORE < ellisonNwNum) {
        ellisonNwEl.classList.remove("more")
        ellisonNwEl.classList.add("less")
    }
    
    if (CURRENTSCORE >= ballmerNwNum) {
        ballmerNwEl.classList.remove("less")
        ballmerNwEl.classList.add("more")
    } else if (CURRENTSCORE < ballmerNwNum) {
        ballmerNwEl.classList.remove("more")
        ballmerNwEl.classList.add("less")
    }
    
    if (CURRENTSCORE >= pageNwNum) {
        pageNwEl.classList.remove("less")
        pageNwEl.classList.add("more")
    } else if (CURRENTSCORE < pageNwNum) {
        pageNwEl.classList.remove("more")
        pageNwEl.classList.add("less")
    }
    
    
}