const colorBox = document.getElementById("colorBox");

document.addEventListener("keydown", function (event) {
  if (event.key === "q") {
    colorBox.style.background = "red";
  } else if (event.key === "s") {
    colorBox.style.background = "yellow";
  } else if (event.key === "d") {
    colorBox.style.background = "black";
  } else if (event.key === "b") {
    colorBox.style.background = "blue";
  }
});
