import { routes } from "../../routes.js";

const UniverseAction = (contentFormat, currentPage) => {
  const universe = document.querySelector(".universe-link");

  if (routes.universe === currentPage) {
    contentFormat.classList.add("universe-bg");
    universe.classList.add("open-page");
    return;
  }

  contentFormat.classList.remove("universe-bg");
  universe.classList.remove("open-page");
};

export default UniverseAction;
