const element = document.documentElement;

const measureEl = (el) => {
  return el.clientWidth + " x " + el.clientHeight;
};

/**
 * Gets Size of children of Page Elements and Sets size-label spans
 * @param {documentElement} pages Class Page Document Element
 */
const setMeasure = (pages) => {
  pages.forEach((el) => {
    console.log(el);
    console.log(measureEl(el));
    console.log(el.querySelectorAll("span"));
    el.querySelectorAll("span").item(0).textContent = measureEl(el);
  });
};

pages = element.querySelectorAll(".page h1,p");
setMeasure(pages);

window.onresize = (event) => {
  setMeasure(pages);
};

// console.log(measureEl(element.querySelectorAll(".page").item(0)));

console.log(
  element
    .querySelectorAll(".page h1,p")
    .item(0)
    .querySelectorAll("span")
    .item(0)
);

// element
//   .querySelectorAll(".page")
//   .item(0)
//   .querySelectorAll("span")
//   .item(0).textContent = "100,300";

// setMeasure(element.querySelectorAll(".page"));

// const elSize = (el) => {
//   console.log("Hello" + el.querySelector("span"));
//   el.textContent = el.clientHeight + "," + el.clientWidth;
// };

// let divEl = element.querySelectorAll(".page *");

// const resizePageChildren = (divEl) => {
//   for (const child of divEl) {
//     elSize(child);
//   }
// };

// window.onresize = function (event) {
//   let divEl = element.querySelectorAll(".page *");
//   resizePageChildren(divEl);
// };

// window.addEventListener("load", elSize(divEl), false);

// elSize();
