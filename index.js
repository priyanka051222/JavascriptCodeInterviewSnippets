//Formats a string with comma currency format.
function  format(str) {
 return str.replace(/(\d)(?=(\d{3})+(?!\d))/, '$1,'); 
}
console.log(format('10000000'));


//sum(1)(2)(3)(4)(5)();
let sum = a => b => (b ? sum(a + b) : a);
console.log(sum(2)(3)(4)(4)(4)(4)());

//Debouncing
const button = document.getElementById("debounce");
const debounce = (func, delay) => {
  let debounceTimer;
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
  };
};
button.addEventListener(
  "click",
  debounce(function() {
    alert(
      "Hello\nNo matter how many times you" +
        "click the debounce button, I get " +
        "executed once every 3 seconds!!"
    );
  }, 3000)
);

//throttling
const throttle = (callback, delay) => {
  let throttleTimeout = null;
  let storedEvent = null;

  const throttledEventHandler = event => {
    storedEvent = event;

    const shouldHandleEvent = !throttleTimeout;

    if (shouldHandleEvent) {
      callback(storedEvent);

      storedEvent = null;

      throttleTimeout = setTimeout(() => {
        throttleTimeout = null;

        if (storedEvent) {
          throttledEventHandler(storedEvent);
        }
      }, delay);
    }
  };

  return throttledEventHandler;
};

const handler = config => e => {
  const { offset, color, text } = config;
  const top = window.pageYOffset;
  const div = document.createElement("div");
  div.style = `position: absolute; top: ${top +
    600}px; left: ${offset}%; color: ${color}; font-size: 32px`;
  div.innerText = text;
  document.body.appendChild(div);
};

const normalHandler = handler({
  offset: 5,
  color: "#FF695E",
  text: "Normal Event"
});
const throttledHandler = throttle(
  handler({ offset: 60, color: "#EED639", text: "Throttled Event" }),
  1000
);

window.addEventListener("scroll", normalHandler);
window.addEventListener("scroll", throttledHandler);

