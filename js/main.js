// Sluit het mobile dropdownmenu (details) wanneer je een item aanklikt
document.querySelectorAll(".nav-details .nav-panel a").forEach((a) => {
    a.addEventListener("click", () => {
      const details = document.querySelector(".nav-details");
      if (details) details.open = false;
    });
  });
  