const format = { month: 'long', day: 'numeric', year: 'numeric' };
const today = new Date();
const todayFormat = today.toLocaleString('en-Us', format).split(',');
const monthDay = todayFormat[0];
const day = `${monthDay.split(' ')[1]}th`;
const month = `${monthDay.split(' ')[0]}`;
const year = `${todayFormat[1]}`
const todayDate = `${day} ${month},${year}`;

export default todayDate;
