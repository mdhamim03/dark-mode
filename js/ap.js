let toogleBtn = document.querySelector('.darkModeBtn')
let isDarkMode = false
let heading = document.querySelector('.container h2')

toogleBtn.addEventListener('click', hamim)
function hamim(){
    let body = document.querySelector('body')
    body.classList.toggle('darkmod')
    isDarkMode = !isDarkMode
    if(isDarkMode == true){
        heading.innerHTML = 'Dark Mode'
    }else{
        heading.innerHTML = 'Light Mode'
    }

    // console.log(isDarkMode)
}