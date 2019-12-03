let experience = 0;
let allTimeExperience = 0;
let currentLevelRequirements = 15;

let expTxt = document.querySelector("#experienceBar");
expTxt.innerHTML = experience + "/" + currentLevel(experience) + " XP";

function currentLevel(experience) {
    allTimeExperience += experience;
    if (allTimeExperience < 15) {
        currentLevelRequirements = 15;
    }
    if (allTimeExperience >= 15 && allTimeExperience < 30) {
        currentLevelRequirements = 30;
        health += 25;
        healthTxt.innerHTML = health + " HP";
    }

    return currentLevelRequirements;
}

function updateCurrentLevel(amount) {
    if (amount >= currentLevelRequirements) {
        experience = 0;
        return expTxt.innerHTML = experience + "/" + currentLevel(amount) + " XP";
    }

    else {
        experience += amount;
        return expTxt.innerHTML = experience + "/" + currentLevel(amount) + " XP";
    }

}



