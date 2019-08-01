const textSamples = require('./sampleText');

function wordCountAbove2Letters(inputString){
  if(typeof inputString !== 'string'){
    let errorMessage = new Error('Please enter a string');
    return errorMessage;
  }
  return 'That was a good string. Nomnomnom';
}

function sentancesArrayify(){
  return 1;
}

function capitalizeTheEndOfWords(){
  return 1;
}

function sayHello(){
  return 'hello';
}
function addNumbers(val1, val2){
  return val1 + val2;
}
module.exports = {
  wordCountAbove2Letters,
  sentancesArrayify,
  capitalizeTheEndOfWords,
  addNumbers,
  sayHello
};
