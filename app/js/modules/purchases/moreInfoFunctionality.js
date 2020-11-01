const purchasesContainerEl = document.querySelector('.purchases-container')

purchasesContainerEl.addEventListener('click', (e) => {

    if (e.target.classList[0] === 'more-info') {
        const cardBottomSection = e.target.parentNode.parentNode
        const moreInfoSection = cardBottomSection.children[1]

        if (e.target.classList[1] === "hidden") {
            e.target.classList.remove("hidden")
            e.target.classList.add("shown")
            e.target.innerHTML = `More Info <i class="fal fa-angle-up"></i>`

            moreInfoSection.classList.add("show")
            moreInfoSection.classList.remove("hide")

        } else if (e.target.classList[1] === "shown") {
            e.target.classList.remove("shown")
            e.target.classList.add("hidden")
            e.target.innerHTML = `
            More Info <i class="fal fa-angle-down"></i>`

            moreInfoSection.classList.add("hide")
            moreInfoSection.classList.remove("show")
        }
    }
})