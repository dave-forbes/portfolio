function circleMove() {
  const circle = document.querySelector(".circle");
  const circleContainer = document.querySelector(".circle-container");
  // const randomX = Math.floor(Math.random() * circleContainer.clientWidth);
  // const randomY = Math.floor(Math.random() * circleContainer.clientHeight);
  // const circleInfo = circle.getBoundingClientRect();
  // const translateX = randomX - circleInfo.x;
  // const translateY = randomY - circleInfo.y;
  const translateX = Math.floor(Math.random() * 300 - 150);
  const translateY = Math.floor(Math.random() * 300 - 150);
  circle.style.cssText = `transform: translate(${translateX}px, ${translateY}px)`;
}

circleMove();

let circleMoveInterval = setInterval(circleMove, 10000);

let prevScrollpos = window.scrollY;

function scrollHeader() {
  const currentScrollPos = window.scrollY;
  const header = document.querySelector("header");

  if (prevScrollpos <= currentScrollPos || currentScrollPos < 100) {
    header.style.top = "-3rem";
  } else {
    header.style.top = "0";
  }
  prevScrollpos = currentScrollPos;
}

function scrollArrow() {
  const currentScrollPos = window.scrollY;
  const arrow = document.querySelector(".down-arrow");

  if (currentScrollPos > 100) {
    arrow.classList.add("hide");
  } else {
    arrow.classList.remove("hide");
  }
  prevScrollpos = currentScrollPos;
}

function scrollProgress() {
  const currentScrollPos = window.scrollY;
  const progress = document.querySelector(".progress-container");
  if (currentScrollPos < 300) {
    progress.classList.add("hide");
  } else {
    progress.classList.remove("hide");
  }
  prevScrollpos = currentScrollPos;
}

window.addEventListener("scroll", scrollHeader);
window.addEventListener("scroll", scrollArrow);
window.addEventListener("scroll", scrollProgress);

function progressbar() {
  const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.height = scrolled + "%";
}

window.addEventListener("scroll", progressbar);

function switchTheme() {
  const root = document.documentElement;
  root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
  const toggle = document.querySelector(".toggle-circle");
  toggle.classList.toggle("toggle-move");
}

const button = document.querySelector("button");

button.addEventListener("click", switchTheme);

const davePic = document.querySelector(".about-container img");

let currentImage = 0;

function displayPicture() {
  const pictureToDisplay = document.querySelector(
    `img[data-index='${currentImage}']`
  );
  pictureToDisplay.classList.toggle("hide");
}

function slideRight() {
  displayPicture();
  if (currentImage !== 2) {
    currentImage += 1;
  } else if (currentImage === 2) {
    currentImage = 0;
  }
  displayPicture();
}

setInterval(slideRight, 10000);
