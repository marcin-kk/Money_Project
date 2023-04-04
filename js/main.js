const navMobile = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.hamburger');
const footerYear = document.querySelector('.footer__year');



const handleNav = () => {
    navBtn.classList.toggle('is-active'); //for burger animation
    navMobile.classList.toggle('nav-mobile--active'); //for nav to show and hide - translateX from -102% to 0

}

navBtn.addEventListener('click', handleNav)


const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}
handleCurrentYear();