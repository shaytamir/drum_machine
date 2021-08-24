export const colorsObj = {
  gray: "#D5DEE9",
  purple: "#D7AEFB",
  red: "#EA715A",
  green: "#AED67B",
  pink: "#F096BE",
  yellow: "#F7E6AF",
};

/* returns rndom color */
export const randColor = () => {
  let rand = Math.floor(Math.random() * Object.keys(colorsObj).length);
  // console.log(Object.keys(colorsObj)[rand]);
  return Object.values(colorsObj)[rand];
};

export const drumColor = (key) => {
  //   console.log("colorrrrrrrrrrrrr");
  // console.log("kk", key);
  document.getElementById(key).style.backgroundColor = randColor();

  setTimeout(function () {
    document.getElementById(key).style.backgroundColor = "#95c2da";
  }, 100);
};

const exports = {
  randColor,
};
export default exports;
