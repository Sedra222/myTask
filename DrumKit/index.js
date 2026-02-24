const drumButtons = document.querySelectorAll(".drum");

const soundMap = {
  w: "sounds/crash.mp3",
  a: "sounds/kick-bass.mp3",
  s: "sounds/snare.mp3",
  d: "sounds/tom-1.mp3",
  j: "sounds/tom-2.mp3",
  k: "sounds/tom-3.mp3",
  l: "sounds/tom-4.mp3",
};

function playSound(key) {
  const soundFile = soundMap[key];
  if (soundFile) {
    const audio = new Audio(soundFile);
    audio.play();
  }
}

function animateButton(key) {
  const activeButton = document.querySelector("." + key);
  if (activeButton) {
    activeButton.classList.add("pressed");
    setTimeout(() => {
      activeButton.classList.remove("pressed");
    }, 100);
  }
}

function handleDrumInput(key) {
  console.log("Action:", key);
  playSound(key);
  animateButton(key);
}

drumButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const key = this.innerText.toLowerCase();
    handleDrumInput(key);
  });
});

document.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase();
  if (soundMap[key]) {
    handleDrumInput(key);
  }
});
