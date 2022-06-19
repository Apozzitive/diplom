'use strict'

const menuLinks = document.querySelectorAll('.content__menu-link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}

/* const searchBtn = document.querySelector('.main__search-btn');
const divBtn = document.querySelector('.polina');
divBtn.addEventListener('click', function (e) {
    window.location.href = "http://localhost:3500/search.html"
    console.log('321');
})
searchBtn.addEventListener('click', function (e) {
    console.log('click po btn');
});
 */