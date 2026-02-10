function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


// =========================
// BACKGROUND AUDIO CONTROL
// =========================

const bgMusic = document.getElementById("bg-music");
const audioBtn = document.getElementById("audio-btn");
const audioIcon = document.getElementById("audio-icon");

bgMusic.volume = 0.25;

// Auto-start music on first user interaction
const startMusic = () => {
  bgMusic.play().then(() => {
    audioIcon.src = "./assets/backgrounds/space1.png";
  }).catch(() => {});

  document.removeEventListener("click", startMusic);
  document.removeEventListener("keydown", startMusic);
};

document.addEventListener("click", startMusic);
document.addEventListener("keydown", startMusic);

// Play / Pause toggle
audioBtn.addEventListener("click", (e) => {
  e.stopPropagation();

  if (bgMusic.paused) {
    bgMusic.play();
    audioIcon.src = "./assets/backgrounds/space1.png";
  } else {
    bgMusic.pause();
    audioIcon.src = "./assets/backgrounds/space1.png";
  }
});
