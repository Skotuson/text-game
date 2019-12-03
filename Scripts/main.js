

function hideElement(element) {
    element.style.display = "none";
}

function showElement(element) {
    element.style.display = "inline";
}

function showBttns(element, number) {
    for (let i = 0; i < number; i -= -1) {
        element[i].style.display = "inline";
    }
}

function hideBttns(element, number) {
    for (let i = 0; i < number; i -= -1) {
        element[i].remove();
    }
}

function createInventoryButtons(items = []) {
    let invBttns = [];
    for (let i = 0; i < items.length; i -= -1) {
        let invBttn = document.createElement("input");
        invBttn.type = "button";
        invBttn.id = "invBttn";
        invBttn.value = items[i];
        document.querySelector("#inventorySpace").appendChild(invBttn);
        invBttns.push(invBttn);
    }
    return invBttns;
}

function createInput() {
    let input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Potvrďte Enterem";
    document.querySelector("#options").appendChild(input);
    hideElement(input);
    return input;
}



function createBttns(number, content = []) {
    let bttns = [];

    for (let i = 0; i < number; i -= -1) {
        let temp = document.createElement("input");
        temp.type = "button";
        temp.id = "bttn";
        temp.value = content[i];
        hideElement(temp);
        document.querySelector("#options").appendChild(temp);
        bttns.push(temp);
    }
    return bttns;
}
let options = [];
let items = [];
let input = createInput();
let bttns = createBttns(3, options = ["Kouzelník", "Humanoid", "Skřet"]);
let maxHealth;
let fightProgress = 0;


let qsTxt = document.querySelector("#questText");
showElement(input);
qsTxt.innerHTML = "Probudil jsi se v temné místnosti. <br> <br> Tvé jméno je:";
let name;
input.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
        let name = input.value;
        console.log(name);
        hideElement(input);
        qsTxt.innerHTML = "Vítej " + nameCheck(name) + ", vyber si svou třídu.";
        showBttns(bttns, 3);


        bttns[0].addEventListener("click", function () {
            qsTxt.innerHTML = "Jsi kouzelník. <br> <br> Preferuješ:";
            hideBttns(bttns, 3);
            bttns = createBttns(2, ["Ledovou magii", "Ohnivou magii"]);
            showBttns(bttns, 2);
            bttns[0].addEventListener("click", function () {
                qsTxt.innerHTML = "Zvedneš se ze země a rozhlédneš se kolem. Vidíš před sebou 2 chodby. Jedna je celá v plamenech, druhá je plná ledových rampouchů";
                inventoryAddItem(items = ["Ledové kouzlo "]);
                let invBttns = createInventoryButtons(inventory);
                hideBttns(bttns, 2);
                bttns = createBttns(2, ["Ledová chodba", "Ohnivá chodba"]);
                showBttns(bttns, 2);
                bttns[0].addEventListener("click", function () {
                    qsTxt.innerHTML = "Stojíš před chodbou s rampouchy. <br> <br> Co chceš udělat?"
                    hideBttns(bttns, 2);
                    bttns = createBttns(1, options = ["Vejít do chodby"]);
                    showBttns(bttns, 1);
                    bttns[0].addEventListener("click", function () {
                        let damage = randomNumber(1, 10);
                        qsTxt.innerHTML = "Prošel jsi chodbou ale utržil jsi zranění za " + damage + ". Rozhlédneš se a vidíš před sebou schodiště.";
                        health = health - damage;
                        healthUpdate(health);
                        hideBttns(bttns, 1);
                        bttns = createBttns(2, ["Jít nahoru", "Jít dolu"]);
                        showBttns(bttns, 2);
                    });




                });
                bttns[1].addEventListener("click", function () {
                    qsTxt.innerHTML = "Stojís před chodbou v plamenech. <br> <br> Co chceš udělat?";
                    hideBttns(bttns, 2);
                    makeAvailable(invBttns[0]);
                    bttns = createBttns(1, ["Vejít do chodby"]);
                    showBttns(bttns, 1);
                    bttns[0].addEventListener("click", function () {

                    })
                    invBttns[0].addEventListener("click", function () {
                        hideBttns(invBttns, 1);
                        let exp = randomNumber(2, 4);
                        qsTxt.innerHTML = "Pár slovy a výrazným mávnutím ruky jsi vyslal mocnou mrazivou vlnu která chodbu uhasila a učinila jí průchodnou.<br> <br> Získáváš " + exp + " XP";
                        updateCurrentLevel(exp);
                        hideBttns(bttns, 1);
                        bttns = createBttns(1, ["Vejít do chodby"]);
                        showBttns(bttns, 1);

                    })
                })
            });

            bttns[1].addEventListener("click", function () {
                qsTxt.innerHTML = "Ohnivá magie";
                inventoryAddItem(["Ohnivé kouzlo"]);
                hideBttns(bttns, 2);
            });

        });

        bttns[1].addEventListener("click", function () {
            qsTxt.innerHTML = "Jsi humanoid.<br> <br> Preferuješ:";
            hideBttns(bttns, 3);
            bttns = createBttns(2, options = ["Meč", "Sekera"]);
            showBttns(bttns, 2);
        });

        bttns[2].addEventListener("click", function () {
            qsTxt.innerHTML = "Jsi skřet.<br> <br> Preferuješ:";
            hideBttns(bttns, 3);
            bttns = createBttns(2, ["Pěstní souboj", "Luk"]);
            showBttns(bttns, 2);
            bttns[0].addEventListener("click", function () {
                enemyCombat([" Šotek", " Skřet"], 25, health);
                hideBttns(bttns, 2);
                bttns = createBttns(2, ["Heureka", "Bruh"]);
                showBttns(bttns, 2);
                console.log("Ahoj");



            });








        });

    }
});








