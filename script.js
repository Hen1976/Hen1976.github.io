const numberForm = document.getElementById('number-form');
const numberInput = document.getElementById('number-input');
const message = document.getElementById('message');

const codes = {
  "45224628": "You have entered the length of 8 words hidden in SzerchnikKalebRofA documentations. [There are more to be uncovered]",
  "534229": "How convenient that the last hidden can uncover another piece. There are various types of pieces. USELESS are pieces with no uses, just a troll or a reminder not to type in every reckless \"PIN\". INFO are pieces that hint to another hidden text to be typed in the cipher. UNCOVER are pieces that hint to a new progress of the completion of the ARG"
  // Add more codes here following the format: "number": "message"
};

numberForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const number = numberInput.value;
  const decodedMessage = codes[number];

  if (decodedMessage) {
    message.textContent = decodedMessage;
  } else {
    message.textContent = "USELESS. You have been reminded NOT to type in stupid letters that do basically nothing.";
  }

  numberInput.value = ""; // Clear input field after submit
});