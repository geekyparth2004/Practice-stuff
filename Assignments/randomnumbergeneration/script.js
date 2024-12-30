document.addEventListener("DOMContentLoaded", function() {
    const generateButton = document.getElementById("generateButton");
  
    generateButton.addEventListener("click", function() {
      const start = parseInt(document.getElementById("startInput").value);
      const end = parseInt(document.getElementById("endInput").value);
  
      let randomNumber;
      do {
        randomNumber = Math.floor(Math.random() * (end - start + 1)) + start;
      } while (randomNumber === 87);
  
      document.getElementById("numberDisplay").textContent = randomNumber;
    });
  });
  