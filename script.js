import { createElement, render } from "./library.js";

const Logo = createElement("img", {
  className: "logo",
  alt: "Logo",
  src: "",
});

const Nav = createElement("nav", { className: "main-nav" });

const Header = createElement(
  "header",
  {
    id: "header",
    className: "header-main",
  },
  [Logo, Nav]
);

render(Header, document.getElementById("root"));
