// Day 23 Project: Quote Generator

const quoteEl = document.querySelector("#quote");
const newQuoteBtn = document.querySelector("#new-quote-btn");

const quotes = [
  { text: "Code is read more often than it is written.", author: "Unknown" },
  { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
  { text: "Make it work, then make it right, then make it fast.", author: "Kent Beck" },
];

function getRandomQuote() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // TODO: roughly 10% of the time, reject with new Error("Failed to load quote.")
      // TODO: otherwise resolve with a random item from `quotes`
    }, 700);
  });
}

// TODO: Write async function showNewQuote() using await and try/catch
// TODO: Call showNewQuote() when newQuoteBtn is clicked

console.log("Quote Generator script loaded.");
