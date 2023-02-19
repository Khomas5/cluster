var calendar = new Calendar(calendarEl, {
  initialDate: '2014-11-10',
  initialView: 'timeGridWeek',
  events: [
    {
      start: '2014-11-10T10:00:00',
      end: '2014-11-10T16:00:00',
      display: 'background'
    }
  ]
});

document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth'
  });
  calendar.render();
});

