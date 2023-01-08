const getById = (id) => document.getElementById(id);

const style = (node, styles) =>
  Object.keys(styles).forEach((key) => (node.style[key] = styles[key]));
