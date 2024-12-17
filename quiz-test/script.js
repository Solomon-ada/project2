const quiz1 = {quation1:"1.which of is the name of person", a:"Asia", b:"Angola", c:"Caw", d:"Alemu"};

const quiz2 = {quation2: "2.how many rigions are there in ethiopia.", a:"11", b:"13", c:"16",d:"20"}

const quiz3 = {quation3:"3.which is not type of color in ethiopian flag",a:"red",b:"yellow",c:"green",d:"purple"}

function firstQuation() {
    var elements = document.querySelector('.first').innerHTML= quiz1.quation1;
    var elements = document.querySelector('.a').innerHTML= quiz1.a;
    var elements = document.querySelector('.b').innerHTML= quiz1.b;
    var elements = document.querySelector('.c').innerHTML= quiz1.c;
    var elements = document.querySelector('.d').innerHTML= quiz1.d;

  
// Function to show alert based on the button clicked
function showAlert() {
    // Get the text content of the clicked button
    const buttonText = this.innerText; // 'this' refers to the button that was clicked

    // Check the button text and display the appropriate alert
    if (buttonText === 'Asia') {
        alert('incorrect');
    } else if (buttonText === 'Angola') {
        alert('incorrect');
    } else if (buttonText === 'Caw') {
        alert('incorrect');
    } else if (buttonText === 'Alemu') {
        alert('correct');
    }
}

// Get all buttons with class 'btn'
const buttons = document.getElementsByClassName('btn');

// Loop through each button and add an event listener
for (let i = 0; i < buttons.length; i++) { // Use buttons.length for looping
    const button = buttons[i];
    
    // Check if the button exists
    if (button) {
        // Add a click event listener to the button
        button.addEventListener('click', showAlert);
    }
}


    const newButton = document.createElement('button');
newButton.id = 'next';
newButton.onclick = secondQuation; // Assuming thirdQuation is a defined function
newButton.textContent = 'next';

document.querySelector('#next').replaceWith(newButton);

}

function secondQuation (){
    var elements = document.querySelector('.first').innerHTML= quiz2.quation2;
    var elements = document.querySelector('.a').innerHTML= quiz2.a;
    var elements = document.querySelector('.b').innerHTML= quiz2.b;
    var elements = document.querySelector('.c').innerHTML= quiz2.c;
    var elements = document.querySelector('.d').innerHTML= quiz2.d;


// Function to show alert based on the button clicked
function showAlert() {
    // Get the text content of the clicked button
    const buttonText = this.innerText; // 'this' refers to the button that was clicked

    // Check the button text and display the appropriate alert
    if (buttonText === '11') {
        alert('incorrect');
    } else if (buttonText === '13') {
        alert('correct');
    } else if (buttonText === '16') {
        alert('incorrect');
    } else if (buttonText === '20') {
        alert('incorrect');
    }
}

// Get all buttons with class 'btn'
const buttons = document.getElementsByClassName('btn');

// Loop through each button and add an event listener
for (let i = 0; i < buttons.length; i++) { // Use buttons.length for looping
    const button = buttons[i];
    
    // Check if the button exists
    if (button) {
        // Add a click event listener to the button
        button.addEventListener('click', showAlert);
    }
}


    const newButton = document.createElement('button');
    newButton.id = 'next';
    newButton.onclick = thirdQuation; // Assuming thirdQuation is a defined function
    newButton.textContent = 'next';
    
    document.querySelector('#next').replaceWith(newButton);
    
}

function thirdQuation (){
    var elements = document.querySelector('.first').innerHTML= quiz3.quation3;
    var elements = document.querySelector('.a').innerHTML= quiz3.a;
    var elements = document.querySelector('.b').innerHTML= quiz3.b;
    var elements = document.querySelector('.c').innerHTML= quiz3.c;
    var elements = document.querySelector('.d').innerHTML= quiz3.d;


// Function to show alert based on the button clicked
function showAlert() {
    // Get the text content of the clicked button
    const buttonText = this.innerText; // 'this' refers to the button that was clicked

    // Check the button text and display the appropriate alert
    if (buttonText === 'red') {
        alert('incorrect');
    } else if (buttonText === 'yellow') {
        alert('incorrect');
    } else if (buttonText === 'green') {
        alert('incorrect');
    } else if (buttonText === 'purple') {
        alert('correct');
    }
}

// Get all buttons with class 'btn'
const buttons = document.getElementsByClassName('btn');

// Loop through each button and add an event listener
for (let i = 0; i < buttons.length; i++) { // Use buttons.length for looping
    const button = buttons[i];
    
    // Check if the button exists
    if (button) {
        // Add a click event listener to the button
        button.addEventListener('click', showAlert);
    }
}


    const newButton = document.createElement('button');
newButton.id = 'next';
newButton.onclick = firstQuation; // Assuming thirdQuation is a defined function
newButton.textContent = 'next';

document.querySelector('#next').replaceWith(newButton);

}

const button = document.getElementsByClassName('btn')[0];
console.log(button);