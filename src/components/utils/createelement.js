export function createElement(tagname, props) {
  const element = document.createElement(tagname);
  const { children, ...other } = props;
  Object.assign(element, other);

  if (children) {
    element.append(...children);
  }
  return element;
}
