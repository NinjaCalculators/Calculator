// <form>
//   <input type="text" name="display" id="display" />
//   <div class="button">
//     <input type="button" value="7" id="seven" />
//     <input type="button" value="8" id="eight" />
//     <input type="button" value="9" id="nine" />
//     <input type="button" value="/" id="divide" />
//     <input type="button" value="4" id="four" />
//     <input type="button" value="5" id="five" />
//     <input type="button" value="6" id="six" />
//     <input type="button" value="*" id="multi" />
//     <input type="button" value="1" id="one" />
//     <input type="button" value="2" id="two" />
//     <input type="button" value="3" id="three" />
//     <input type="button" value="-" id="subs" />
//     <input type="button" value="." id="dot" />
//     <input type="button" value="0" id="zero" />
//     <input type="button" value="+" id="add" />
//     <input type="button" value="C" id="clear" />
//     <input type="button" value="=" id="equal" />
//   </div>
// </form>

import { createElement } from "../utils/createelement";

export function createCalculator() {
  const display = createElement("input", {
    type: "number",
    name: "display",
    id: "display",
    placeholder: "🔫",
  });
  const seven = createElement("input", {
    type: "button",
    value: "7",
    id: "seven",
  });
  const eight = createElement("input", {
    type: "button",
    value: "8",
    id: "eight",
  });
  const nine = createElement("input", {
    type: "button",
    value: "9",
    id: "nine",
  });
  const devide = createElement("input", {
    type: "button",
    value: "/",
    id: "devide",
  });
  const four = createElement("input", {
    type: "button",
    value: "4",
    id: "four",
  });
  const five = createElement("input", {
    type: "button",
    value: "5",
    id: "five",
  });
  const six = createElement("input", {
    type: "button",
    value: "6",
    id: "six",
  });
  const multi = createElement("input", {
    type: "button",
    value: "x",
    id: "multi",
  });
  const one = createElement("input", {
    type: "button",
    value: "1",
    id: "one",
  });
  const two = createElement("input", {
    type: "button",
    value: "2",
    id: "two",
  });
  const three = createElement("input", {
    type: "button",
    value: "3",
    id: "three",
  });
  const subs = createElement("input", {
    type: "button",
    value: "-",
    id: "subs",
  });
  const dot = createElement("input", {
    type: "button",
    value: ".",
    id: "dot",
  });
  const zero = createElement("input", {
    type: "button",
    value: "0",
    id: "zero",
  });
  const clearback = createElement("input", {
    type: "button",
    value: "←",
    id: "clearback",
  });
  const add = createElement("input", {
    type: "button",
    value: "+",
    id: "add",
  });
  const equal = createElement("input", {
    type: "button",
    value: "=",
    id: "equal",
  });
  const clear = createElement("input", {
    type: "button",
    value: "C",
    id: "clear",
  });

  return createElement("form", {
    className: "calculator-form",
    children: [
      display,
      createElement("div", {
        className: "button",
        children: [
          seven,
          eight,
          nine,
          devide,
          four,
          five,
          six,
          multi,
          one,
          two,
          three,
          subs,
          dot,
          zero,
          clearback,
          add,
          equal,
          clear,
        ],
      }),
    ],
  });
}
