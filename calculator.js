console.log("Create calculator")


function allnumber(a) {
    document.getElementById("demo").value += a;
    // console.log(a);
}

function operator() {
    let resultt = document.getElementById("demo");
    // console.log(resultt.value)  
    var res = [];
    let answer = 0;

    if(resultt.value.includes("+")){
        // console.log("true")
        // console.log(resultt.value);
        res = resultt.value.split('+');
        console.log(res);
        answer = res.reduce((totalno, secondnum) => Number(totalno) + Number(secondnum));
        // console.log(answer);
    }
    
    else if(resultt.value.includes("-")){
        res = resultt.value.split('-');
        answer = res.reduce((totalno, secondnum) => totalno - secondnum);
    }
    
    else if(resultt.value.includes("/")){
        res = resultt.value.split('/');
        answer = res.reduce((totalno, secondnum) => totalno / secondnum);
    }
    
    else if(resultt.value.includes("%")){
        res = resultt.value.split('%');
        answer = res.reduce((totalno, secondnum) => totalno % secondnum);
    }
    
    else{
        res = resultt.value.split('*');
        answer = res.reduce((totalno, secondnum) => totalno * secondnum); 
    }
    return Number(answer)
}

function calculateResult(){
    let s = operator()
    // console.log(s)
    document.getElementById("demo").value = s;
}

function displayclear() {
    let input = document.getElementById("demo")
    // console.log(input);
    input.value = "";
}

function removelaste() {
    let inputvaluee = document.getElementById("demo");
    inputvaluee.value = inputvaluee.value.slice(0, -1);
}








// let arr = "my name is jamal khan"
// let w = arr.includes("jamal")
// console.log(w)

// function calculateResult() {
//     let inputvaluee = document.getElementById('demo').value;
//     try {
//         document.getElementById('demo').value = eval(inputvaluee);
//     } catch (error) {
//         document.getElementById('demo').value = 'Error';
//     }
// }


// res = document.getElementById("demo").value.split('-');
    // answer = parseInt(res[0]) - parseInt(res[1]);

// let display = document.getElementById("demo");
// let buttons = document.querySelectorAll("button");
// let string = '';

// let buttonarr = Array.from(buttons);

// buttonarr.forEach(btn => {
//     btn.addEventListener('click', (e) => {

//         if(e.target.innerHTML == 'DEL') {
//             string = string.substring(0, string.length-1);
//             display.value = string;
//         }
//         else if(e.target.innerHTML == 'AC'){
//             string = '';
//             display.value = string;
//         }

//         else{
//             string += e.target.innerHTML;
//             demo.value = string;
//         }

        
//         // console.log(e.target.innerHTML)
//     });
// })

// function resultt(value){
//     document.getElementById("demo").value += value;
// }

// console.log(buttons)

