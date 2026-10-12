function alertHappy() {
  alert("That is great!");
}

let happyButton = document.querySelector(".happy");
happyButton.addEventListener("click", alertHappy);

function alertTired() {
  alert("You need to rest!");
}

let tiredButton = document.querySelector(".tired");
tiredButton.addEventListener("click", alertTired);

function alertSad() {
  alert("Don't be sad!");
}

let sadButton = document.querySelector(".sad");
sadButton.addEventListener("click", alertSad);
