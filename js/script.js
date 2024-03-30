/*
const scrollEffect = () => {
    const navbar = document.querySelector('navbar');
    navbar.classList.toggle("sticky", window.scrollY > 0);
}
*/
const userScroll() {

    const navbar = document.querySelector('navbar');
    window.addEventListener('scroll', () => {
        if(window.scrollY)
        {
            navbar.classList.add('bg-dark');
        }
        else
        {
            navbar.classList.remove('bg-dark');
        }
});

}

document.addEventListener('DOMContentLoaded', userScroll);