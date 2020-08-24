//const myHeading = document.querySelector('h1');
//myHeading.textContent = "Hello World!!!";

let myHeading = document.querySelector('h1');
let myButton = document.querySelector('button');

if (!localStorage.getItem('myName'))
{
    setUserName();
}
else
{
    let storedName = localStorage.getItem('myName');
    myHeading.textContent = 'Mozialla is cool, ' + storedName;
}

myButton.onclick = function()
{
    setUserName();
}

let myImage = document.querySelector('img');
myImage.onclick = function()
{
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox.jpg')
    {
        myImage.setAttribute('src','images/firefox2.jpg');
    }
    else
    {
        myImage.setAttribute('src','images/firefox.jpg');
    }
}

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
  }