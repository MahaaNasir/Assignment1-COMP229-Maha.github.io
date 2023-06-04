//Javascript for all the pages

/*
  Assignment 1
  File name: app.css
  Student Name: Maha Nasir
  StudentID: 301266305
  Date: 03 June 2023
*/

//IIFE -- immediately Function Express
(function(){
    function Start(){
      console.log("App Started..")
    }
    window.addEventListener("load", Start)
})();


//Javascript regarding change the tabs on "about.ejs"
const nameOfTabs = document.querySelectorAll(".tabs");
const textOfTabs = document.querySelectorAll(".tabs-text");

function clickTab(event, tab) {
  nameOfTabs.forEach((tabName) => {
    tabName.classList.remove("active-tab");
  });

  textOfTabs.forEach((tabText) => {
    tabText.classList.remove("active-text");
  });

  event.currentTarget.classList.add("active-tab");
  document.getElementById(tab).classList.add("active-text");
}


//Javascript for Functional Contact form in "contact.ejs"

//Inspiration for functional Contact form reference link: https://github.com/jamiewilson/form-to-google-sheets 
const scriptURL = 'https://script.google.com/macros/s/AKfycbwIVrc8T-BNqKOuxVnimOwW9JZ4lxrrodzWJCrhsRndN3gULLOes4LQarncQVC2kGOJ/exec';
const form = document.forms['submit-to-google-sheet'];
const message = document.getElementById("display-message");

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      // Display success message
      message.innerHTML = "Message sent successfully";
      form.reset();

      // Redirect to homepage after 2 seconds
      setTimeout(function() {
        window.location.href = "/"; //go to home page
      }, 2000);
    })
    .catch(error => console.error('Error!', error.message));
});
    

