// <form>
//   <input type="text" name="display" id="display" />
//   <div class="button">
//     <input type="button" value="7"  />
//     <input type="button" value="8"  />
//     <input type="button" value="9"  />
//     <input type="button" value="/"  />
//     <input type="button" value="4"  />
//     <input type="button" value="5"  />
//     <input type="button" value="6"  />
//     <input type="button" value="*"  />
//     <input type="button" value="1"  />
//     <input type="button" value="2"  />
//     <input type="button" value="3"  />
//     <input type="button" value="-"  />
//     <input type="button" value="."  />
//     <input type="button" value="0"  />
//     <input type="button" value="+"  />
//     <input type="button" value="C"  />
//     <input type="button" value="="  />
//   </div>
// </form>

import { createElement } from "../utils/createelement";

export function createCalculator() {
  const display = createElement("input", {
    type: "text",
    name: "display",
    id: "display",
    placeholder: "Ninja Calculator",
  });

  const numberButton = (number) =>
    createElement("input", {
      type: "button",
      value: number,
      onclick: function () {
        document.forms.display.value += number;
      },
    });

  const calculateButton = (calculate) =>
    createElement("input", {
      type: "button",
      value: calculate,
      onclick: function () {
        document.forms.display.value += calculate;
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
  const clearback = createElement("input", {
    type: "button",
    value: "←",
    id: "clearback",
    onclick: function () {
      document.forms.display.value = document.forms.display.value.substring(
        0,
        document.forms.display.value.length - 1
      );
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
          numberButton(7),
          numberButton(8),
          numberButton(9),
          calculateButton("/"),
          numberButton(4),
          numberButton(5),
          numberButton(6),
          calculateButton("*"),
          numberButton(1),
          numberButton(2),
          numberButton(3),
          calculateButton("-"),
          dot,
          numberButton(0),
          clearback,
          calculateButton("+"),
          equal,
          clear,
        ],
      }),
    ],
  });
}
