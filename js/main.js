
const button = document.getElementById("actionBtn");
const message = document.getElementById("message");
const MESSAGE_TEXT = "¡Gracias por visitar mi proyecto frontend!";


function handleButtonClick() {
    message.textContent=MESSAGE_TEXT;
    button.textContent = "Mensaje enviado";
    button.disabled = true;
}


button.addEventListener("click", handleButtonClick);
