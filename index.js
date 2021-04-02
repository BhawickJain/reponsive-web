// get all elements of document
const element = document.documentElement;

// define function that takes an element and returns its dimensions
const measureEl = (el) => {
  return el.clientWidth + " x " + el.clientHeight;
};

/**
 * Gets Size of children of Page Elements and Sets size-label spans
 * @param {documentElement} pages Class Page Document Element
 */
const setMeasure = (pages) => {
  pages.forEach((el) => {
    el.querySelectorAll("span").item(0).textContent = measureEl(el);
  });
};

// get all h1 and p tag elements in page class
pages = element.querySelectorAll(".page h1,p");
setMeasure(pages);

// when window is resized, call setMeasure function
window.onresize = (event) => {
  setMeasure(pages);
};

// make the first span element disappear when first h1 is clicked
element.querySelector("h1").onclick = () => {
  if (element.querySelector("span").style.display === "") {
    element.querySelector("span").style.display = "none";
  } else {
    element.querySelector("span").style.display = "";
  }
};
const toggleSizeLabel = () => {
  if (element.querySelector("span").style.display === "") {
    element.querySelector("span").style.display = "none";
  } else {
    element.querySelector("span").style.display = "";
  }
};

let page_el = document.querySelector(".page");

page_el.addEventListener(
  "click",
  function (ev) {
    if (
      (ev.target.className.toLowerCase() === "size-label") |
      (ev.target.className.toLowerCase() === "size-label size-label-hide")
    ) {
      ev.target.classList.toggle("size-label-hide");
      console.log(ev);
    }
  },
  false
);
