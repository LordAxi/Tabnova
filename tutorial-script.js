const rawHash = window.location.hash; // → "#Lisa"
const option = rawHash.substring(1); // → "Lisa"

console.log("Hash-Wert:", option);

document.addEventListener("DOMContentLoaded", function () {
  const skip_button = document.getElementById("skip");
  skip_button.addEventListener("click", () => confirmskip());
  function confirmskip() {
    if (
      confirm(
        "Are you sure you want to skip the tutorial? No worries – there's nothing wrong with using it!"
      )
    ) {
      console.log("skipped");
    } else {
      console.log("cancelled");
    }
  }
});
