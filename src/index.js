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
