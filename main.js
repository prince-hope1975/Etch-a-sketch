const DEFAULT_GRID = 100;
const CURRENT_COLOR = "black";

const containerDiv = document.querySelector(".container");

const newGrid = (value = DEFAULT_GRID, color = CURRENT_COLOR) => {
  for (let i = 0; i < value * value; i++) {
    const div1 = document.createElement("div");

    containerDiv.appendChild(div1);
    div1.className = `block div`;
  }
  const boxes = document.querySelectorAll(".div");

  boxes.forEach((box) => {
    box.style.height = `${500 / value}px`;
    box.style.width = `${500 / value}px`;
    box.addEventListener(
      "mouseover",
      () => {
        box.classList.add("div2");
        box.style.backgroundColor = checkColor(color);
      },
      { once: true }
    );
  });
};
const clearCanva = () => {
  containerDiv.innerHTML = " ";
};
const reloadCanva = (value = DEFAULT_GRID, value2 = CURRENT_COLOR) => {
  clearCanva();
  newGrid(value, value2);
};

const clearBtn = document.querySelector(".btn");
clearBtn.addEventListener("click", () => {
  reloadCanva(DEFAULT_GRID);
});

const rainbowBtn = document.querySelector(".rainbow");
rainbowBtn.addEventListener("click", () => {
  reloadCanva(DEFAULT_GRID, "rainbow");
});
const eraseBtn = document.querySelector(".erase");
eraseBtn.addEventListener("click", () => {
  newGrid(DEFAULT_GRID, "erase");
});

const checkColor = (color) => {
  switch (color) {
    case "black":
      return "black";

    case "erase":
      return "white";

    case "rainbow":
      const Rx = Math.floor(Math.random() * 256);
      const Gx = Math.floor(Math.random() * 256);
      const Bx = Math.floor(Math.random() * 256);
      return `rgb(${Rx},${Gx},${Bx})`;
    default:
      const R = Math.floor(Math.random() * 256);
      const G = Math.floor(Math.random() * 256);
      const B = Math.floor(Math.random() * 256);
      // console.log(G,B,R)
      return `rgb(${R},${G},${B})`;
  }
};
const UpdateTextValue = (val)=>{
  console.log(val)
  const textInput = document.querySelector("#textInput")
  textInput.value = val
  
}
const range = document.querySelector("#range")
range.addEventListener("change",(e)=>{
  UpdateTextValue(e.target.value)
})
window.addEventListener("load", () => {
  newGrid();
});
