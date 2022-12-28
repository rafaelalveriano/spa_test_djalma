import { routes } from "../../routes.js";
const HomeAction = (contentFormat, currentPage) => {
  const home = document.querySelector(".home-link");

  if (routes.home === currentPage) {
    contentFormat.classList.add("home-bg");
    contentFormat.classList.remove("main-text");
    home.classList.add("open-page");
    return;
  }

  contentFormat.classList.remove("home-bg");
  contentFormat.classList.add("main-text");
  home.classList.remove("open-page");
};

export default HomeAction;
