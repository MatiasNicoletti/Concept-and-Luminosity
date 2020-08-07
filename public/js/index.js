const body = document.getElementById('app-container');
const headerTitle = document.getElementById('header-title');
const imgBackgroundHome = document.getElementById('img-bg-home');
const navbar = document.getElementById('navbar');
const root = document.documentElement;
const themeToggle = document.getElementById('switch-theme-btn');
const arrow = document.getElementById('home_arrow');
const artist = document.getElementById('artist');
const productGrid = document.getElementById('gallery');
const product = document.getElementById('product');

const switchThemes = ()=>{
    if('dark' === localStorage.getItem('current-theme')){
        switchToLightMode();
    }else{
        switchToDarkMode();
    }

}

const switchToDarkMode = ()=>{
    const whiteColor = getComputedStyle(document.documentElement)
                      .getPropertyValue('--text-white-color');
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');

    body.style.color = whiteColor;
    headerTitle.style.color = whiteColor;
    navbar.style.backgroundColor = getComputedStyle(document.documentElement)
    .getPropertyValue('--nav-color-white');

    imgBackgroundHome.src='/./img/woman-doing-acrobat-3307006.jpg';


    root.style.setProperty('--text-default-color-inuse', '--text-white-color');

    root.style.setProperty('--nav-links-color-inuse', '#000000');

    localStorage.setItem('current-theme', 'dark');

    themeToggle.style.backgroundColor = ('#000000');

    themeToggle.childNodes[0].src = '/./img/svg/moon.svg';

    arrow.src = '/./img/svg/arrow-white.svg';
    artist.style.backgroundColor = '#242424 ';
    productGrid.style.backgroundColor = '#131313';
}

const switchToLightMode = ()=>{
    const blackColor = getComputedStyle(document.documentElement)
                    .getPropertyValue('--text-black-color');


    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
    body.style.color = blackColor;


    headerTitle.style.color= blackColor;

    root.style.setProperty('--nav-links-color-inuse', '#ffffff');

    imgBackgroundHome.src='/./img/woman-wearing-white-dress-bending-down-2250276.jpg';

    root.style.setProperty('--text-default-color-inuse', '--text-black-color');

    navbar.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--nav-color-grey');
    

    localStorage.setItem('current-theme', 'light');
    themeToggle.style.backgroundColor = ('#eeeeee');
    
    themeToggle.childNodes[0].src = '/./img/svg/sun.svg';
    arrow.src = '/./img/svg/arrow.svg';
    artist.style.backgroundColor = '#cecece';
    productGrid.style.backgroundColor = '#eeeeee';
}


window.onload = function() {
    if('dark' !== localStorage.getItem('current-theme')){
        switchToLightMode();
    }else{
        switchToDarkMode();
    }
  };

  themeToggle.addEventListener('click',()=>{
    // localStorage.setItem('current-theme', 'light');
    switchThemes();
});

