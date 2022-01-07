const buttonsClassName = ".ytp-ad-skip-button-container";
const closesClassName = ".ytp-ad-overlay-close-container";
const intervalTime = 1000;

const click = (elmsClassName) => {
  try {
    const elm = document.querySelector(elmsClassName)
    elm.click();
  } catch (e) {}
}

setInterval(() => {
  click(buttonsClassName)
  click(closesClassName)
},intervalTime);
