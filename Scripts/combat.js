

function enemyHealthSubtraction(combatDamage, maxHealth) {
    maxHealth = maxHealth - combatDamage;

    if (maxHealth <= 0) {
        maxHealth = 0;
        return maxHealth;
    }
    return maxHealth;
}

function skirmish(enemy, enemyMaxHealth, maxHealth, health) {
    let combatDamage = randomNumber(1, 10);
    let enemyCombatDamage = randomNumber(1, 10);
    if (maxHealth > 0) {
        qsTxt.innerHTML += "Dal jsi nepříteli " + enemy + " za " + combatDamage + " poškození. <br> <br>";
        qsTxt.innerHTML += enemy + " (" + enemyHealthSubtraction(combatDamage, maxHealth) + "/" + enemyMaxHealth + " HP) ti dal za " + enemyCombatDamage + " poškození. <br> <br>";
        maxHealth = enemyHealthSubtraction(combatDamage, maxHealth);
        health = healthSubtraction(health, enemyCombatDamage);
        skirmish(enemy, enemyMaxHealth, maxHealth, health);

        /*hideBttns(bttns, 2);
        bttns = createBttns(2, ["Zaútočit znovu", "Utéct"]);
        showBttns(bttns, 2);
        
        bttns[0].addEventListener("click", function () {
            skirmish(enemy, enemyMaxHealth, maxHealth, health);
        })*/
    }
    else if (maxHealth <= 0) {
        let exp = randomNumber(5, 10);
        qsTxt.innerHTML += "Porazil jsi" + enemy + "<br> <br> Obdržel jsi " + exp + " XP";
        updateCurrentLevel(exp);
    }
}






function enemyCombat(type = [], enemyMaxHealth, health) {
    let maxHealth = enemyMaxHealth;
    let enemy = type[randomNumber(0, type.length - 1)];
    document.querySelector("#questText");
    qsTxt.innerHTML = "Narazil jsi na " + enemy + " který má " + maxHealth + "/" + enemyMaxHealth + " HP. <br> <br>";
    skirmish(enemy, enemyMaxHealth, maxHealth, health);

    /*  hideBttns(bttns, 2);
      bttns = createBttns(2, options = ["Zaútočit", "Obejít"]);
      showBttns(bttns, 2);
      bttns[0].addEventListener("click", function () {
          skirmish(enemy, enemyMaxHealth, maxHealth, health);
      })*/
}




