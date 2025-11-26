let colorInput = document.getElementById("colorInput");
let textInput = document.getElementById("textInput");
let box = document.getElementById("box");

document.getElementById("bgBtn").addEventListener("click", function () {
  let color = colorInput.value.trim();
  box.style.backgroundColor = color;

  if (box.style.backgroundColor === "") {
    alert("Invalid color name!");
  }
});

document.getElementById("textBtn").addEventListener("click", function () {
  let text = textInput.value.trim();

  if (text === "") {
    alert("Please enter some text!");
  } else {
    box.textContent = text;
  }
});
