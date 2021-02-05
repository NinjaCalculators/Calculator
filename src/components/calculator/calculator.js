{
  /* <div>
    <button></button>
    <button></button>
    <button></button>
    <div></div>
</div> */
}

import { createElement } from "../utils/createelement";

export function createCalculator() {
  return createElement("div", {
    className: "calculator",
    children: [
      createElement("div", {
        className: "display",
        innerText: "",
      }),
      createElement("button", {
        className: "cal-btn",
        innerText: "6",
        value: 6,
      }),
      createElement("button", {
        className: "cal-btn",
        innerText: "4",
        value: 4,
      }),
      createElement("button", {
        className: "cal-btn",
        innerText: "+",
        onclick: function () {
          portion.value = Number(portion.value) + 1;
        },
      }),
      createElement("button", {
        className: "cal-btn",
        innerText: "=",
      }),
    ],
  });
}
