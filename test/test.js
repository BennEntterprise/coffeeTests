
//Import testing frameworks and app.
const mocha = require('mocha');
const chai = require('chai');
const app = require('../src/textAnalyzer.js');

//Declare Framework tools.
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();

//Define the SUT and out sample text
const {wordCountAbove2Letters, sentancesArrayify, capitalizeTheEndOfWords} = app;
const testStringArray = require('../src/sampleText.js');

describe('app',function(){
  describe('wordCountAbove2Letters()', function(){
    it('Rejects anything that is not a string', function(){
      //Setup
      let numberSample = 7;
      let objectSample = {name: 'kylee', date: 'today'};
      let nullSample = null;
      let functionSample = function (){};
      //Call function
      let numberResult = wordCountAbove2Letters(numberSample);
      let objectResult = wordCountAbove2Letters(objectSample);
      let nullResult = wordCountAbove2Letters(nullSample);
      let functionResult=wordCountAbove2Letters(functionSample);

      //Test Assertion


      //Cleanup
    });
    xit('Returns Zero for an empty string', function(){
      //Setup
      //Call function
      //Test Assertions
      //Cleanupoo
    });
    xit('Returns a Number for a valid string', function(){
      //Setup
      //Call function
      //Test Assertions
      //Cleanup
    });
  });

  describe('sentancesArrayify()', function(){
    xit('does something that initially fails...', function(){

    });
  });

  describe('capitalizeTheEndOfWords()', function(){
    xit('does something that initially fails...', function(){

    });
  });
})








//Dummy/Litmus/Connectivity Test
// sayHelloResult = app.sayHello();
// addNumbersResult = app.addNumbers(5,5);
// describe('app', function(){
//   describe('sayHello()', function(){
//     it('sayHello should return hello', function(){
//       // let result = app.sayHello();
//       assert.equal(sayHelloResult, 'hello');
//     });
//     it('sayHello should return type string', function(){
//       // let result = app.sayHello();
//       assert.typeOf(sayHelloResult, 'string');
//     });
//   });
//   describe('addNumbers()', function(){
//     it('addNumbers should be above 5', function(){
//       // let result = app.addNumbers(5,5);
//       assert.isAbove(addNumbersResult, 5);
//     })
//     it('addNumbers should return type number', function(){
//       // let result = app.addNumbers(5,5);
//       assert.typeOf(addNumbersResult, 'number');
//     });
//   });
// });
