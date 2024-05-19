const leftArrow = document.querySelector(".left-arrow")
const rightArrow = document.querySelector(".right-arrow");

leftArrow.addEventListener("click", () => {
    document.querySelector(".links").scrollLeft -= 100;
})

rightArrow.addEventListener("click",() => {
    document.querySelector(".links").scrollLeft += 100;
})