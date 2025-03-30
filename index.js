const cards = [...document.getElementsByClassName("card")];

const leftArrow = document.getElementById("left");
const rightArrow = document.getElementById("right");

function reversed(list) {
  let result = new Array();
  for (let i = list.length - 1; i >= 0; i--) {
    result.push(list[i]);
  }
  return result;
}

leftArrow.addEventListener("click", () => {
  let src = cards[cards.length - 1].children[0].src;

  let srcTemp;

  for (let element of cards) {
    let img = element.children[0];
    srcTemp = img.src;
    img.src = src;
    src = srcTemp;
  }
});

rightArrow.addEventListener("click", () => {
  let src = cards[0].children[0].src;

  let srcTemp;

  for (let element of reversed(cards)) {
    let img = element.children[0];
    srcTemp = img.src;
    img.src = src;
    src = srcTemp;
  }
});
