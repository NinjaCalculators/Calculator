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
    type: "text",
    name: "display",
    id: "display",
    placeholder: "🔫",
  });
  const seven = createElement("input", {
    type: "button",
    value: 7,
    id: "seven",
    onclick: function () {
      document.forms.display.value += 7;
    },
  });
  const eight = createElement("input", {
    type: "button",
    value: 8,
    id: "eight",
    onclick: function () {
      document.forms.display.value += 8;
    },
  });
  const nine = createElement("input", {
    type: "button",
    value: 9,
    id: "nine",
    onclick: function () {
      document.forms.display.value += 9;
    },
  });
  const devide = createElement("input", {
    type: "button",
    value: "/",
    id: "devide",
    onclick: function () {
      document.forms.display.value += "/";
    },
  });
  const four = createElement("input", {
    type: "button",
    value: 4,
    id: "four",
    onclick: function () {
      document.forms.display.value += 4;
    },
  });
  const five = createElement("input", {
    type: "button",
    value: 5,
    id: "five",
    onclick: function () {
      document.forms.display.value += 5;
    },
  });
  const six = createElement("input", {
    type: "button",
    value: 6,
    id: "six",
    onclick: function () {
      document.forms.display.value += 6;
    },
  });
  const multi = createElement("input", {
    type: "button",
    value: "x",
    id: "multi",
    onclick: function () {
      document.forms.display.value += "*";
    },
  });
  const one = createElement("input", {
    type: "button",
    value: 1,
    id: "one",
    onclick: function () {
      document.forms.display.value += 1;
    },
  });
  const two = createElement("input", {
    type: "button",
    value: 2,
    id: "two",
    onclick: function () {
      document.forms.display.value += 2;
    },
  });
  const three = createElement("input", {
    type: "button",
    value: 3,
    id: "three",
    onclick: function () {
      document.forms.display.value += 3;
    },
  });
  const subs = createElement("input", {
    type: "button",
    value: "-",
    id: "subs",
    onclick: function () {
      document.forms.display.value += "-";
    },
  });
  const dot = createElement("input", {
    type: "button",
    value: ".",
    id: "dot",
    onclick: function () {
      document.forms.display.value += ".";
    },
  });
  const zero = createElement("input", {
    type: "button",
    value: "0",
    id: "zero",
    onclick: function () {
      document.forms.display.value += 0;
    },
  });
  const clearback = createElement("input", {
    type: "button",
    value: "←",
    id: "clearback",
    onclick: function () {
      document.forms.display.value = "";
    },
  });
  const add = createElement("input", {
    type: "button",
    value: "+",
    id: "add",
    onclick: function () {
      document.forms.display.value += "+";
    },
  });
  const equal = createElement("input", {
    type: "button",
    value: "=",
    id: "equal",
    onclick: function () {
      if (display.value == "") {
        alert("Please enter a number");
      } else {
        document.forms.display.value = eval(document.forms.display.value);
      }
    },
  });
  const clear = createElement("input", {
    type: "button",
    value: "C",
    id: "clear",
    onclick: function () {
      document.forms.display.value = "";
    },
  });

  return createElement("form", {
    name: "forms",
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
