// === Random Japanese Food Fact (in sidebar) ===
const factBtn = document.getElementById("fact-btn");
const factBox = document.getElementById("fact-box");

factBtn.addEventListener("click", async () => {
  factBox.classList.remove("show");
  factBox.textContent = "Loading... 🍜";

  try {
    const response = await fetch("https://api.quotable.io/random?tags=food");
    const data = await response.json();

    setTimeout(() => {
      factBox.textContent = `🍱 ${data.content}`;
      factBox.classList.add("show");
    }, 300);

  } catch (error) {
    const fallbackFacts = [
      "Sushi was originally a way to preserve fish in fermented rice.",
      "Matcha is made from finely ground green tea leaves.",
      "Ramen came to Japan from China in the late 19th century.",
      "In Japan, slurping noodles is a sign of appreciation!",
      "Tempura was introduced by Portuguese missionaries in the 16th century."
    ];
    const randomFact = fallbackFacts[Math.floor(Math.random() * fallbackFacts.length)];

    setTimeout(() => {
      factBox.textContent = ` ${randomFact}`;
      factBox.classList.add("show");
    }, 300);
  }
});
