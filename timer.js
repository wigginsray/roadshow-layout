let countdown;
const timerDisplay = document.querySelector('.display-time-left');
console.log(timerDisplay);

function timer(seconds){
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        // check if we should stop it
        if(secondsLeft < 0){
            clearInterval(countdown);
            return;
        }
        displayTimeLeft(secondsLeft);
    }, 1000)
}

function displayTimeLeft(seconds){
    const minutes = Math.floor(seconds / 60);
    // const hours = Math.floor(minutes / 60);
    // const days = Math.floor(hours / 24);

    const remainderSeconds = seconds % 60;
    const display = `${minutes} Minutes : ${remainderSeconds} Seconds`;
    timerDisplay.textContent = display;
}


function openNav(){
    // var links = document.querySelector('.links');
    // if(links.style.display === 'block'){
    //     links.style.display = 'none';
    // } else {
    //     links.style.display = 'block';
    // }
    var icon = document.querySelector('.icon');
    var navMenu = document.querySelector('.nav-menu');
    icon.classList.toggle("active");
    navMenu.classList.toggle("active");

}
// console.log(timerDisplay)
// timer(155);