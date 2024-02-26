
  document.addEventListener("DOMContentLoaded", function() {
    const boardContainer = document.getElementById("board-container");

    // Create 800 boxes
    for (let i = 0; i < 800; i++) {
      const square = document.createElement("div");
      square.classList.add("square");
      boardContainer.append(square);

      // Attach event listener for hover effect
      square.addEventListener("mouseover", function() {
        square.style.backgroundColor = "lightblue";
      });

      // Attach event listener for smooth color disappearance after 1 second
      square.addEventListener("mouseout", function() {
        setTimeout(() => {
          square.style.backgroundColor = "rgb(22, 43, 22)";
        }, 1000);
      });
    }
  });