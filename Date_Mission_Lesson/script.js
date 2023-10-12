let now = new Date();
let firstDay = new Date(`2023-08-22`);
let toNow = now.getTime();
let toFirst = firstDay.getTime(); //우리가 처음 만난 날을 밀리초로 저장
let passedTime = toNow - toFirst;
let passedDay = Math.round(passedTime / (24 * 60 * 60 * 1000));
document.querySelector(".accent").innerHTML = passedDay + "일";

let future = toFirst + 100 * (24 * 60 * 60 * 1000);
let someday = new Date(future);
let year = someday.getFullYear();
let month = someday.getMonth() + 1;
let date = someday.getDate();
document.querySelector("#date100").innerHTML = `${year}년 ${month}월 ${date}일`;

future = toFirst + 200 * (24 * 60 * 60 * 1000);
someday = new Date(future);
year = someday.getFullYear();
month = someday.getMonth() + 1;
date = someday.getDate();
document.querySelector("#date200").innerHTML = `${year}년 ${month}월 ${date}일`;

future = toFirst + 365 * (24 * 60 * 60 * 1000);
someday = new Date(future);
year = someday.getFullYear();
month = someday.getMonth() + 1;
date = someday.getDate();
document.querySelector("#date365").innerHTML = `${year}년 ${month}월 ${date}일`;

future = toFirst + 500 * (24 * 60 * 60 * 1000);
someday = new Date(future);
year = someday.getFullYear();
month = someday.getMonth() + 1;
date = someday.getDate();
document.querySelector("#date500").innerHTML = `${year}년 ${month}월 ${date}일`;
