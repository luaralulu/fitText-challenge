var fitText = function(e) {
  $(e).css("white-space", "nowrap");

  // Scale the DIV
  $("#myRange").on("input", function() {
    $(e)
      .parent()
      .css("width", this.value + "px");
    resize(e);
  });

  // Change the DIV text
  $("#txt").on("input", function() {
    $(e).text(this.value);
    resize(e);
  });

  var resize = function(e) {
    var fontSize = parseFloat($(e).css("font-size"));

    var shouldReduce = function(e) {
      return $(e).height() > $("#output").height() || $(e).width() > $("#output").width() ? true : false;
    };

    var shouldIncrease = function(e) {
      return $(e).height() < $("#output").height() && $(e).width() < $("#output").width() ? true : false;
    };

    var reduce = function(e, fontSize) {
      $(e).css("font-size", fontSize);
      if (shouldReduce(e)) {
        fontSize -= 2;
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

    if (shouldReduce(e)) {
      reduce(e, fontSize);
    } else if (shouldIncrease(e)) {
      increase(e, fontSize);
    }
  };

  resize(e);
};
