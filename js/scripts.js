// Resize the DIV
var slider = document.getElementById("myRange");
var output = document.getElementById("output");
var fit = document.getElementById("fit");

slider.oninput = function() {
  output.style.width = this.value + "px";
  fitty("#fit");
};

// Change DIV text
document.getElementById("txt").addEventListener("input", function(evt) {
  fit.innerHTML = this.value;
});
