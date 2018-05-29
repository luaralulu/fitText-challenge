var fitText = function(e) {
  $(e).css("white-space", "nowrap");
  var fontSize = parseFloat($(e).css("font-size"));

  if (shouldReduce(e)) {
    reduce(e, fontSize);
  } else if (shouldIncrease(e)) {
    increase(e, fontSize);
  }
};

var reduce = function(e, fontSize) {
  $(e).css("font-size", fontSize);
  if (shouldReduce(e)) {
    fontSize -= 1;
    reduce(e, fontSize);
  }
};

var increase = function(e, fontSize) {
  $(e).css("font-size", fontSize);
  if (shouldIncrease(e)) {
    fontSize += 1;
    increase(e, fontSize);
  }
};

var shouldReduce = function(e) {
  return $(e).height() > $("#output").height() || $(e).width() > $("#output").width() ? true : false;
};

var shouldIncrease = function(e) {
  return $(e).height() < $("#output").height() && $(e).width() < $("#output").width() ? true : false;
};

// Scale the DIV
$("#myRange").on("input", function() {
  $("#output").css("width", this.value + "px");
  fitText("#fit");
});

// Change the DIV text
$("#txt").on("input", function() {
  $("#fit").text(this.value);
  fitText("#fit");
});
