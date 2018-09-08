// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-eaten").on("click", function(event) {
    var id = $(this).data("id");
    var newEaten = $(this).data("neweaten");
    console.log(id);
    console.log(newEaten);


    var newEatenState = {
      eaten: newEaten
    };

    // Send the PUT request.
    $.ajax("/api/foods/" + id, {
      type: "PUT",
      data: newEatenState
    }).then(
      function() {
        console.log("changed eaten to", newEaten);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newFood = {
      name: $("#foodName").val().trim(),
      eaten: 0
    };
    console.log(newFood);

    // Send the POST request.
    $.ajax("/api/foods", {
      type: "POST",
      data: newFood
    }).then(
      function() {
        console.log("created new food");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
