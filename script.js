const formInput = document.getElementById("todo-form-input");
const itemContainer = document.getElementById("item-container");

function createItem(e) {
  e.preventDefault();
  const inputValue = formInput.value;

  const item = document.createElement("div");
  item.classList.add("item");
  item.innerHTML = `
            <input type="checkbox" onclick="completeItem(event);">
            <span>${inputValue}</span>
            <button onclick="deleteItem(event);">삭제</button>
        `;
  itemContainer.prepend(item);
  formInput.value = "";
}

function completeItem(e) {
  if (e.target.tagName === "INPUT") {
    e.target.parentElement.classList.toggle("completed");
  }
}

function deleteItem(e) {
  if (e.target.tagName === "BUTTON") {
    const item = e.target.parentElement;
    itemContainer.removeChild(item);
  }
}
