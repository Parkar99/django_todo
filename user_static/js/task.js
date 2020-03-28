function toggleTask(element) {
  let title = element.getElementsByClassName("task-title");
  title = title[0];
  title.classList.toggle("done");

  let checkbox = element.getElementsByTagName("input");
  checkbox = checkbox[0];
  checkbox.checked = !checkbox.checked;

  let label = element.getElementsByTagName("label");
  label = label[0];

  label.addEventListener("click", function() {
    let title = this.getElementsByClassName("task-title");
    title = title[0];
    title.classList.toggle("done");
  });
}
