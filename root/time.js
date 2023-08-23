const chatBox = document.getElementById("chatbox");
const userForm = document.getElementById("userinput");

userForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const quantity = parseInt(document.getElementById("quantity").value);
  const startTime = document.getElementById("start-time").value;
  const endTime = document.getElementById("end-time").value;
 
  if (isNaN(quantity)) {
    return addMessage("Please enter a valid number", "bot");
  }

  if (!startTime) {
    return addMessage("Please select a starting time unit", "bot");
  }

  if (!endTime) {
    return addMessage("Please select a ending time unit", "bot");
  }

  const timeInSeconds = convertToSeconds(quantity, startTime);
  const convertedTime = convertFromSeconds(timeInSeconds, endTime);

  if (convertedTime === null) {
    return addMessage("result is null", "bot");
  }

  addMessage(`${convertedTime} ${endTime}`, "bot");
});

function convertToSeconds(quantity, startTime) {
  switch (startTime) {
    case "seconds":
      return quantity;
    case "milliseconds":
      return quantity / 1000;
    case "minutes":
      return quantity * 60;
    case "hours":
      return quantity * 60 * 60;
    case "days":
      return quantity * 60 * 60 * 24;
    case "weeks":
      return quantity * 60 * 60 * 24 * 7;
    case "years":
      return quantity * 60 * 60 * 24 * 365;
    case "decades":
      return quantity * 60 * 60 * 24 * 365 * 10;
    case "centuries":
      return quantity * 60 * 60 * 24 * 365 * 100;
    case "plank time":
      return quantity * (5.39 * 10 ** -44);
    case "decaseconds":
      return quantity * 10;
    case "deciseconds":
      return quantity / 10;
    case "centiseconds":
      return quantity / 100;
    case "hectoseconds":
      return quantity * 100;
    case "microseconds":
      return quantity / 1000000;
    case "nanoseconds":
      return quantity / 1000000000;
    case "picoseconds":
      return quantity / 1000000000000;
    case "femtoseconds":
      return quantity / 1000000000000000;
    case "attoseconds":
      return quantity / 1000000000000000000;
    case "zeptoseconds":
      return quantity / 1000000000000000000000;
    case "yoctoseconds":
      return quantity / (10 ** -24);
    case "rontoseconds":
      return quantity / (10 ** -27);
    case "quectoseconds":
      return quantity / (10 ** -30);

      /* special times */
    case "=== new time ===":
      return "Why did you select this?"
    case "new seconds": 
      return quantity / 1;
    case "new minutes":
      return quantity * 216;
    case "new hours":
      return quantity * 20 * 216;
    case "work":
      return quantity * 57.6 * 60;
    case "rest":
      return quantity * 14.4 * 60;

    default:
      return null;
  }
}

function convertFromSeconds(timeInSeconds, endTime) {
  switch (endTime) {
    case "seconds":
      return timeInSeconds;
    case "milliseconds":
      return timeInSeconds * 1000;
    case "minutes":
      return timeInSeconds / 60;
    case "hours":
      return timeInSeconds / 60 / 60;
    case "days":
      return timeInSeconds / 60 / 60 / 24;
    case "weeks":
      return timeInSeconds /60 / 60 / 24 / 7;
    case "years":
      return timeInSeconds / 60 / 60 /24 / 365;
    case "decades":
      return timeInSeconds / 60 / 60 /24 / 365 / 10;
    case "centuries":
      return timeInSeconds / 60 / 60 /24 / 365 / 100;
    case "plank time":
      return timeInSeconds / (5.39 * 10 ** -44);
    case "decaseconds":
      return timeInSeconds / 10;
    case "deciseconds":
      return timeInSeconds * 10;
    case "centiseconds":
      return timeInSeconds * 100;
    case "hectoseconds":
      return timeInSeconds / 100;
    case "microseconds":
      return timeInSeconds * 1000000;
    case "nanoseconds":
      return timeInSeconds * 1000000000;
    case "picoseconds":
      return timeInSeconds * 1000000000000;
    case "femtoseconds":
      return timeInSeconds * 1000000000000000;
    case "attoseconds":
      return timeInSeconds * (10 ** -18);
    case "zeptoseconds":
      return timeInSeconds * (10 ** -21);
    case "yoctoseconds":
      return timeInSeconds * (10 ** -24);
    case "rontoseconds":
      return timeInSeconds * (10 ** -27);
    case "quectoseconds":
      return timeInSeconds * (10 ** -30);

      /*~ special times */
    case "=== new time ===":
      return "dont select "
    case "new seconds": 
      return timeInSeconds * 1;
    case "new minutes":
      return timeInSeconds / 216;
    case "new hours":
      return timeInSeconds / 20 / 216 ;
    case "work":
      return timeInSeconds / 57.6 / 60;
    case "rest":
      return timeInSeconds / 14.4 / 60;
    default:
      return null;
  }
}

function addMessage(message, sender) {
  const messageNode = document.createElement("p");
  messageNode.innerHTML = `<b>${sender}:</b> ${message}`;
  chatBox.appendChild(messageNode);
}
