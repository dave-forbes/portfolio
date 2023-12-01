const circle = document.querySelector(".circle");

function circleMove() {
  translateX =
    Math.floor((Math.random() * window.innerWidth) / 4) - window.innerWidth / 8;
  translateY =
    Math.floor((Math.random() * window.innerHeight) / 4) -
    window.innerHeight / 8;
  console.log({ translateX, translateY });
  circle.style.cssText = `transform: translate(${translateX}px, ${translateY}px)`;
}

let circleMoveInterval = setInterval(circleMove, 10000);

circle.addEventListener("mouseover", () => {
  circle.style.cssText =
    "transform: translate(0px, 0px); transition: transform 30s linear;";
});

circle.addEventListener("mouseout", circleMove);

circleMove();

let prevScrollpos = window.scrollY;

function scrollHeader() {
  const currentScrollPos = window.scrollY;
  const header = document.querySelector("header");

  if (window.innerWidth < 500) {
    const svg = `<svg fill="#000000" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
    viewBox="0 0 330 330" xml:space="preserve">
 <path id="XMLID_224_" d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394
   l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393
   C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"/>
 </svg>`;
    header.innerHTML = `<p><a href="#hero">${svg} Back to top</a></p>`;
    header.style.textAlign = "center";
  }

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
