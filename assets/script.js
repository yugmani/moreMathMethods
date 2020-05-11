let num1 = 0;
let ceiling = 0;

function findCeiling(number) {
    if(!isNaN(number)){
        ceiling = Math.ceil(number);
    }
    return ceiling;
}

function findRound(number) {
    if(!isNaN(number)){
        round = Math.round(number);
    }
    return round;
}

function findFloor(number) {
    if(!isNaN(number)){
        floor = Math.floor(number);
    }
    return floor;
}

/*
let form_more = document.getElementById("more");
form_more.addEventListener("submit", function(event){
    event.preventDefault();

    let num1 = document.getElementById("num1").value;
    ceiling = findCeiling(num1);
    let result1 = document.getElementById("result1");
    result1.innerHTML = `<h3>The ceiling of ${num1} is ${ceiling}</h3>`;
})
*/

let buttons = document.getElementsByClassName('sub');
console.log(buttons.length);
for(let i = 0; i<buttons.length; i++){
    buttons[i].addEventListener('click', () => {
    event.preventDefault();
    console.log(buttons[i]);
    let result1 = "";
    let num1 = document.getElementById("num1").value;
    result1 = document.getElementById("result1");
    let html = "";
    if (i=== 0 ){
        ceiling = findCeiling(num1);
        html = `<h3>Math.ceil(${num1})= ${ceiling}</h3>`;
    
        result1.innerHTML = html;
    }

    if (i=== 1 ){
        round = findRound(num1);
        html = `<h3>Math.round(${num1})= ${round}</h3>`;
        result1.innerHTML = html;
    }
    if (i=== 2 ){
        floor = findFloor(num1);
        html = `<h3>Math.floor(${num1})= ${floor}</h3>`;
        result1.innerHTML = html;
    }

   });
}