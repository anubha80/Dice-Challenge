function playGame() {
    if (window.performance) {
      console.info("window.performance works fine on this browser");
    }
    console.info(performance.navigation.type);
    if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
      console.info("This page is reloaded");
      showResult();
    } else {
      console.info("This page is not reloaded");
    }
  }
  function showResult() {
    var randomNum1 = Math.floor(Math.random() * (7 - 1) + 1);
    var randomNum2 = Math.floor(Math.random() * (7 - 1) + 1);
    document.querySelector(".player1-dicee").src =
      "./Images/dice" + randomNum1 + ".png";
    document.querySelector(".player2-dicee").src =
      "./Images/dice" + randomNum2 + ".png";
    var winner = "Player1";
    if (randomNum1 > randomNum2) {
      document.querySelector(".game-headline").textContent =
        "🚩 Player1 Wins";
    } else if (randomNum2 > randomNum1) {
      document.querySelector(".game-headline").textContent =
        "Player2 Wins 🚩";
    } else if (randomNum1 == randomNum2) {
      document.querySelector(".game-headline").textContent = "🚩 Draw 🚩";
    } else {
      document.querySelector(".game-headline").textContent = "Invalid";
    }
  }