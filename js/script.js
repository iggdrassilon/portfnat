const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElement = document.querySelectorAll('#closeMenu');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

function closeMenu() {
    menu.classList.remove('active');
}

closeElement.forEach(item => {
    item.addEventListener('click', closeMenu);
});

document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && menu.classList.contains('active')) {
        closeMenu();
    }
});


const percents = document.querySelectorAll('.persents__title-persent'),
    scale = document.querySelectorAll('.persents__scale span');

percents.forEach( (item, i) => {
    scale[i].style.width = item.innerHTML;
});

