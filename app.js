const timeLeft = document.getElementById('time-left');
const birthday = new Date ('03/03/2023')
const second = 1000 
const minute = second * 60
const hour = minute * 60
const day = hour * 24 
let timerId 


function countdown(){
    const today = new Date()
    const timeSpan = birthday - today 
    if (timeSpan <= -day ){
        timeLeft.innerHTML = " ya cumpleaños"
        return
    }
    if (timeSpan <= 0){
        timeLeft.innerHTML = " fELIZ CuMPLE "
        clearInterval(timerId)
        return 
    }

    const days = Math.floor (timeSpan / day)
    const hours = Math.floor((timeSpan % day)/ hour)
    const minutes = Math.floor ((timeSpan % hour)/minute)
    const seconds = Math.floor ((timeSpan % minute) / second)

    timeLeft.innerHTML = days + " días "+  hours + " horas " + minutes + " minutos " + seconds + " segundos "

}

timerId = setInterval (countdown, second)







