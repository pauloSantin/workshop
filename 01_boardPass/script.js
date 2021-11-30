const data = new Date();

const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let year = data.getFullYear();
let month = months[data.getMonth()];

let day = data.getDate();


let dayEle = document.getElementById('day');
dayEle.textContent = day;

let monthEle = document.getElementById('month');
monthEle.textContent = month;

let yearEle = document.getElementById('year');
yearEle.textContent = year;


console.log(month);
console.log(year);
console.log(day)

console.log(data);

