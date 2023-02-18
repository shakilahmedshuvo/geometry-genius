// first function
function getElementByIdInput(idInput) {
    const getIdinput = document.getElementById(idInput);
    const idInputString = getIdinput.value;
    const getValueStringToNumber = parseFloat(idInputString);
    getIdinput.value = "";
    return getValueStringToNumber;
}

// Second function 
function displayTheValue(inputName, totalValue) {
    const section = document.getElementById('showDataHere');
    const tr = document.createElement('tr');
    tr.innerHTML = `

    <td>${number}</td>

    <td>${inputName}</td>

    <td>${totalValue}</td>
    `;
    section.appendChild(tr);
}

// 
let number = 0;

// function for triangle seciton
document.getElementById('btn-triangle').addEventListener('click', function () {
    const getTriangleTitle = document.getElementById('triangle-title').innerText;
    const triangleInputFirst = getElementByIdInput('triangle-input-one');
    const triangleInputSecond = getElementByIdInput('triangle-input-two');
    if (isNaN(triangleInputFirst) || isNaN(triangleInputSecond) || triangleInputFirst <= 0 ||
        triangleInputSecond <= 0) {
        alert('Please Enter A Valid Number');
        return;
    }
    number += 1
    const mutiInput = 0.5 * triangleInputFirst * triangleInputSecond;
    displayTheValue(getTriangleTitle, mutiInput.toFixed(2))
})
