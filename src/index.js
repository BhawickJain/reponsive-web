const element = document.documentElement;

const elSize = (el) => {
  console.log("Hello" + el.querySelector("span"));
  el.textContent = el.clientHeight + "," + el.clientWidth;
};

let divEl = element.querySelectorAll(".page *");

const resizePageChildren = (divEl) => {
  for (const child of divEl) {
    elSize(child);
  }
};

window.onresize = function (event) {
  let divEl = element.querySelectorAll(".page *");
  resizePageChildren(divEl);
};

// window.addEventListener("load", elSize(divEl), false);

// elSize();
