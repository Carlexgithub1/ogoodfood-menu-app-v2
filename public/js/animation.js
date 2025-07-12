export function handleFlipPage(event) {
    const selector = event.detail.pageSelector;
    const page = document.querySelector(selector);
    const zIndex = Number(page.style.zIndex) * -1;

    console.log("Old z index: ", page.style.zIndex);
    console.log("New z index: ", zIndex);

    page.style.zIndex = zIndex;
    setTimeout(() => {
        page.classList.add("flipped");
    }, 100);
}

export function handleClosePage(event) {
    const selector = event.detail.pageSelector;
    const page = document.querySelector(selector);
    const zIndex = Number(page.style.zIndex) * -1;

    console.log("Old z index: ", page.style.zIndex);
    console.log("New z index: ", zIndex);

    page.classList.remove("flipped");
    setTimeout(() => {
        page.style.zIndex = zIndex;
    }, 100);
}