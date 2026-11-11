import { createProductItem } from "./view.js";
import { products } from "./products.js";
import { renderNav } from "./navbar.js";
import { renderSidebar } from "./sidebar.js";
import { renderRoute } from "./router.js";

window.addEventListener("load", () => {
  renderNav();
  renderSidebar();
  renderRoute();

  products.forEach((product) => {
    createProductItem(product);
  });
});

window.addEventListener("popstate", renderRoute);
