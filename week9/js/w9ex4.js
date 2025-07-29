/*
    Name: Nima Yousefi
    Student number: 100980271
    Date: July 9 2025
    Description: 


*/
console.log('test 4');

function sumTotal(){
    let num1 = document.querySelector('#numb1').value;
    let num2 = document.querySelector('#numb2').value;
    total = Number(num1) + Number(num2);
    document.querySelector('#output').textContent = "the mutiplication of " + num1 + " and " + num2 + " is " + total;
}
document.querySelector('#btn').addEventListener('click', sumTotal)