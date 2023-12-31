// first function
function getElementByIdInput(idInput) {
    const getIdInput = document.getElementById(idInput);
    const idInputString = getIdInput.value;
    const getValueStringToNumber = parseFloat(idInputString);
    getIdInput.value = "";
    return getValueStringToNumber;
}

// Second function 
function displayTheValue(inputName, totalValue) {
    const section = document.getElementById('showDataHere');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>
        ${number}
    </td>
    <td>
        ${inputName}
    </td>
    <td>
        ${totalValue}
    </td>
    `;
    section.appendChild(tr);
}

let number = 0;

//  1.function for triangle section
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
    const inputMultiplication = 0.5 * triangleInputFirst * triangleInputSecond;
    displayTheValue(getTriangleTitle, inputMultiplication.toFixed(2))
})

// 2.function for Rectangle section
document.getElementById('btn-rectangle').addEventListener('click', function () {
    const getRectangleTitle = document.getElementById('rectangle-title').innerText;
    const rectangleInputFirst = getElementByIdInput('rectangle-input-field-one');
    const rectangleInputSecond = getElementByIdInput('rectangle-input-field-two');
    if (isNaN(rectangleInputFirst) || isNaN(rectangleInputSecond) || rectangleInputFirst <= 0 ||
        rectangleInputSecond <= 0) {
        alert('Please Enter A Valid Number');
        return;
    }
    number += 1
    const inputMultiplication = rectangleInputFirst * rectangleInputSecond;
    displayTheValue(getRectangleTitle, inputMultiplication.toFixed(2))
})
// 3.function for Parallelogram section
document.getElementById('btn-parallelogram').addEventListener('click', function () {
    const getParallelogramTitle = document.getElementById('parallelogram-title').innerText;
    const ParallelogramInputFirst = getElementByIdInput('parallelogram-input-one');
    const ParallelogramInputSecond = getElementByIdInput('parallelogram-input-two');
    if (isNaN(ParallelogramInputFirst) || isNaN(ParallelogramInputSecond) || ParallelogramInputFirst <= 0 ||
        ParallelogramInputSecond <= 0) {
        alert('Please Enter A Valid Number');
        return;
    }
    number += 1
    const inputMultiplication = ParallelogramInputFirst * ParallelogramInputSecond;
    displayTheValue(getParallelogramTitle, inputMultiplication.toFixed(2))
})
// 4.function for Rhombus seciton
document.getElementById('btn-rhombus').addEventListener('click', function () {
    const getRhombusTitle = document.getElementById('rhombus-title').innerText;
    const rhombusInputFirst = getElementByIdInput('rhombus-input-field-one');
    const rhombusInputSecond = getElementByIdInput('rhombus-input-field-two');
    if (isNaN(rhombusInputFirst) || isNaN(rhombusInputSecond) || rhombusInputFirst <= 0 ||
        rhombusInputSecond <= 0) {
        alert('Please Enter A Valid Number');
        return;
    }
    number += 1
    const inputMultiplication = 0.5 * rhombusInputFirst * rhombusInputSecond;
    displayTheValue(getRhombusTitle, inputMultiplication.toFixed(2))
})
// 5.function for Pentagon section
document.getElementById('btn-pentagon').addEventListener('click', function () {
    const getPentagonTitle = document.getElementById('pentagon-title').innerText;
    const PentagonInputFirst = getElementByIdInput('pentagon-input-field-one');
    const PentagonInputSecond = getElementByIdInput('pentagon-input-field-two');
    if (isNaN(PentagonInputFirst) || isNaN(PentagonInputSecond) || PentagonInputFirst <= 0 ||
        PentagonInputSecond <= 0) {
        alert('Please Enter A Valid Number');
        return;
    }
    number += 1
    const inputMultiplication = 0.5 * PentagonInputFirst * PentagonInputSecond;
    displayTheValue(getPentagonTitle, inputMultiplication.toFixed(2))
})
// 6.function for Ellipse section
document.getElementById('btn-ellipse').addEventListener('click', function () {
    const getEllipseTitle = document.getElementById('ellipse-title').innerText;
    const ellipseInputFirst = getElementByIdInput('ellipse-input-field-one');
    const ellipseInputSecond = getElementByIdInput('ellipse-input-field-two');
    if (isNaN(ellipseInputFirst) || isNaN(ellipseInputSecond) || ellipseInputFirst <= 0 ||
        ellipseInputSecond <= 0) {
        alert('Please Enter A Valid Number');
        return;
    }
    number += 1
    const inputMultiplication = 3.14 * ellipseInputFirst * ellipseInputSecond;
    displayTheValue(getEllipseTitle, inputMultiplication.toFixed(2))
})