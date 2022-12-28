export function Format() {
  const contentFormat = document.querySelector("#app")
  const home = document.querySelector(".home-link")
  const universe = document.querySelector(".universe-link")
  const exploration = document.querySelector(".exploration-link")
  const { pathname } = window.location

  pathname === "/"
    ? (contentFormat.classList.add("home-bg"),
      contentFormat.classList.remove("main-text"),
      home.classList.add("open-page"))
    : (contentFormat.classList.remove("home-bg"),
      contentFormat.classList.add("main-text"),
      home.classList.remove("open-page"))

  pathname === "/universe.html"
    ? (contentFormat.classList.add("universe-bg"),
      universe.classList.add("open-page"))
    : (contentFormat.classList.remove("universe-bg"),
      universe.classList.remove("open-page"))

  pathname === "/exploration.html"
    ? (contentFormat.classList.add("exploration-bg"),
      exploration.classList.add("open-page"))
    : (contentFormat.classList.remove("exploration-bg"),
      exploration.classList.remove("open-page"))
}
