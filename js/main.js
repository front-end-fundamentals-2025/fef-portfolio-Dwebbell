const buttonSubmit = document.getElementById("submit-button")
const popupMessage = document.getElementById("popup")
const formMessage = document.getElementById("form-message")

buttonSubmit.addEventListener("click", function (event) {
    event.preventDefault();

    popupMessage.style.display = "flex";
    popupMessage.classList.add("show");
    formMessage.value = "";

    
    //Timer function to display message abd then hide it from ChatGPT https://chatgpt.com/share/67b7d130-1b04-8003-b21e-accd1d85a392
    setTimeout(function() {
      popupMessage.classList.add("hide");
    }, 2000);

    setTimeout(function() {
      popupMessage.classList.remove("show", "hide");
      popupMessage.style.display = "none";
    }, 4000);


});