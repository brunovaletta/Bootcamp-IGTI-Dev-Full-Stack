window.addEventListener('load', start);

var inputRed = document.querySelector('#red');
var inputGreen = document.querySelector('#green');
var inputBlue = document.querySelector('#blue');
var redValue = inputRed.value;
var greenValue = inputGreen.value;
var blueValue = inputBlue.value;
var redValueDisplay = document.querySelector('#red-value');
var greenValueDisplay = document.querySelector('#green-value');
var blueValueDisplay = document.querySelector('#blue-value');
var colorDisplay = document.querySelector('#color-display');
var color = 'rgb(' + redValue + ',' + greenValue + ',' + blueValue + ')';

function start() {
  document.addEventListener('input', onInput);

  function onInput() {
    function showValues() {
      redValue = inputRed.value;
      greenValue = inputGreen.value;
      blueValue = inputBlue.value;
      redValueDisplay.value = redValue;
      greenValueDisplay.value = greenValue;
      blueValueDisplay.value = blueValue;
    }
    showValues();
    function changeColor() {
      color = 'rgb(' + redValue + ',' + greenValue + ',' + blueValue + ')';
      colorDisplay.style.backgroundColor = color;
    }
    changeColor();
  }
}
