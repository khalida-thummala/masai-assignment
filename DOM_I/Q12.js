let ul = document.querySelector("ul");
let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  let li = document.createElement("li");
  li.textContent = "New Item";
  ul.appendChild(li);

  let index = ul.children.length;

  if (index % 2 === 1) {
    li.style.fontWeight = "bold";
    li.style.color = "blue";
  } else {
    li.style.fontStyle = "italic";
    li.style.color = "red";
  }
});
