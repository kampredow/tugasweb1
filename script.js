AOS.init({ duration: 800, easing: 'ease-in-out', once: true });

feather.replace();

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
  });
});

// // Intro
// document.addEventListener("DOMContentLoaded", () => {
//   const intro = document.getElementById("intro-screen");
//   const enterBtn = document.getElementById("enter-btn");
//   document.body.style.overflow = "hidden";
//   enterBtn.addEventListener("click", () => {
//     intro.classList.add("hidden");
//     document.body.style.overflow = "auto";
//   });
// });

// Swiper
new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 600,
});

const toggle = document.getElementById("theme-toggle");
const body = document.body;

if (localStorage.getItem("theme") === "light") {
  body.classList.add("light-mode");
  toggle.checked = true;
}

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    body.classList.add("light-mode");
    localStorage.setItem("theme", "light");
  } else {
    body.classList.remove("light-mode");
    localStorage.setItem("theme", "dark");
  }
});

// Navbar Active Link
const navLinks = document.querySelectorAll('.nav-links li a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

window.addEventListener('scroll', () => {
  let fromTop = window.scrollY + 150;
  navLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute('href'));
    if (section && section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
