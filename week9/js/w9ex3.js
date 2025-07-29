/*
    Name: Nima Yousefi
    Student number: 100980271
    Date: July 9 2025
    Description: 


*/

console.log('test 3');

function showOutput(){
    let name = document.querySelector('#First-name').value;
    document.querySelector('#output').textContent = 'Hello ' + name;
}
document.querySelector('#btn').addEventListener('click', showOutput);