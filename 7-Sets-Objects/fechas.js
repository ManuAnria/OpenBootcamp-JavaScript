const hoy = new Date();
console.log(hoy);

const nacim = new Date(1995, 0, 25);
console.log(nacim);

const later = hoy > nacim;
console.log(later);

const nacim_day = nacim.getDate();
console.log(nacim_day);

const nacim_month = nacim.getMonth() + 1;
console.log(nacim_month);

const nacim_year = nacim.getFullYear();
console.log(nacim_year);


