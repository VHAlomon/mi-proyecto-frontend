const button = document.getElementById("actionBtn");
const message = document.getElementById("message");

button.addEventListener("click", () => {
  message.textContent = "Gracias por visitar mi proyecto frontend!";
  button.textContent = "Mensaje enviado";
  button.disabled = true;
});
