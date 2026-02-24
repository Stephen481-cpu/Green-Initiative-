/* ===========================
   Responsive Navigation
   =========================== */
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav");
  const toggleBtn = document.createElement("button");
  toggleBtn.innerText = "☰ Menu";
  toggleBtn.classList.add("nav-toggle");

  // Insert toggle button before nav links
  nav.insertBefore(toggleBtn, nav.firstChild);

  toggleBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
});

/* ===========================
   Gallery Lightbox
   =========================== */
const galleryImages = document.querySelectorAll(".gallery img");

galleryImages.forEach(img => {
  img.addEventListener("click", () => {
    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    lightbox.style.position = "fixed";
    lightbox.style.top = "0";
    lightbox.style.left = "0";
    lightbox.style.width = "100%";
    lightbox.style.height = "100%";
    lightbox.style.background = "rgba(0,0,0,0.8)";
    lightbox.style.display = "flex";
    lightbox.style.alignItems = "center";
    lightbox.style.justifyContent = "center";
    lightbox.style.zIndex = "1000";

    const imgClone = document.createElement("img");
    imgClone.src = img.src;
    imgClone.style.maxWidth = "90%";
    imgClone.style.maxHeight = "90%";
    imgClone.style.borderRadius = "8px";

    lightbox.appendChild(imgClone);
    document.body.appendChild(lightbox);

    lightbox.addEventListener("click", () => {
      document.body.removeChild(lightbox);
    });
  });
});

/* ===========================
   Form Validation
   =========================== */
const forms = document.querySelectorAll("form");

forms.forEach(form => {
  form.addEventListener("submit", e => {
    const inputs = form.querySelectorAll("input[required], textarea[required]");
    let valid = true;

    inputs.forEach(input => {
      if (!input.value.trim()) {
        valid = false;
        input.style.border = "2px solid red";
      } else {
        input.style.border = "1px solid #ccc";
      }
    });

    if (!valid) {
      e.preventDefault();
      alert("Please fill in all required fields.");
    }
  });
});

/* ===========================
   Dynamic Footer Year
   =========================== */
const yearSpan = document.querySelector("#year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
