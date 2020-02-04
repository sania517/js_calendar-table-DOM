'use strict';

const calendar = document.querySelector('#calendar');

function calendarTable(year, month, element) {
  const day = (new Date(year, month - 1).getDay() + 6) % 7;
  const durationMonths = [
    0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31,
  ];
  let tbody = '<tbody>';
  const thead = `
  <thead>
   <tr>
      <th>пн</th>
      <th>вт</th>
      <th>ср</th>
      <th>чт</th>
      <th>пт</th>
      <th>сб</th>
      <th>вс</th>
    </tr>
   </thead>
   `;
  let duration = durationMonths[month];

  if (month === 2 && !(year % 4) && (year % 100 || !(year % 400))) {
    duration = 29;
  }

  const lengthMonthArr = Math.ceil((duration + day) / 7) * 7;
  const monthArr = Array(lengthMonthArr).fill('<td></td>');

  for (let i = 0; i < duration; i += 1) {
    monthArr[i + day] = `<td>${i + 1}</td>`;
  }

  while (monthArr.length > 0) {
    tbody += `<tr>${monthArr.splice(0, 7).join('')}</tr>`;
  }
  tbody += '</tbody>';

  element.innerHTML = `<table>${thead}${tbody}</table>`;
}

calendarTable(2019, 10, calendar);
