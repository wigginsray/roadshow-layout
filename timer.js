// let countdown;
// const timerDisplay = document.querySelector('.display-time-left');
// console.log(timerDisplay);

// function timer(seconds){
//     const now = Date.now();
//     const then = now + seconds * 1000;
//     displayTimeLeft(seconds);

//     countdown = setInterval(() => {
//         const secondsLeft = Math.round((then - Date.now()) / 1000);
//         // check if we should stop it
//         if(secondsLeft < 0){
//             clearInterval(countdown);
//             return;
//         }
//         displayTimeLeft(secondsLeft);
//     }, 1000)
// }

// function displayTimeLeft(seconds){
//     const minutes = Math.floor(seconds / 60);
//     // const hours = Math.floor(minutes / 60);
//     // const days = Math.floor(hours / 24);
//     const remainderSeconds = seconds % 60;
//     const display = `${minutes} Minutes : ${remainderSeconds} Seconds`;
//     timerDisplay.textContent = display;
// }


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

    if(target.classList[0] != 'transparent-image'){
        target = e.path[1].children[0];
    }

    var idArr = target.id.split('-');
    var idNumber = idArr.slice(-1)[0];

    var modalIdString = `modal-${idNumber}`;
    var modal = document.getElementById(modalIdString);
    
    // Get the <span> element that closes the modal (again, using event to match)
    var closeSpanIdString = `close-span-${idNumber}`;
    var span = document.getElementById(closeSpanIdString);

    // change modal display from 'display: none'
    modal.style.display = "block";

    var teamTitleSection = document.querySelector('.team-section');
    var teamContainer = document.querySelector('.team-container');
    var filterList = document.querySelector('.filter-list');

    var cards = document.querySelectorAll('.card-image');
    var infoboxes = document.querySelectorAll('.additional-info');

    teamTitleSection.classList.toggle('obscure');
    // teamContainer.classList.toggle('obscure');
    filterList.classList.toggle('obscure');

    cards.forEach(card => {
        card.classList.toggle('obscure');
    })

    infoboxes.forEach(box => {
        box.classList.toggle('obscure');
    })
    

    // When the user clicks on <span> (x), change display back to 'none'--build this out for clicking outside container and pressing ESC
    span.onclick = function() {
        modal.style.display = "none";
        teamTitleSection.classList.toggle('obscure');
        filterList.classList.toggle('obscure');
        cards.forEach(card => {
            card.classList.toggle('obscure');
        })
        infoboxes.forEach(box => {
            box.classList.toggle('obscure');
        })
        // teamContainer.classList.toggle('obscure');
    }

    // var container = document.querySelector('.modal-container');
    
    // When the user clicks anywhere outside of the modal, close it
    // window.onclick = function(event) {
    //   if (event.target == container) {
    //     modal.style.display = "none";
    //   }
    // }
}

function getTimeRemaining(endtime){
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000*60*60)) % 24);
    const days = Math.floor(total / (1000*60*60*24));

    // console.log(days);

    return {
        total,
        days,
        hours,
        minutes,
        seconds
    }
}

function initializeClock(id, endtime) {
    const clock = document.getElementById(id);
    // console.log(clock);
    
    function updateClock(){
        const t = getTimeRemaining(endtime);
        clock.innerHTML = 'days: ' + t.days + '<br>' +
                          'hours: '+ t.hours + '<br>' +
                          'minutes: ' + t.minutes + '<br>' +
                          'seconds: ' + t.seconds;
        if (t.total <= 0) {
          clearInterval(timeinterval);
        }
      }

      updateClock(); //run once to avoid delay
      let timeinterval = setInterval(updateClock, 1000);
  }



// console.log(timerDisplay)
let endDate = 'August 20 2021 23:59:59 GMT+0200';

initializeClock('clock', endDate);