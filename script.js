const stepsEl = document.getElementById("steps");
const caloriesEl = document.getElementById("calories");
const waterEl = document.getElementById("water");

const stepsProgress = document.getElementById("stepsProgress");
const caloriesProgress = document.getElementById("caloriesProgress");
const waterProgress = document.getElementById("waterProgress");

const form = document.getElementById("updateForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const steps = parseInt(document.getElementById("stepsInput").value);
  const calories = parseInt(document.getElementById("caloriesInput").value);
  const water = parseFloat(document.getElementById("waterInput").value);

  stepsEl.textContent = steps;
  caloriesEl.textContent = `${calories} kcal`;
  waterEl.textContent = `${water} L`;

  // Assuming goals: 10,000 steps, 2,000 kcal, 3L water
  stepsProgress.style.width = `${Math.min((steps / 10000) * 100, 100)}%`;
  caloriesProgress.style.width = `${Math.min((calories / 2000) * 100, 100)}%`;
  waterProgress.style.width = `${Math.min((water / 3) * 100, 100)}%`;

  form.reset();
});
