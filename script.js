/* TIMER SYSTEM */
let totalTime = 12;
let timeLeft = totalTime;

const timerEl = document.getElementById("timer");

setInterval(() => {
  if (timeLeft > 0) {
    timeLeft--;
    timerEl.innerText = timeLeft;
  }
}, 1000);

/* ✅ CHIP SPRITE DATA */
const chips = [
  { value: 10, img: "assets/chips2.png", pos: "14.1% 85.1%" },
  { value: 50, img: "assets/chips2.png", pos: "34.1% 85.1%" },
  { value: 100, img: "assets/chips1.png", pos: "97.2% 83.1%" },
  { value: 500, img: "assets/chips1.png", pos: "1.1% 25.1%" },
  { value: 1000, img: "assets/chips1.png", pos: "21.1% 25.1%" },
];

let activeChipIndex = 0;

const chipBar = document.getElementById("chipBar");

/* CREATE CHIP BUTTONS */
chips.forEach((chip, index) => {
  const chipBtn = document.createElement("div");
  chipBtn.className = "chip";

  /* ✅ Create sprite div */
  const sprite = document.createElement("div");
  sprite.className = "chip-sprite";

  /* Apply correct sprite sheet */
  sprite.style.backgroundImage = `url(${chip.img})`;

  /* Apply chip position */
  sprite.style.backgroundPosition = chip.pos;

  chipBtn.appendChild(sprite);

  chipBtn.onclick = () => {
    activeChipIndex = index;
    updateActiveChip();
  };

  chipBar.appendChild(chipBtn);
});

function updateActiveChip() {
  document.querySelectorAll(".chip").forEach((el, i) => {
    el.classList.toggle("active", i === activeChipIndex);
  });
}

updateActiveChip();

/* THROW CHIP */
function throwChip(target) {
  const activeChip = chips[activeChipIndex];

  /* Create flying coin */
  const coin = document.createElement("div");
  coin.className = "coin";

  const sprite = document.createElement("div");
  sprite.className = "coin-sprite";

  sprite.style.backgroundImage = `url(${activeChip.img})`;
  sprite.style.backgroundPosition = activeChip.pos;

  coin.appendChild(sprite);

  /* Start position */
  coin.style.left = "25%";
  coin.style.top = "85%";

  document.body.appendChild(coin);

  /* Target position */
  let targetX = "50%";
  let targetY = "55%";

  if (target === "dragon") targetX = "25%";
  if (target === "tie") targetX = "50%";
  if (target === "tiger") targetX = "75%";

  /* Animate */
  setTimeout(() => {
    coin.style.left = targetX;
    coin.style.top = targetY;
  }, 50);

  /* Remove */
  setTimeout(() => {
    coin.remove();
  }, 1000);
}
