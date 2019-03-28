$(document).ready(function() {
  $("form#survey").submit(function(event) {
    var age = parseInt($("#age").val());
    var height = $("input:radio[name=height]:checked").val();
    var color = $("input:radio[name=color]:checked").val();
    var diet = $("input:radio[name=diet]:checked").val();
    var season = $("input:radio[name=season]:checked").val();

    if (height === "min" && color === "yellow" && diet === "vegan") {
      $(".pleosaur").show().fadeIn();
    } else if (height === "max" && color === "yellow" && diet === "omnivore" && season === "summer") {
      $(".lebrontosaurus").show().fadeIn();
      console.log("show")
    }
    event.preventDefault();
  });
});
