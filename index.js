let homeScore = 0
let guestScore = 0

function checkScore(){
    if(homeScore > guestScore){
        document.getElementById("score--home").style.color = "#FBBF24"
        document.getElementById("score--guest").style.color = "#F94F6D"

    }else{
        document.getElementById("score--guest").style.color = "#FBBF24"
        document.getElementById("score--home").style.color = "#F94F6D"
    }
}

function add1Home(){
    homeScore+=1
    document.getElementById("score--home").textContent = homeScore
    checkScore()
}

function add2Home(){
    homeScore+=2
    document.getElementById("score--home").textContent = homeScore
    checkScore()
}

function add3Home(){
    homeScore+=3
    document.getElementById("score--home").textContent = homeScore
    checkScore()
}



function add1Guest(){
    guestScore+=1
    document.getElementById("score--guest").textContent = guestScore
    checkScore()
}

function add2Guest(){
    guestScore+=2
    document.getElementById("score--guest").textContent = guestScore
    checkScore()
}

function add3Guest(){
    guestScore+=3
    document.getElementById("score--guest").textContent = guestScore
    checkScore()
}