// const scrollBtn = document.createElement("button");
// scrollBtn.innerHTML = "↑";
// scrollBtn.style.position = "fixed";
// scrollBtn.style.bottom = "20px";
// scrollBtn.style.right = "40px";
// scrollBtn.style.padding = "10px 15px";
// scrollBtn.style.border = "none";
// scrollBtn.style.borderRadius = "30px";
// scrollBtn.style.backgroundColor = "#333";
// scrollBtn.style.color = "#fff";
// scrollBtn.style.cursor = "pointer";
// scrollBtn.style.display = "none";
// scrollBtn.style.zIndex = "1000";
// document.body.appendChild(scrollBtn);

// window.addEventListener("scroll", () => {
//   scrollBtn.style.display = window.scrollY > 500 ? "block" : "none";
// });

// scrollBtn.addEventListener("click", () => {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// });

// for the sidebar
function closeSideBar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}

function showSideBar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}

// Scroll Reveal
ScrollReveal().reveal(".hero-text h1", {
  origin: "bottom",
  distance: "40px",
  duration: 800,
  easing: "ease-in-out",
  opacity: 0,
  reset: true,
});

ScrollReveal().reveal(".hero-text p", {
  origin: "bottom",
  distance: "30px",
  duration: 700,
  easing: "ease-in-out",
  delay: 200,
  opacity: 0,
  reset: true,
});

ScrollReveal().reveal(".cards", {
  origin: "bottom",
  distance: "40px",
  duration: 900,
  easing: "ease-in-out",
  opacity: 0,
  interval: 200,
  reset: true,
});

ScrollReveal().reveal(".about-left", {
  origin: "left",
  distance: "40px",
  duration: 900,
  easing: "ease-in-out",
  opacity: 0,
  reset: true,
});

ScrollReveal().reveal(".about-right", {
  origin: "right",
  distance: "15px",
  duration: 800,
  easing: "ease-in-out",
  opacity: 0,
  reset: true,
});

ScrollReveal().reveal(".advantages h2", {
  origin: "bottom",
  distance: "40px",
  duration: 900,
  easing: "ease-in-out",
  opacity: 0,
  reset: true,
});

ScrollReveal().reveal("adv-cards span-two-rolls", {
  origin: "left",
  distance: "40px",
  duration: 900,
  easing: "ease-in-out",
  opacity: 0,
  interval: 200,
  reset: true,
});

ScrollReveal().reveal(".padding", {
  origin: "bottom",
  distance: "40px",
  duration: 900,
  delay: 200,
  easing: "ease-in-out",
  opacity: 0,
  interval: 200,
  reset: true,
});

// function animateCountUp(element, target, duration = 2000) {
//   let start = 0;
//   let startTime = null;
//   target = +target;
//   function update(timestamp) {
//     if (!startTime) startTime = timestamp;
//     const progress = Math.min((timestamp - startTime) / duration, 1);
//     element.textContent = Math.floor(progress * target);
//     if (progress < 1) {
//       requestAnimationFrame(update);
//     } else {
//       element.textContent = target + "+"; // Add "+" if you want
//     }
//   }
//   requestAnimationFrame(update);
// }

// // Trigger count up when stats section is revealed
// ScrollReveal().reveal('.stats > div', {
//   origin: 'bottom',
//   distance: '40px',
//   duration: 900,
//   easing: 'ease-in-out',
//   opacity: 0,
//   interval: 200,
//   reset: true,
//   afterReveal: function(el) {
//     const countEl = el.querySelector('.count');
//     if (countEl && !countEl.dataset.animated) {
//       animateCountUp(countEl, countEl.dataset.target);
//       countEl.dataset.animated = "true";
//     }
//   }
// });

// Newsletter submission interactivity
const form = document.getElementById("newsletterForm");
const message = document.getElementById("form-message");

form.addEventListener("submit", async (e) => {
  // prevents browsers default behaviour ie to reload the page after submitting a form
  e.preventDefault();

  // fetches the text the user typed
  const input = form.querySelector("input[type='email']");
  const email = input.value.trim();

  if (!email) return showMessage("Please enter a valid email.", "error");

  // Send to Formspree
  try {
    // fetch is an in-built browser function to send HTTP requests & "from.action"-the fromspree link
    const response = await fetch(form.action, {
      method: form.method, // post
      body: new FormData(form), // gathers and sends all <input> fields
      headers: { Accept: "application/json" },
    });

    // response.ok - data successfully reaches formspree
    if (response.ok) {
      showMessage(`🎉 Thank you for subscribing, ${email}!`, "success");
      input.value = ""; // clear the input
      console.log("Submitted email:", email); // for debugging
    } 
    
    else {
      showMessage("⚠️ Oops! Something went wrong. Please try again.", "error");
    }

    //incase data failed to send..
  }
  
  catch (err) {
    console.error(err);
    showMessage("Network error. Please check your connection.", "error");
  }
});

function showMessage(text, type) {
  message.textContent = text;
  message.className = ""; // reset classes
  message.classList.add(type);

  setTimeout(() => {
    message.classList.remove("hidden");
  }, 50);

  setTimeout(() => {
    message.classList.add("hidden");
  }, 4000); // hides message after 4 seconds
}

// Scroll Reveal for new sections
ScrollReveal().reveal(".testimonials h2, .newsletter h2, .footer", {
  origin: "bottom",
  distance: "40px",
  duration: 900,
  easing: "ease-in-out",
  opacity: 0,
  reset: true,
});

ScrollReveal().reveal(".testi-card, .newsletter form", {
  origin: "bottom",
  distance: "30px",
  easing: "ease-in-out",
  duration: 700,
  delay: 200,
  opacity: 0,
  interval: 200,
  reset: true,
});
