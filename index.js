const buttonNumbers = document.getElementsByName("data-number");
const buttonOperator = document.getElementsByName("data-operator");
const buttonEqual = document.getElementById("data-equal");
const buttonDelete = document.getElementById("data-delete");
let result = document.getElementById("result");
let opeCurrent = " ";
let opePrevious = " ";
let operation = undefined;

buttonNumbers.forEach(function(button){
    button.addEventListener('click', function(){
        addNumber(button.innerText);        
    })
});

buttonOperator.forEach(function(button){
    button.addEventListener('click', function(){
        selectOperation(button.innerText);        
    })
});

buttonEqual.addEventListener('click', function(){
    calculate();
    updateDisplay();
});

buttonDelete.addEventListener('click', function(){
    clear();
    updateDisplay();
});

function selectOperation(op){
    if(opeCurrent === " ") return;
    if(opePrevious !== " "){
        calculate()
    }
    operation = op.toString();
    opePrevious = opeCurrent;
    opeCurrent = " ";
}

function calculate(){
    let results;
    const previous = parseFloat(opePrevious);
    const current = parseFloat(opeCurrent);
    switch(operation){
        case "+":
            results = previous + current;
            break;
        case "-":
            results = previous - current;
            break;
        case "x":
            results = previous * current;
            break;
        case "/":
            results = previous / current;
            break;
        default:
            return;
    }
    opeCurrent = results;
    operation = undefined;
    opePrevious = " ";
}

function addNumber(num){
    opeCurrent = opeCurrent.toString() + num.toString();
    updateDisplay();
}

function clear(){
    opeCurrent = " ";
    opePrevious = " ";
    operation = undefined;
}

function updateDisplay(){
    result.value = opeCurrent;
}

clear();


