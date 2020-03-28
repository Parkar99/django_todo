let isDeleting = false;

function toggleTask(element) {
  let title = element.getElementsByClassName("task-title");
  title = title[0];

  let checkbox = element.getElementsByTagName("input");
  checkbox = checkbox[0];
  checkbox.checked = !checkbox.checked;

  if (checkbox.checked) {
    title.classList.add("done");
  } else {
    title.classList.remove("done");
  }

  let label = element.getElementsByTagName("label");
  label = label[0];

  label.addEventListener("click", function() {
    let title = this.getElementsByClassName("task-title");
    title = title[0];

    if (checkbox.checked) {
      title.classList.add("done");
    } else {
      title.classList.remove("done");
    }
  });

  if (!isDeleting) {
    const taskId = element.getAttribute("data-id");

    if (taskId === "") {
      M.toast({
        html: "Something Went Wrong",
        classes: "rounded red white-text bold-text"
      });
    } else {
      const url = "/";
      const data = {
        id: taskId,
        is_done: checkbox.checked
      };
      const options = {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": Cookies.get("csrftoken")
        }
      };

      fetch(url, options)
        .then(res => res.json())
        .then(res => {
          if (res.details === "error") {
            M.toast({
              html: "Something Went Wrong",
              classes: "rounded red white-text bold-text"
            });

            let addTaskModal = document.getElementById("add-task");
            let addTaskModalInstance = M.Modal.getInstance(addTaskModal);

            addTaskModalInstance.close();
          } else if (res.details === "success") {
            return;
          } else {
            M.toast({
              html: "Unknown Error...",
              classes: "rounded red white-text bold-text"
            });

            let addTaskModal = document.getElementById("add-task");
            let addTaskModalInstance = M.Modal.getInstance(addTaskModal);

            addTaskModalInstance.close();
          }
        });
    }
  }
}

function addTask() {
  const taskText = document.getElementById("add-task-text").value;

  if (taskText === "") {
    M.toast({
      html: "Text Field Cannot Be Empty",
      classes: "rounded red white-text bold-text"
    });
  } else {
    const url = "/";
    const data = {
      task: taskText
    };
    const options = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": Cookies.get("csrftoken")
      }
    };

    fetch(url, options)
      .then(res => res.json())
      .then(res => {
        if (res.details === "error") {
          M.toast({
            html: "Something Went Wrong",
            classes: "rounded red white-text bold-text"
          });

          let addTaskModal = document.getElementById("add-task");
          let addTaskModalInstance = M.Modal.getInstance(addTaskModal);

          addTaskModalInstance.close();
        } else if (res.details === "success") {
          location.reload();
        } else {
          M.toast({
            html: "Unknown Error...",
            classes: "rounded red white-text bold-text"
          });

          let addTaskModal = document.getElementById("add-task");
          let addTaskModalInstance = M.Modal.getInstance(addTaskModal);

          addTaskModalInstance.close();
        }
      });
  }
}

function deleteTask(element) {
  isDeleting = true;
  const taskId = element.getAttribute("data-id");

  toggleTask(element.parentElement.parentElement);

  if (taskId === "") {
    M.toast({
      html: "Something Went Wrong",
      classes: "rounded red white-text bold-text"
    });
  } else {
    const url = "/";
    const data = {
      id: taskId
    };
    const options = {
      method: "DELETE",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": Cookies.get("csrftoken")
      }
    };

    fetch(url, options)
      .then(res => res.json())
      .then(res => {
        if (res.details === "error") {
          M.toast({
            html: "Something Went Wrong",
            classes: "rounded red white-text bold-text"
          });

          let addTaskModal = document.getElementById("add-task");
          let addTaskModalInstance = M.Modal.getInstance(addTaskModal);

          addTaskModalInstance.close();
        } else if (res.details === "success") {
          location.reload();
        } else {
          M.toast({
            html: "Unknown Error...",
            classes: "rounded red white-text bold-text"
          });

          let addTaskModal = document.getElementById("add-task");
          let addTaskModalInstance = M.Modal.getInstance(addTaskModal);

          addTaskModalInstance.close();
        }
      });
  }
}
