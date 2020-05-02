const form = document.getElementById("myform");
const cover = document.querySelector(".cover");
const block = document.querySelector(".modal");
let inp = document.querySelector('form input[type="text"]');
const exitBtn = document.querySelector(".exitSpan");
let newElement = document.createElement("h2");

form.addEventListener("submit", greet);
exitBtn.addEventListener("click", exit);

function greet(e) {
  if (inp.value === "") {
    error();
  } else {
    block.style.transform = "scale(1)";

    cover.classList.add("active");

    newElement.className = "modal-title sub-title";

    let greeting = document.createTextNode(`Hello ${inp.value}`);

    newElement.appendChild(greeting);

    block.appendChild(newElement);
  }
  e.preventDefault();
}

function exit(e) {
  newElement.textContent = "";
  block.style.transform = "scale(0)";
  cover.classList.remove("active");
  cover.classList.add("cover");
}

function error() {
  inp.style.border = "1px solid red";
  document.querySelector(".errorMessage").textContent =
    "Please fill in the field";

  setTimeout(function () {
    inp.style.border = "none";
    document.querySelector(".errorMessage").textContent = "";
  }, 2000);
}
