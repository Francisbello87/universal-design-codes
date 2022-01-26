const counters = document.querySelectorAll(".counter");
const speed = 3000;

counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;

    const inc = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + inc);
      setTimeout(updateCount, 1);
    } else {
      count.innerText = target;
    }
  };
  updateCount();
});

const options = { threshold: 0.4 };
const addActiveClass = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let currentActive = document.querySelector(".desktop-nav a.active");
      if (currentActive) {
        currentActive.classList.remove("active");
      }

      let newActive = document.querySelector(
        `.desktop-nav a[href="#${entry.target.getAttribute("id")}"]`
      );

      newActive.classList.add("active");
    }
  });
};

const observer = new IntersectionObserver(addActiveClass, options);
const sections = document.querySelectorAll("section");
sections.forEach((section) => {
  observer.observe(section);
});

const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");
const appearOptions = { threshold: 0, rootMargin: "0px 0px -250px 0px" };
const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach((fader) => appearOnScroll.observe(fader));

sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});

const loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});

const navBar = document.querySelector(".desktop-nav");
const navHeight = navBar.getBoundingClientRect().height;
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > navHeight) {
    navBar.classList.add("fix-nav");
  } else {
    navBar.classList.remove("fix-nav");
  }
});
