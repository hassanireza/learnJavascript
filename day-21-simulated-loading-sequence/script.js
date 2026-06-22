// Day 21 Project: Simulated Loading Sequence

const status = document.querySelector("#status");
const startBtn = document.querySelector("#start-btn");

function connect(callback) {
  status.textContent = "Connecting...";
  setTimeout(callback, 1000);
}

function authenticate(callback) {
  status.textContent = "Authenticating...";
  setTimeout(callback, 1000);
}

function loadDashboard(callback) {
  status.textContent = "Loading dashboard...";
  setTimeout(callback, 1000);
}

// TODO: On startBtn click, chain connect -> authenticate -> loadDashboard
//       then display "Ready!" in `status`

console.log("Simulated Loading Sequence script loaded.");
