// Day 22 Project: Random User Card Generator

const generateBtn = document.querySelector("#generate-btn");
const cardContainer = document.querySelector("#card-container");

const names = ["Sora", "Mateo", "Iris", "Theo", "Nadia"];
const cities = ["Lisbon", "Tokyo", "Berlin", "Cairo", "Lima"];

function generateRandomUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // TODO: roughly 20% of the time, reject with new Error("Failed to load user.")
      // TODO: otherwise resolve with a random { name, age, city } object
    }, 800);
  });
}

// TODO: On generateBtn click, call generateRandomUser()
//       Render a card with .then(), show an error message with .catch()

console.log("Random User Card Generator script loaded.");
