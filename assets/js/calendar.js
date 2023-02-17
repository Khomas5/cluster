function createCalendar(year, month) {
    // Create a new Date object for the given year and month
    const date = new Date(year, month - 1);
  
    // Get the number of days in the given month
    const numDays = new Date(year, month, 0).getDate();
  
    // Get the day of the week of the first day in the given month
    const firstDay = date.getDay();
  
    // Create an array to hold the calendar days
    const days = [];
  
    // Add empty cells to the beginning of the array to align the first day
    for (let i = 0; i < firstDay; i++) {
      days.push("");
    }
  
    // Add the days of the month to the array
    for (let i = 1; i <= numDays; i++) {
      days.push(i);
    }
  
    // Add empty cells to the end of the array to complete the calendar grid
    while (days.length % 7 !== 0) {
      days.push("");
    }
  
    // Create a table element to hold the calendar grid
    const table = document.createElement("table");
  
    // Create a header row for the calendar
    const headerRow = table.insertRow();
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    for (let i = 0; i < 7; i++) {
      const cell = headerRow.insertCell();
      cell.textContent = daysOfWeek[i];
    }
  
    // Create a row for each week in the calendar
    let row;
    for (let i = 0; i < days.length; i++) {
      if (i % 7 === 0) {
        row = table.insertRow();
      }
      const cell = row.insertCell();
      cell.textContent = days[i];
    }
  
    // Add the table to the calendar container element
    const calendarContainer = document.getElementById("calendar");
    calendarContainer.appendChild(table);
  }
  
  // Call the createCalendar function to generate the calendar for February 2023
  createCalendar(2023, 2);