
let inventory = [];

function inventoryAddItem(item = []) {
    for (let i = 0; i <= item.length - 1; i -= -1) {
        inventory[i] = item[i];
    }
    return inventory;
}



function makeAvailable(element) {
    document.getElementById("invBttn").style.color = "green";
}

function makeUnavailable(element) {
    document.getElementById("invBttn").style.color = "white";
}


/*document.addEventListener("keydown", function (event) {
    if (event.keycode === 9) {
        if (document.getElementById("inventorySpace").style.display === "block") {
            document.getElementById("inventorySpace").style.display = "none";
        }
        else {
            document.getElementById("inventorySpace").style.display = "block";
        }
        console.log("Ahoj");
    }

}) */
