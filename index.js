///Extensions

Array.prototype.classing = function (CLass) {
  let array = [];
  [...this].forEach((el) => {
    array.push(new CLass(el));
  });
  return array;
};

/////
///Classes

class Image {
  constructor(root) {
    this.root = root;
    console.log(this.srcGet().split('/'));
    
    this.Name(this.srcGet().split('/').at(-1))
    this.Author("UnSigned")
  }

  srcGet() {
    return this.root.children[0].src;
  }

  srcSet(value) {
    this.root.children[0].src = value;
  }

  children(index) {
    return this.root.children[index];
  }

  Author(name) {
    this.root.children[1].children[0].textContent = name;
  }

  Name(name) {
    this.root.children[1].children[1].textContent = name;
  }
}

/////
/// Functions

function reversed(list) {
  let result = new Array();
  for (let i = list.length - 1; i >= 0; i--) {
    result.push(list[i]);
  }
  return result;
}

/////
/// Main

const cards = [...document.getElementsByClassName("card")].classing(Image);

const leftArrow = document.getElementById("left");
const rightArrow = document.getElementById("right");

leftArrow.addEventListener("click", () => {
  let src = cards[cards.length - 1].srcGet();

  let srcTemp;

  for (let element of cards) {
    srcTemp = element.srcGet();
    element.srcSet(src);
    src = srcTemp;
  }
});

rightArrow.addEventListener("click", () => {
  let src = cards[0].srcGet();

  let srcTemp;

  for (let element of reversed(cards)) {
    srcTemp = element.srcGet();
    element.srcSet(src);
    src = srcTemp;
  }
});
