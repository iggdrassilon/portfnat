const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElement = document.querySelector('.menu__close'),
    closeElementThree = document.querySelector('.menu__SwitchPage'),
    closeElementTwo = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElement.addEventListener('click', () => {
    menu.classList.remove('active');
});

closeElementTwo.addEventListener('click', () => {
    menu.classList.remove('active');
});

closeElementThree.addEventListener('click', () => {
    menu.classList.remove('active');
});


const percents = document.querySelectorAll('.persents__title-persent'),
    scale = document.querySelectorAll('.persents__scale span');

percents.forEach( (item, i) => {
    scale[i].style.width = item.innerHTML;
});