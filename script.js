const form = document.getElementById("grievanceForm");
const responseDiv = document.getElementById("response");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  form.classList.add("hidden");
  responseDiv.classList.remove("hidden");
});

function submitAnother() {
  form.reset();
  responseDiv.classList.add("hidden");
  form.classList.remove("hidden");
}
