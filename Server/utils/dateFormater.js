const format = { month: 'long', day: 'numeric', year: 'numeric' };
const today = new Date();
const todayFormat = today.toLocaleString('en-Us', format).split(',');
const monthDay = todayFormat[0];
let day = `${monthDay.split(' ')[1]}`;
if (day.charAt(day.length - 1) === '1' && day !== '11') day += 'st';
else if (day.charAt(day.length - 1) === '2' && day !== '12') day += 'nd';
else if (day.charAt(day.length - 1) === '3' && day !== '13') day += 'rd';
else day += 'th';
const month = `${monthDay.split(' ')[0]}`;
const year = `${todayFormat[1]}`;
const todayDate = `${day} ${month},${year}`;

export default todayDate;
