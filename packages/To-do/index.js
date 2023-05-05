const nameInput = document.getElementById("name-input");
const listsEl = document.getElementById("lists");
const listStorage = [];

nameInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const userInput = e.target.value;
    if (userInput.length > 0) {
      listStorage.push(userInput);

      e.target.value = "";

      render(listStorage);
    }
  }
});

/**
 * Tento kód vytvára nové pole s názvom "newArr" pomocou metódy "map()" z existujúceho poľa "arr".
 * Pre každý prvok (item) v poli "arr" vykonáva funkciu, ktorá:
 *
 * 1. Vytvorí nový "div" element s názvom "listDiv".
 * 2. Nastaví textový obsah "listDiv" na reťazec skládajúci sa z pomlčky a prvku (item) z poľa "arr".
 * 3. Vracia "listDiv" ako nový prvok vytvoreného poľa "newArr".
 *
 * Potom kód používa metódu "replaceChildren()" na elemente "listsEl" pre nahradenie jeho aktuálneho obsahu
 * novými "div" elementami, ktoré boli vytvorené v poli "newArr".
 * To znamená, že "listsEl" bude obsahovať nové "div" elementy,
 * ktoré zobrazujú položky z poľa "arr" s pomlčkami na začiatku.
 */
function render(arr) {
  const newArr = arr.map((item) => {
    const listDiv = document.createElement("div");
    listDiv.textContent = `- ${item}`;
    return listDiv;
  });

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
  listsEl.replaceChildren(...newArr);
}
