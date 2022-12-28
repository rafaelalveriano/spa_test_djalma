import {
  HomeAction,
  UniverseAction,
  ExplorationAction,
} from "./actions/index.js";

export function registerActions() {
  const content = document.querySelector("#app");
  const currentPage = window.location.pathname;

  HomeAction(content, currentPage);
  UniverseAction(content, currentPage);
  ExplorationAction(content, currentPage);
}
