/**
 * Set time every second
 */

/** Get name from user with prompt */
let name = prompt("Please enter your name :)");
if(name) {
    document.querySelector(".name").innerHTML = name;
}

/** Days & Months */
let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba",
    "Perşembe", "Cuma", "Cumartesi"
];

function setTime() {

    /** Date object */
    let date = new Date();

    /** Day */
    let day = date.getDay();

    /** Hour, Minute, Second */
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    /** Get Element from Clock spans */
    let sHour = document.querySelector(".hour");
    let sMinute = document.querySelector(".minute");
    let sSecond = document.querySelector(".second");

    /** If they're digits, prepend 0 */
    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;

    sHour.innerHTML = hour;
    sMinute.innerHTML = minute;
    sSecond.innerHTML = second;

    /** Set Day */
    let sDay = document.querySelector(".day");
    sDay.innerHTML = days[day];

    setTimeout(setTime, 1000);
}

setTime();