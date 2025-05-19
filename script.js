const form = document.getElementById("grievanceForm");
const responseDiv = document.getElementById("response");
const anantMsg = document.getElementById("anantMessage");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  // Hide form and show Anant message first
  form.classList.add("hidden");
  anantMsg.classList.remove("hidden");

  // Then show the response after 2.5 seconds
  setTimeout(() => {
    anantMsg.classList.add("hidden");
    responseDiv.classList.remove("hidden");
  }, 2500);
});

function submitAnother() {
  form.reset();
  responseDiv.classList.add("hidden");
  form.classList.remove("hidden");
}
