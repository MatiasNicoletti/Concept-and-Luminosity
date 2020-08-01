
const switchThemes = ()=>{
    if('dark' === localStorage.getItem('current-theme')){
        switchToLightMode();
    }else{
        switchToDarkMode();
    }

}

const switchToDarkMode = ()=>{
    const body = document.getElementById('app-container');
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    localStorage.setItem('current-theme', 'dark');
   
}

const switchToLightMode = ()=>{
    const body = document.getElementById('app-container');
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
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

