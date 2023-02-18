// first function
function getElementById(idInput) {
    const getIdinput = document.getElementById(idInput);
    const idInputString = getIdinput.value;
    const getValueStringToNumber = parseFloat(idInputString);
    getIdinput.value = "";
    return getValueStringToNumber;
}


function displayTheValue(inputName, totalValue) {
    const section = document.getElementById("showDataHere");
    const tr = document.createElement('tr');
    tr.innerHTML = `

    <td>${NO}</td>

    <td>${inputName}</td>

    <td>${totalValue}</td>
    `
    section.appendChild(td);
}

