const nameInput = document.getElementById("name-input");
const listsEl = document.getElementById("lists");
const listStorage = [];

nameInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const userInput = e.target.value;
    if (userInput.length > 0) {
      listStorage.push(userInput);
      e.target.value = "";
      console.log(listStorage);
      render(listStorage);
    }
  }
});

function render(arr) {
  const newArr = arr.map((item) => {
    const listDiv = document.createElement("div");
    listDiv.textContent = `- ${item}`;
    return listDiv;
  });

  listsEl.replaceChildren(...newArr);
}
