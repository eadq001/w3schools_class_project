const activePage = window.location.pathname;
console.log(activePage);
const navLinks = document.querySelectorAll('.bottom_nav a').forEach(link => {
    if (link.href.includes(`${activePage}`)) {
        link.classList.add('active')
    }
}
)