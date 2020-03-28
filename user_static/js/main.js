document.addEventListener("DOMContentLoaded", () => {
  let modals = document.querySelectorAll(".modal");
  M.Modal.init(modals);

  let addModal = document.getElementById("add-task");
  let addModalInstance = M.Modal.getInstance(addModal);
});
