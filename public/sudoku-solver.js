const textArea = document.getElementById('text-input');

//SUDOKU FILLER FROM AN ARRAY OF 81 STRINGS
//
//
//Split the input string from the text area
const sudokuFill = (str) => {
  str = str.split('');
  console.log(str);
  let j = 1;
  let letter = '';
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) {
      //Getting letter
      if (i >= 0 && i <= 8) {
        letter = 'A';
      } else if (i > 8 && i <= 17) {
        letter = 'B';
      } else if (i > 17 && i <= 26) {
        letter = 'C';
      } else if (i > 26 && i <= 35) {
        letter = 'D';
      } else if (i > 35 && i <= 44) {
        letter = 'E';
      } else if (i > 44 && i <= 53) {
        letter = 'F';
      } else if (i > 53 && i <= 62) {
        letter = 'G';
      } else if (i > 62 && i <= 71) {
        letter = 'H';
      } else if (i > 71 && i <= 80) {
        letter = 'I';
      }
      // Getting id
      let iden = letter + j.toString();
      //Inserting cell
      // console.log(
      //   'im iden: ' + iden,
      //   'im str[i]: ' + str[i],
      //   'im j: ' + j,
      //   'im i: ' + i
      // );
      document.getElementById(iden).value = str[i];
    }
    j++;
    if (j == 10) {
      j = 1;
    }
  }
  console.log(str.length);
};

//Get the cell number for the array's index from the Id
const sudokuGetCell = (str) => {
  str = str.split('');
  switch (str[0]) {
    case 'A':
      return str[1];
    case 'B':
      return str[1] + 8;
    case 'C':
      return str[1] + 17;
    case 'D':
      return str[1] + 26;
    case 'E':
      return str[1] + 35;
    case 'F':
      return str[1] + 44;
    case 'G':
      return str[1] + 53;
    case 'H':
      return str[1] + 62;
    case 'I':
      return str[1] + 71;
  }
};
// const { puzzlesAndSolutions } = require('./puzzle-strings.js');
document.addEventListener('DOMContentLoaded', () => {
  //Load a simple puzzle into the text area
  textArea.value =
    '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  sudokuFill(textArea.value);
});
document.getElementById('text-input').addEventListener('keyup', function () {
  console.log('imhere: ', document.getElementById('text-input').value);
  sudokuFill(textArea.value);
});
document.getElementsByTagName('td').addEventListener('keyup', function () {
  console.log('imhere: ', document.getElementById('text-input').value);
  sudokuFill(textArea.value);
});
/* 
  Export your functions for testing in Node.
  Note: The `try` block is to prevent errors on
  the client side
*/
try {
  module.exports = {};
} catch (e) {}
