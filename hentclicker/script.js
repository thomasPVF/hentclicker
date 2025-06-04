let count = 0;
let perClick = 1;
let upgradeCost = 100;

const counter = document.getElementById("counter");
const clicker = document.getElementById("clicker");
const upgrade = document.getElementById("upgrade");

clicker.onclick = () => {
  count += perClick;
  update();
  
};

upgrade.onclick = () => {
  if (count >= upgradeCost) {
    count -= upgradeCost;
    perClick += 1;
    upgradeCost *= 2;
    upgrade.textContent = `+1 por click (${upgradeCost})`;
    update();
  }
};

function update() {
  counter.textContent = count;
}
// Renderizar imagen principal y texto de modelo activo en el DOM