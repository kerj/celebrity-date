$(document).ready(function() {
  $("form").submit(function(event) {
    var age = parseInt($("input#age").val());
    var height = $("input:radio[name=height]:checked").val();
    var color = $("input:radio[name:color]:checked").val();
    var diet = $("input:radio[name:diet]:checked").val();
    var season = $("input:radio[name:season]:checked").val();
    console.log(age)

    if (age) {
      var age = (>= 25)
    }
    event.preventDefault();
  }
}
