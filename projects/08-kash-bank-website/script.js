"use strict";

// Elements
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabs = document.querySelectorAll(".operations__tab");
const tabsContent = document.querySelectorAll(".operations__content");
const allSections = document.querySelectorAll(".section");
const imageTargets = document.querySelectorAll("img[data-src]");

// Scroll to section
btnScrollTo.addEventListener("click", (e) => {
  const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);

  // console.log("Current scroll (X/Y)", window.pageXOffset, window.pageYOffset);

  // console.log(
  //   "height/width viewport",
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  // The old way
  // window.scrollTo(s1coords.left, s1coords.top + window.pageYOffset);
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: "smooth",
  // });

  // The new way
  section1.scrollIntoView({ behavior: "smooth" });
});

// Page Navigation
document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

const handleHover = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;

    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });

    logo.style.opacity = this;
  }
};

nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));

// Sticky navigation
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

// Reveal
const revealSection = function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    entry.target.classList.remove("section--hidden");
    observer.unobserve(entry.target);
  });
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

// Lazy loading images
const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  // rootMargin: "0px",
});

imageTargets.forEach((img) => imgObserver.observe(img));

// Tabbed component
tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");

  // Guard clause
  if (!clicked) return;

  // Remove active classes
  tabs.forEach((t) => t.classList.remove("operations__tab--active"));
  tabsContent.forEach((c) => c.classList.remove("operations__content--active"));

  // Activate tab
  clicked.classList.add("operations__tab--active");

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

// Slider component – Testimonial section

const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const dotContainer = document.querySelector(".dots");

  // Slider counter and number of slides
  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slider
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  // Previous slide
  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };

  init();

  // Event handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;

      goToSlide(slide);
      activateDot(slide);
    }
  });
};

slider();

/*

// Selecting Elements

// 1. documentElement, head, body
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

// 1. querySelector, querySelectorAll
const header = document.querySelector(".header");
const section = document.querySelector("#section--1");
const allSections = document.querySelectorAll(".section");

// 2. getElementById
console.log(document.getElementById("section--1"));

// 3. getElementsByTagName
const allButtons = document.getElementsByTagName("button");
console.log(allButtons);


// Creating Elements

// 1. createElement()
const message = document.createElement("div");
message.classList.add("cookie-message");

// 2. innerHTML
// message.textContent = "We use cookies for improved functionality and analytics";
message.innerHTML =
  "We use cookies for improved functionality and analytics. <button class='btn--close-cookie'>Got it!</button>";

// 3. prepend(), append()
const header = document.querySelector(".header");
header.prepend(message);
// header.append(message);

// 4. cloneNode(true)
// header.prepend(message.cloneNode());

// 5. before(), after()
// before()
// header.before(message);
// header.after(message);

// 6. remove()
// message.remove();

document.querySelector(".btn--close-cookie").addEventListener("click", () => {
  message.remove();
});

// Styles, Attributes and Classes

// 1. Styles
// getComputedStyle()
message.style.backgroundColor = "#37383d";
message.style.padding = "8px 0px";

const fontSize = getComputedStyle(message).fontSize;
console.log(fontSize);

// setProperty()
document.documentElement.style.setProperty("--color-primary", "orangered");

// getAttribute()
const logoAttr = document.getElementById("logo").getAttribute("designer");
const logoV = document
  .getElementById("logo")
  .getAttribute("data-version-number");
console.log(logoAttr);
console.log(logoV);

// setAttribute()
document.getElementById("logo").setAttribute("designer", "Aisha");
const logoCompAttr = document.getElementById("logo").getAttribute("company");
// console.log(document.getElementById("logo").getAttribute("company"));
// document.getElementById("logo").id = "brand_logo";

// Absolute and relative source/links
console.log(document.getElementById("logo").src);
console.log(document.getElementById("logo").getAttribute("src"));
console.log(document.querySelector(".nav__link").href);
console.log(document.querySelector(".nav__link").getAttribute("href"));


// Data attributes
console.log(document.getElementById("logo").dataset.versionNumber);
console.log(document.getElementById("logo").dataset.imageCode);

// Classes
console.log(document.getElementById("logo").classList); //DOMTokenList - array
console.log(document.getElementById("logo").className); //Single string of all classes

// add()
document.getElementById("logo").classList.add("c", "j");

// Don't use
// document.getElementById("logo").classList = "kashbank-logo logo-new logo-sm";

// remove()
document.getElementById("logo").classList.remove("j");

// toggle()
document.getElementById("logo").classList.toggle("j");

// contains()
document.getElementById("logo").classList.contains("j");

console.log(document.getElementById("logo").classList.contains("c"));
// console.log(document.getElementById("logo").className);
// console.log(document.getElementById("logo").className);


// Events

// addEventListener()
// mouseenter()
const h1 = document.querySelector("h1");
const header = document.querySelector("header");
const alertH1 = function (e) {
  alert("Great! Your are reading the heading");
};

// h1.addEventListener("mouseenter", alertH1);

// on - property
// h1.onmouseenter = function (e) {
//   alert("Great! Your are reading the heading");
// };

// remove
// h1.removeEventListener("mouseenter", alertH1);
// setTimeout(() => h1.removeEventListener("mouseenter", alertH1), 2000);

// Event Propagation: Bubbling and Capturing

// Capturing and Bubbling
h1.addEventListener("click", (e) => {
  console.log("H1: You just clicked me: ", e.target);
});

// header.addEventListener("click", (e) => {
//   console.log("Header: You just clicked me: ", e.target);
// });

// Event Propagation in practice
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

// document.querySelector(".nav__link").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
// });

// document.querySelector(".nav__links").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
// });

// document.querySelector(".nav").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
// });


// Event Delegation: Implementing Page Navigation
// document.querySelector(".nav__links").addEventListener("click", function (e) {
//   e.preventDefault();

//   if (e.target.classList.contains("nav__link")) {
//     const id = e.target.getAttribute("href");
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   }
// });

// DOM Traversing

// Going downwards
const h1 = document.querySelector("h1");
const highlight = h1.querySelector(".highlight");
console.log(highlight);

// childNodes
console.log(h1.childNodes);
console.log(document.querySelector(".nav__links").childNodes);

// textContent
console.log(h1.textContent);
console.log(h1.innerHTML);

// children
console.log(h1.children);

// firstElementChild
console.log(h1.firstElementChild);
h1.firstElementChild.style.color = "white";

// lastElementChild
h1.lastElementChild.style.color = "orangered";

// Going upwards

// parentNode
console.log(h1.parentNode);

// parentElement
console.log(h1.parentElement);

//
console.log(h1.closest(".header"));

// Going sideways

// previousElementSibling
console.log(h1.previousElementSibling);

// nextElementSibling
console.log(h1.nextElementSibling);

// all siblings - trick
console.log(h1.parentElement.children);

// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = "scale(0.5)";
// });

const h1 = document.querySelector("h1");


function handler(event, num) {
  console.log("Event target: ", event.target);
  console.log("Second arg: ", num * num);
}

h1.addEventListener("mouseover", function (e) {
  handler(e, 0.5);
});


const nav = document.querySelector(".nav");

const handleHover = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;

    const siblings = link.closest(".nav").querySelectorAll(".nav__link");

    const logo = link.closest(".nav").querySelector("img");

    console.log("event argument: ", e);
    console.log("this keyword: ", this);
    console.log("second argument: ", this);

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));


// Scroll Event
const initialCords = section1.getBoundingClientRect();

window.addEventListener("scroll", function () {
  if (window.scrollY > initialCords.top) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
});


// Intersection Observer API

// STEP 0: Callback function to use with observer
const obsCallback = function (entries, observer) {
  // console.log(entries);
  alert("It's intersecting!");
};

// STEP 3: Create observer options
const obsOptions = {
  root: null,
  threshold: [0.1, 0.2, 0.5],
};

// STEP 2: Create new observer
const observer = new IntersectionObserver(obsCallback, obsOptions);

// STEP 3: Call the observe method
observer.observe(section1);


// Lifecycle DOM Events

// DOMContentLoaded
document.addEventListener("DOMContentLoaded", (e) => {
  console.log("HTML parsed and DOM tree built!", e);
});

// load
window.addEventListener("load", (e) => {
  console.log("Page fully loaded!", e);
});

window.addEventListener("beforeunload", (e) => {
  e.preventDefault();
  console.log(e);
  e.returnValue = "";
});
*/
