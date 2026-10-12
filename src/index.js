function alertHappy() {
  let messageHappy = document.querySelector(".moods");
  messageHappy.innerHTML = '<p class="mood-message">That is great!</p>';
}

let happyButton = document.querySelector(".happy");
happyButton.addEventListener("click", alertHappy);

function alertTired() {
  let messageTired = document.querySelector(".moods");
  messageTired.innerHTML = '<p class="mood-message">Go rest! Go sleep!</p>';
}

let tiredButton = document.querySelector(".tired");
tiredButton.addEventListener("click", alertTired);

function alertSad() {
  let messageSad = document.querySelector(".moods");
  messageSad.innerHTML =
    '<p class="mood-message">Dont be sad! Tomorrow will be new day!</p>';
}

let sadButton = document.querySelector(".sad");
sadButton.addEventListener("click", alertSad);
