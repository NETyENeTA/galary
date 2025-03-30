const cards = document.getElementsByClassName("card");
const reversedCards = [cards[-1], cards[-2], cards[-3]]

const leftArrow = document.getElementById("left");
const rightArrow = document.getElementById("right");

rightArrow.addEventListener("click", () => {
  let src = cards[cards.length - 1].children[0].src;

  let srcTemp;

  for (let element of cards) {
    let img = element.children[0];
    srcTemp = img.src;
    img.src = src;
    src = srcTemp;
  }
});

leftArrow.addEventListener("click", () => {
    let src = cards[0].children[0].src;

    let srcTemp;

    for (let element of reversedCards) {
        let img = element.children[0];
        srcTemp = img.src;
        img.src = src;
        src = srcTemp;
      }
  
  });
