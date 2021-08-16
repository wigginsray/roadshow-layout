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
    var icon = document.querySelector('.icon');
    var navMenu = document.querySelector('.nav-menu');

    icon.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function toggleDocumentView(e){
    e = e || window.event;
    var target = e.target || e.srcElement;

    if(target.type != 'button'){
        target = e.path[2];
    }
    
    var newTarget = target.querySelector('.documents-icon');
    // console.log(newTarget);
    newTarget.classList.toggle("active");
    
}

function toggleTeamModal(e){
    // use event to grab ID of targetted overlay, then find corresponding modal
    e = e || window.event;
    var target = e.target || e.srcElement;
    var idArr = target.id.split('');
    var idNumber = idArr.slice(-1)[0];

    var modalIdString = `modal-${idNumber}`;
    var modal = document.getElementById(modalIdString);

    console.log(target)
    
    // Get the <span> element that closes the modal (again, using event to match)
    var closeSpanIdString = `close-span-${idNumber}`;
    var span = document.getElementById(closeSpanIdString);

    // change modal display from 'display: none'
    modal.style.display = "block";
    
    // When the user clicks on <span> (x), change display back to 'none'--build this out for clicking outside container and pressing ESC
    span.onclick = function() {
      modal.style.display = "none";
    }

    // var container = document.querySelector('.modal-container');
    
    // When the user clicks anywhere outside of the modal, close it
    // window.onclick = function(event) {
    //   if (event.target == container) {
    //     modal.style.display = "none";
    //   }
    // }
}


// console.log(timerDisplay)
// timer(155);