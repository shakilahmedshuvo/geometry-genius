// first function
function getElementById(idInput) {
    const getIdinput = document.getElementById(idInput);
    const idInputString = getIdinput.value;
    const getValueStringToNumber = parseFloat(idInputString);
    getIdinput.value = "";
    return getValueStringToNumber;
}

