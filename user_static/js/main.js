document.addEventListener("DOMContentLoaded", () => {
  function updateModals() {
    // Re-initialize modals
    let elements = document.querySelectorAll(".modal");
    M.Modal.init(elements);

    // Match Media Query and Loop through all Modals
    if (window.matchMedia("(max-width: 600px)").matches) {
      for (let i = 0; i < elements.length; i++) {
        const element = elements[i];

        if (!element.classList.contains("bottom-sheet")) {
          element.classList.add("bottom-sheet");
        }
      }
    } else {
      for (let i = 0; i < elements.length; i++) {
        const element = elements[i];

        if (element.classList.contains("bottom-sheet")) {
          element.classList.remove("bottom-sheet");
        }
      }
    }
  }
  // Adding event listener and inital execution of updateModals()
  window.addEventListener("resize", updateModals);
  updateModals();

  // Initialization Code for Modals
  let modals = document.querySelectorAll(".modal");
  M.Modal.init(modals);
});
