const refs = {
  textRef: document.querySelector(".text"),

  btnRef: document.querySelector(".btn"),
};

window.addEventListener("keydown", onkeypress);

function onkeypress(event) {
  console.log(event);
}
