
// puzzle swiper
var swiper = new Swiper(".mySwiper", {

  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  
    },
    loop: true,
    
    },
  );

// question
var acc = document.getElementsByClassName("question");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}


// swiper

var swiper = new Swiper(".my-swiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  
  },
  slidesPerView: 2,
  breakpoints: {
  
    450: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },
loop: true,
    spaceBetween: 24,
});

// burger menu
// const toggleActive = (el) =>
//   document.getElementById(el).classList.toggle("active");

const body = document.querySelector("body");
const MobileNavBtnEl = document.querySelector(".menu-button-container");

const headerEl = document.querySelector(".main-nav");
const headerlang = document.querySelector(".main-nav--right_lang");


MobileNavBtnEl.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open"); 
  // body.classList.toggle("blur");
  // body.classList.toggle("hidden-overflow");

  document.body.classList.toggle('nav-open');
});
// let headerBox = document.querySelector(".header");
// let header = document.querySelector(".header-box");


//event calendar

document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    initialDate: '2022-12-07',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    events: [
      {
        title: 'All Day Event',
        start: '2022-12-01'
      },
      {
        title: 'Long Event',
        start: '2022-12-07',
        end: '2022-12-10'
      },
      {
        groupId: '999',
        title: 'Repeating Event',
        start: '2022-12-09T16:00:00'
      },
      {
        groupId: '999',
        title: 'Repeating Event',
        start: '2022-12-16T16:00:00'
      },
      {
        title: 'Conference',
        start: '2022-12-11',
        end: '2022-12-13'
      },
      {
        title: 'Meeting',
        start: '2022-12-12T10:30:00',
        end: '2022-12-12T12:30:00'
      },
      {
        title: 'Lunch',
        start: '2022-12-12T12:00:00'
      },
      {
        title: 'Meeting',
        start: '2022-12-12T14:30:00'
      },
      {
        title: 'Birthday Party',
        start: '2022-12-13T07:00:00'
      },
      {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: '2022-12-28'
      }
    ]
  });

  calendar.render();
});




