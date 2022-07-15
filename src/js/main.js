const hamburger = document.querySelector("#hamburger");

hamburger.addEventListener("click", showBurger, false);

function showBurger() {
  const showBurger = document.querySelector("#show-burger");

  if (showBurger.style.display === "none") {
    showBurger.style.display = "block";
  } else {
    showBurger.style.display = "none";
  }
}

function closeBurger() {
  const showBurger = document.querySelector("#show-burger");

  if (showBurger.style.display === "block") {
    showBurger.style.display = "none";
  } else {
    showBurger.style.display = "block";
  }
}
