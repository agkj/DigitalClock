const hourElement = document.getElementById("hours");
const minElement = document.getElementById("mins");
const secElement = document.getElementById("sec");
const ampmElement = document.getElementById("ampm");

function updateClock() {
    let hour = new Date().getHours()
    let mins = new Date().getMinutes()
    let sec = new Date().getSeconds()
    let ampm = "AM"


    hour = hour < 10 ? "0" + hour : hour;

    mins = mins < 10 ? "0" + mins : mins;


    sec = sec < 10 ? "0" + sec : sec;




    if (hour > 12) {
        hour = hour - 12
        ampm = "PM"
    }



    hourElement.innerText = hour
    minElement.innerText = mins
    secElement.innerText = sec
    ampmElement.innerText = ampm
    setTimeout(() => {
        updateClock()
    }, 1000);
}

updateClock()