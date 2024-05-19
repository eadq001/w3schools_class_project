const tabsList = document.querySelectorAll('.links');

const rightArrow = Document.querySelector('.right-arrow');


rightArrow.addEventListener("click", () => {
    tabsList.scrollLeft += 1400;
})