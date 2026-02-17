const drumButtons = document.querySelectorAll(".drum");

function withLogging(actionName, callback) {
  console.log("Action:", actionName);
  callback();
}

function getSoundFileByKey(key) {
  switch (key) {
    case "w":
      return "sounds/crash.mp3";
    case "a":
      return "sounds/kick-bass.mp3";
    case "s":
      return "sounds/snare.mp3";
    case "d":
      return "sounds/tom-1.mp3";
    case "j":
      return "sounds/tom-2.mp3";
    case "k":
      return "sounds/tom-3.mp3";
    case "l":
      return "sounds/tom-4.mp3";
    default:
      return null;
  }
}

function playSound(soundFile) {
  if (!soundFile) return;
  const audio = new Audio(soundFile);
  audio.play();
}

function animateButtonByKey(key) {
  const activeButton = document.querySelector("." + key);
  if (!activeButton) return;

  activeButton.classList.add("pressed");

  setTimeout(() => {
    activeButton.classList.remove("pressed");
  }, 100);
}

const drumPad = {
  play(key) {
    const soundFile = getSoundFileByKey(key);
    playSound(soundFile);
  },
  animate(key) {
    animateButtonByKey(key);
  },
  handleInput(key) {
    this.play(key);
    this.animate(key);
  },
};

drumButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const key = this.innerText.toLowerCase();
    withLogging("click", () => {
      drumPad.handleInput(key);
    });
  });
});

document.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase();
  withLogging("keypress", () => {
    drumPad.handleInput(key);
  });
});
