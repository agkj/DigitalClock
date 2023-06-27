const hourElement = document.getElementById("hours");
const minElement = document.getElementById("mins");
const secElement = document.getElementById("sec");
const ampmElement = document.getElementById("ampm");
const todElement = document.getElementById("timeOfDay");


const dateElement = document.getElementById("dd");
const monthElement = document.getElementById("mm");
const yearElement = document.getElementById("yyyy");


function updateClock() {
    let hour = new Date().getHours()
    let mins = new Date().getMinutes()
    let sec = new Date().getSeconds()
    let ampm = "AM"
    let tod = "Mid Day"
    

    let date = new Date().getDate()
    let month = new Date().getMonth()
    let year = new Date().getFullYear()

    



    /* This section allows multiple digits*/ 
    hour = hour < 10 ? "0" + hour : hour;

    mins = mins < 10 ? "0" + mins : mins;

    sec = sec < 10 ? "0" + sec : sec;
   /* This section allows multiple digits*/ 


    /* This Function sets the time to Noon in 12hr format*/
    if (hour > 12) {
        hour = hour - 12
        ampm = "PM"

        if(hour <4){
            tod = "Noon"
        }
        else if(hour >4 && hour <5){
            tod = "Late Noon"
        }
        else if(hour >5 && hour < 7){
            tod = "Early Evening"
        }

        else if(hour>7 && hour<9){
            tod = "Evening"
        }
        else if(hour>9 && hour <11){
            tod = "Late Evening"
        }




    }






    hourElement.innerText = hour
    minElement.innerText = mins
    secElement.innerText = sec
    ampmElement.innerText = ampm
    todElement.innerText = tod
    

    
    dateElement.innerText = date
    monthElement.innerText = month
    yearElement.innerText = year



    setTimeout(() => {
        updateClock()
    }, 1000);
}

updateClock()