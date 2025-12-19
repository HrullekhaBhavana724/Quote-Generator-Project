const quotes = [
  "Believe in yourself.",
  "Success is not final, failure is not fatal.",
  "Dream big and dare to fail.",
  "Hard work beats talent.",
  "Stay positive, work hard, make it happen."
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerText = quotes[randomIndex];
}