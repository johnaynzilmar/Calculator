const ul = document.querySelector("ul");
const li = document.querySelector("li");
const intput1 = document.querySelector(".inpt1");
const intput2 = document.querySelector(".inpt2");
const btn = document.querySelector("button");
const clear = document.querySelector(".clear");
const operator = document.querySelector("#operations");

btn.addEventListener("click", addition);
function addition() {
  let firstInt = parseInt(intput1.value);
  let secondInt = parseInt(intput2.value);
  // const li = document.createElement("li");
  // intput1.value = "";
  // intput2.value = "";

  if (intput1 === "" || intput2 === "") {
    li.innertext = "Please input a number";
  }
  // if users select the operators Option.
  if (operator.value === "+") {
    li.innerText = firstInt + secondInt;
  }

  if (operator.value === "-") {
    li.innerText = firstInt - secondInt;
  }

  if (operator.value === "*") {
    li.innerText = firstInt * secondInt;
  }

  if (operator.value === "/") {
    li.innerText = firstInt / secondInt;
  }

  // ul.append(li);

  clear.addEventListener("click", remove);
  function remove() {
    intput1.value = "";
    intput2.value = "";
  }
}
