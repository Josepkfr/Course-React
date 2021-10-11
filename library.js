export function createElement(elemnt, attr = {}, children = []) {
  let elem = document.createElement(elemnt);
  let keys = Object.keys(attr);
  keys.map((k) => elem.setAttribute(k, attr[k]));
  children.map((child) => renderChild(elem, child));
  return elem;
}

function renderChild(element, child) {
  if (typeof child === "string") {
    element.innerHTML += child;
    return;
  }
  element.appendChild(child);
}

export function render(element, DomElement) {
  DomElement.appendChild(element);
}
