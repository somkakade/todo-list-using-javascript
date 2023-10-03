const textInputFiled = document.querySelector("#input-text-filed");
const addButton = document.querySelector("#add-btn");
const todosContainer = document.querySelector(".todos-container");
const errorMessage = document.querySelector(".error-wrapper");

addButton.addEventListener("click", () => {
  if (textInputFiled.value == "") {
    const errorItemContainer = document.createElement("div");
    // Created error message container and added class:erro-item-container
    errorItemContainer.classList.add("erro-item-container");
    errorMessage.appendChild(errorItemContainer);

    // Creatinng p element and adding class:error-message
    const errorText = document.createElement("p");
    errorText.id = "error-message";
    errorText.innerText = "Please Enter Something";
    errorItemContainer.appendChild(errorText);
    return;
  } else {
    //  Create todos item container and add classs

    const todoItemContainer = document.createElement("div");
    todoItemContainer.classList.add("todos-item-container");
    todosContainer.appendChild(todoItemContainer);

    //   Create p Element and add id todo-text
    const todoText = document.createElement("p");
    todoText.id = "todo-text";
    todoText.innerText = textInputFiled.value;
    todoItemContainer.appendChild(todoText);

    //   Click event for to do text when task done
    todoText.addEventListener("dblclick", () => {
      todoText.classList.add("line-through");
      editButton.setAttribute("disabled", "disabled");
    });

    //   Create edit button and add edit-button id
    const editButton = document.createElement("button");
    editButton.id = "edit-button";
    const editImage = document.createElement("img");
    editImage.src = "edit.svg";
    editButton.appendChild(editImage);
    todoItemContainer.appendChild(editButton);

    //   click event for edit button
    editButton.addEventListener("click", () => {
      textInputFiled.value = todoText.innerText;
      const parent = editButton.parentElement;
      parent.parentElement.removeChild(parent);
    });

    //   Create delete button and add id delete-button
    const deleteButton = document.createElement("button");
    deleteButton.id = "delete-button";
    const deletImage = document.createElement("img");
    deletImage.src = "delete.svg";
    deleteButton.appendChild(deletImage);
    todoItemContainer.appendChild(deleteButton);

    //   click event for delete the delete button
    deleteButton.addEventListener("click", () => {
      const parent = deleteButton.parentElement;
      parent.parentElement.removeChild(parent);
    });
  }

  // add dynamic class for todo text

  textInputFiled.value = "";
});
