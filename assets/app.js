
let displayResult = document.querySelector('input[type="text"]');
let result = "";

addGlobalEventListener("click", 'input[type="button"]', (e) => {
  if (e.target.hasAttribute("data-number")) {
    appendNumber(e.target.value);
  } else if (e.target.hasAttribute("data-operation")) {
    chooseOperation(e.target.value);
  } else if (e.target.hasAttribute("data-dot")) {
    appendNumber(e.target.value);
  } else if (e.target.hasAttribute("data-clear")) {
    clear();
  } else if (e.target.hasAttribute("data-delete")) {
    deleteVal();
  } else {
    compute();
  }
});

function addGlobalEventListener(type, selector, callback) {
  document.addEventListener(type, (e) => {
    if (e.target.matches(selector)) callback(e);
  });
}
const clear = () => {
  result = '';
  updateDisplay();
}
const deleteVal = () => {
  result = displayResult.value.slice(0, -1)
  updateDisplay();
}
const appendNumber = (number) => {
  result += number
  updateDisplay();
}
const chooseOperation = (operation) => {
  result += operation;
  updateDisplay();
}
const compute = () => {
  result = eval(displayResult.value);
  updateDisplay();
}
const updateDisplay = () => {
  displayResult.value = result;
};
