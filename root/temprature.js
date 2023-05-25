const chatBox = document.getElementById("chatbox");
const userForm = document.getElementById("userinput");

userForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const quantity = parseInt(document.getElementById("quantity").value);
  const startTemp = document.getElementById("start-temp").value.toLowerCase();
  const endTemp = document.getElementById("end-temp").value.toLowerCase();

  if (isNaN(quantity)) {
    return addMessage("Please enter a valid number", "bot");
  }

  if (!startTemp) {
    return addMessage("Please select a starting temperature unit", "bot");
  }

  if (!endTemp) {
    return addMessage("Please select an ending temperature unit", "bot");
  }

  const tempInCelsius = convertToCelsius(quantity, startTemp);
  const convertedTemp = convertFromCelsius(tempInCelsius, endTemp);

  if (convertedTemp === null) {
    return addMessage("result is null", "bot");
  }

  addMessage(`${convertedTemp} ${endTemp}`, "bot");
});

function convertToCelsius(quantity, startTemp) {
  switch (startTemp) {
    case "celsius":
      return quantity;
    case "fahrenheit":
      return (quantity - 32) * 5 / 9;
    case "kelvin":
      return quantity - 273.15;
    default:
      return null;
  }
}

function convertFromCelsius(tempInCelsius, endTemp) {
  switch (endTemp) {
    case "celsius":
      return tempInCelsius;
    case "fahrenheit":
      return (tempInCelsius * 9 / 5) + 32;
    case "kelvin":
     return tempInCelsius + 273.15;
    default:
      return null;
  }
}

function addMessage(message, sender) {
  const messageNode = document.createElement("p");
  messageNode.innerHTML = `<b>${sender}:</b> ${message}`;
  chatBox.appendChild(messageNode);
}
