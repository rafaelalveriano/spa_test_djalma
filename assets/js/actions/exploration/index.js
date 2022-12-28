import { routes } from "../../routes.js";

const ExplorationAction = (contentFormat, currentPage) => {
  const exploration = document.querySelector(".exploration-link");

  if (routes.exploration === currentPage) {
    contentFormat.classList.add("exploration-bg");
    exploration.classList.add("open-page");
    return;
  }

  contentFormat.classList.remove("exploration-bg");
  exploration.classList.remove("open-page");
};

export default ExplorationAction;
