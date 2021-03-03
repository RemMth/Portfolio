const date1 = new Date('07/31/2000');
const date2 = new Date();

const Difftemps = date2.getTime() - date1.getTime();
const Diffjours = Difftemps / (1000 * 3600 * 24);
document.getElementById('nbDays').innerHTML = String(Math.round(Diffjours));

document.getElementById('nbCafe').innerHTML = String(Math.trunc(Math.random() * (450 - 150)));
