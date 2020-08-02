const body = document.getElementById('app-container');
const headerTitle = document.getElementById('header-title');
const imgBackgroundHome = document.getElementById('img-bg-home');
const navbar = document.getElementById('navbar');
const root = document.documentElement;

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

    // console.log(root.style.getProperty('--text-black-color'));

    root.style.setProperty('--text-default-color-inuse', '--text-white-color');

    root.style.setProperty('--nav-links-color-inuse', '#000000');

    localStorage.setItem('current-theme', 'dark');
   
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
}

console.log(localStorage.getItem('current-theme'));

window.onload = function() {
    if('dark' !== localStorage.getItem('current-theme')){
        switchToLightMode();
    }else{
        switchToDarkMode();
    }
  };

document.getElementById('switch-theme-btn').addEventListener('click',()=>{
    // localStorage.setItem('current-theme', 'light');

    switchThemes();
});

