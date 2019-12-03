
function nameCheck(name) {
    let newName = "";
    if (name.charAt(name.length - 1) === 'n') {
        newName = name + "e";
    }

    else if (name.charAt(name.length - 1) === 'š') {
        newName = name + "i";
    }

    else if (name === "Jeff" || name === "jeff") {
        newName = "Channingu Tatume";
    }

    else {
        return name;
    }
    return newName;
}