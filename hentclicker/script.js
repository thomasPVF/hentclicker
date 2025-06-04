const models = [
  { src: "imgs/momo_model/momo (1).png", price: 0, name: "Momo", unlocked: true },
  { src: "imgs/momo_model/momo (2).png", price: 20, name: "Momo (Rara)", unlocked: false },
  { src: "imgs/momo_model/momo (3).png", price: 50, name: "Momo (Épica)", unlocked: false },
  { src: "imgs/momo_model/momo (4).png", price: 100, name: "Momo (Legendaria)", unlocked: false }
];

let currentModelIndex = 0;
let count = 0;
let perClick = 1;

const counterEl = document.getElementById("counter");
const clickerImg = document.getElementById("clicker-img");
const modelInfoEl = document.getElementById("model-info");
const messageEl = document.getElementById("message");
const shopEl = document.getElementById("shop");

clickerImg.onclick = () => {
  count += perClick;
  updateCounter();
  renderShop();
};

function updateCounter() {
  counterEl.textContent = count;
}

function hasMoreLocked() {
  return models.some(m => !m.unlocked);
}

function renderClicker() {
  clickerImg.src = models[currentModelIndex].src;
  modelInfoEl.textContent =
    `Modelo: ${models[currentModelIndex].name} — ` +
    (hasMoreLocked() ? "Pronto vendrán más modelos…" : "¡Colección completa!");
}

function renderShop() {
  shopEl.innerHTML = "";
  models.forEach((m, index) => {
    if (!m.unlocked) {
      const btn = document.createElement("button");
      btn.textContent = `${m.name} — Costo: ${m.price} clicks`;
      if (count < m.price) {
        btn.disabled = true;
        btn.classList.add("disabled");
      }
      btn.onclick = () => buyModel(index);
      shopEl.appendChild(btn);
    }
  });
}

function buyModel(index) {
  const model = models[index];
  if (count < model.price || model.unlocked) return;
  count -= model.price;
  model.unlocked = true;
  currentModelIndex = index;
  updateCounter();
  renderClicker();
  renderShop();
  messageEl.textContent = `¡Has desbloqueado: ${model.name}! Pronto vendrán más modelos…`;
}

window.addEventListener("load", () => {
  renderClicker();
  renderShop();
  updateCounter();
});
