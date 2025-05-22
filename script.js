// Tracking time since February 6, 2025
const startDate = new Date("February 6, 2025 00:00:00").getTime();
const daysSpan = document.getElementById("days");
const hoursSpan = document.getElementById("hours");
const minutesSpan = document.getElementById("minutes");
const secondsSpan = document.getElementById("seconds");

function updateTimer() {
  const now = new Date().getTime();
  const distance = now - startDate;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysSpan.innerHTML = days;
  hoursSpan.innerHTML = hours;
  minutesSpan.innerHTML = minutes;
  secondsSpan.innerHTML = seconds;
}

// Update every second to keep it live
setInterval(updateTimer, 1000);
updateTimer(); // Initial run
// Floating hearts animation
const container = document.querySelector(".hearts-container");

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 2 + Math.random() * 3 + "s";
  container.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 400);
// Music play button
const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-btn");

musicBtn.addEventListener("click", () => {
  music.play();
  musicBtn.style.display = "none"; // Hide button after starting
});
// Calculate months since relationship start
function updateMonthCount() {
  const start = new Date("February 6, 2025 07:47:00");
  const now = new Date();

  const years = now.getFullYear() - start.getFullYear();
  const months = now.getMonth() - start.getMonth() + years * 12;

  const dayOffset = now.getDate() < start.getDate() ? -1 : 0;
  const trueMonths = months + dayOffset;

  const monthText = trueMonths <= 0 
    ? "Started our love journey 💞" 
    : `Celebrating ${trueMonths} month${trueMonths > 1 ? "s" : ""} of Love 💖`;

  document.getElementById("month-count").innerText = monthText;
}

updateMonthCount();
