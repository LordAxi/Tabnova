document.addEventListener("DOMContentLoaded", function () {
  const standard_button = document.getElementById("standard");
  const custom_button = document.getElementById("custom");
  const intense_button = document.getElementById("intense");

  standard_button.addEventListener("click", () => setupoption("standard"));
  custom_button.addEventListener("click", () => setupoption("custom"));
  intense_button.addEventListener("click", () => setupoption("intense"));

  function setupoption(option) {
    if (option === "standard") {
      console.log("standard");
      document.getElementById("standard").style.backgroundColor = "#c774ec";
      document.getElementById("custom").style.backgroundColor = "";
      document.getElementById("intense").style.backgroundColor = "";
      document.getElementById("finishsetupoption").style.backgroundColor =
        "white";
    }
    if (option === "custom") {
      console.log("custom");
      document.getElementById("standard").style.backgroundColor = "";
      document.getElementById("custom").style.backgroundColor = "#f47ab2";
      document.getElementById("intense").style.backgroundColor = "";
      document.getElementById("finishsetupoption").style.backgroundColor =
        "white";
    }
    if (option === "intense") {
      console.log("intense");
      document.getElementById("standard").style.backgroundColor = "";
      document.getElementById("custom").style.backgroundColor = "";
      document.getElementById("intense").style.backgroundColor = "#ffb350";
      document.getElementById("finishsetupoption").style.backgroundColor =
        "white";
    }
    document.getElementById("finishsetupoptiona").href =
      "tutorial.html#" + option;
  }
});
