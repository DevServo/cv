//Sections Animations 
const sections = {
  bio: { element: document.querySelector(".bio"), anchor: document.getElementById("bio"), close: document.querySelector(".close-bio") },
  experience: { element: document.querySelector(".experience"), anchor: document.getElementById("experience"), close: document.querySelector(".close-experience") },
  portfolio: { element: document.querySelector(".portfolio"), anchor: document.getElementById("portfolio"), close: document.querySelector(".close-portfolio") },
  contact: { element: document.querySelector(".contact"), anchor: document.getElementById("contact"), close: document.querySelector(".close-contact") },
  skills: { element: document.querySelector(".skills"), anchor: document.getElementById("skills"), close: document.querySelector(".close-skills") }
};

function sectionProperties(section) {
  section.anchor.addEventListener("click", () => {
    section.element.style.opacity = 1;
    section.element.style.transform = "scale(1)";
  });

  section.close.addEventListener("click", (e) => {
    const sectionToClose = e.target.closest('.bio, .experience, .portfolio, .contact, .skills');
    if (sectionToClose) {
      sectionToClose.style.opacity = 0;
      sectionToClose.style.transform = "scale(0)";
    }
  });
}

Object.values(sections).forEach(sectionProperties);




// Function to update letter colors based on vertical position
function updateLetterColors() {
  const letters = document.querySelectorAll(".letter");
  const viewportHeight = window.innerHeight;

  letters.forEach((letter) => {
    const rect = letter.getBoundingClientRect();
    const letterTop = rect.top;
    const letterBottom = rect.bottom;
    const middle = viewportHeight / 2;

    // changing letters colors from bacl to white and vice versa
    if (letterBottom < middle) {
      letter.style.fill = "white";
    } else if (letterTop > middle) {
      letter.style.fill = "black";
    } else {
      letter.style.fill = "";
    }
  });
}

// Update letter colors periodically
setInterval(updateLetterColors, 100);

// Selects all circular text elements
const circularTexts = document.querySelectorAll(".circular-text");

// Function to pause all animations
function pauseAllAnimations() {
  circularTexts.forEach((text) => {
    text.style.animationPlayState = "paused";
  });
}

// Function to resume all animations
function resumeAllAnimations() {
  circularTexts.forEach((text) => {
    text.style.animationPlayState = "running";
  });
}

// Add event listeners to all circular text elements
circularTexts.forEach((text) => {
  text.addEventListener("mouseenter", pauseAllAnimations);
  text.addEventListener("mouseleave", resumeAllAnimations);

  text.addEventListener("pointerdown", pauseAllAnimations);
  text.addEventListener("pointerup", resumeAllAnimations);


});


//Display logos deisgn using swiperJS
const swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 500, 
    disableOnInteraction: false,
  },
});