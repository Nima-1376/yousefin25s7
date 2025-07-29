/*
    Name: Nima Yousefi
    Student number: 100980271
    Date: July 9 2025
    Description: 


*/

console.log("test 2 ");



function showGreetingMessage(){
 let name = window.prompt("what is your name?");
 window.alert("Hello "+ name)
}

//showGreetingMessage();
document.querySelector('#btn').addEventListener('click',showGreetingMessage)