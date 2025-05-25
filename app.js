
function searchArticles() {
  const query = document.getElementById("search").value.toLowerCase();
  document.querySelectorAll(".article").forEach(function(article) {
    const title = article.querySelector("h2").innerText.toLowerCase();
    const meta = article.querySelector(".meta").innerText.toLowerCase();
    article.style.display = title.includes(query) || meta.includes(query) ? "block" : "none";
  });
}
document.getElementById("search").addEventListener("keyup", searchArticles);
document.getElementById("searchBtn").addEventListener("click", searchArticles);
document.getElementById("themeToggle").addEventListener("click", function () {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
});
window.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }
});
