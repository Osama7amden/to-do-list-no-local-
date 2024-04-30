function doTask() {
  let task = document.getElementById("input").value;
  if (task) {
    let newTask = document.createElement("li");
    let remove = document.createElement("span");
    // removing task
    remove.onclick = function removing() {
      newTask.remove();
    };
    newTask.appendChild(document.createTextNode(task));
    document.getElementById("myList").appendChild(newTask);
    newTask.appendChild(remove);
    remove.innerHTML = `<i class="fa-solid fa-x"></i>`;
    //   marked task
    newTask.onclick = function marked() {
      newTask.classList.toggle("marked")
    };
    document.getElementById("input").value = "";
  }
}
// add items to local storage
// coming soon
