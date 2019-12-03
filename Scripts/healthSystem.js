
let health = 100;

let healthTxt = document.querySelector("#healthBar");
healthTxt.innerHTML = health + " HP";


function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);

}

function healthUpdate(health) {
    healthTxt.innerHTML = health + " HP";
    if (health <= 66) {
        document.getElementById("healthBar").style.color = "yellow";
    }

    if (health <= 33) {
        document.getElementById("healthBar").style.color = "red";
    }

    if (health <= 0) {
        healthTxt.innerHTML = "Deceased";
        qsTxt.innerHTML = "Zemřel jsi."
    }
}

function healthSubtraction(health, damage) {
    health = health - damage;
    healthUpdate(health);
    return health;
}


