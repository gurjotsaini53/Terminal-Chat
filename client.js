const readline = require("readline");
const io = require("socket.io-client");
const os = require("os");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const socket = io("http://localhost:3000"); // Adjust the URL as needed

socket.on("connect", () => {
  console.log("Connected to server");

  rl.on("line", (input) => {
    const user = os.hostname;
    socket.emit("message", os + " " + input);
  });
});

socket.on("message", (message) => {
  const user = os.hostname;
  console.log("Received:", user + " " + message);
});

socket.on("disconnect", () => {
  console.log("Disconnected from server");
});
