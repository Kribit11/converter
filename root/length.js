const chatBox = document.getElementById("chatbox");
const userForm = document.getElementById("userinput");

userForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const quantity = parseInt(document.getElementById("quantity").value);
  const startLength = document.getElementById("start-length").value;
  const endLength = document.getElementById("end-length").value;

  if (isNaN(quantity)) {
    return addMessage("Please enter a valid number", "bot");
  }

  if (!startLength) {
    return addMessage("Please select a starting length unit", "bot");
  }

  if (!endLength) {
    return addMessage("Please select an ending length unit", "bot");
  }

  const lengthInMeters = convertToMeters(quantity, startLength);
  const convertedLength = convertFromMeters(lengthInMeters, endLength);

  if (convertedLength === null) {
    return addMessage("Conversion not supported", "bot");
  }

  addMessage(`${convertedLength} ${endLength}`, "bot");
});

function convertToMeters(quantity, startLength) {
  switch (startLength) {
    case "meters":
      return quantity;
    case "centimeters":
      return quantity / 100;
    default:
      return null;
  }
}

function convertFromMeters(lengthInMeters, endLength) {
  switch (endLength) {
    case "meters":
      return lengthInMeters;
    case "centimeters":
      return lengthInMeters * 100;
    default:
      return null;
  }
}

function addMessage(message, sender) {
  const messageNode = document.createElement("p");
  messageNode.innerHTML = `<b>${sender}:</b> ${message}`;
  chatBox.appendChild(messageNode);
}
