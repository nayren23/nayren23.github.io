document
  .getElementById("theme-switcher")
  .addEventListener("click", switchTheme);

function switchTheme(event) {
  event.stopPropagation(); // Évite la propagation d'événements
  var darkThemeLink = document.getElementById("dark-theme-link");

  if (darkThemeLink) {
    darkThemeLink.remove();
  } else {
    var link = document.createElement("link");
    link.id = "dark-theme-link";
    link.rel = "stylesheet";
    link.href = "css/dark-theme.css";
    document.head.appendChild(link);
  }
}
