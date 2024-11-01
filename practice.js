
console.log("last")


let firstnumber
let sec_numbers
let step = 0;
let operation
let results = 0;


let numArray = [];
let secondnumArray = [];


let display = document.getElementById("demo");

function allnumber(num){

    // console.log(step)
    if(step === 0 || step === 1){
        numArray.push(num)
        firstnumber = parseFloat(numArray.join(''))
        display.value = firstnumber;
    }else if(step === 2){
        secondnumArray.push(num)
        sec_numbers = parseFloat(secondnumArray.join(''))
        display.value += sec_numbers;
    }
}

function getOperator(op){
    step = 2;
    operation = op;
    document.getElementById("demo").value += operation;
    // if (firstnumber != null) {  // check if firstnumber is set
    //     step = 2;
    //     operation = op;
    //     display.value = firstnumber + " " + operation + " ";
    // }
}

// function removelaste(){
//     let inputvaluee = document.getElementById("lastelmnt");
//     inputvaluee.value = inputvaluee.value.slice(0, -1);
// }

function displayclear(){
    document.getElementById("demo").value = "";
    firstnumber = 0;
    sec_numbers = 0;
    numArray = [];
    secondnumArray = [];
    step = 0;
}

const calculateResulte = () => {
    if(operation === '+'){
        results = firstnumber + sec_numbers;
        display.value = results
    } else if (operation === '-'){
        results = firstnumber - sec_numbers;
        display.value = results;
    }else if (operation === '*'){
        results = firstnumber * sec_numbers;
        display.value = results;
    }else if (operation === '/'){
        results = firstnumber / sec_numbers;
        display.value = results;
    }
}
