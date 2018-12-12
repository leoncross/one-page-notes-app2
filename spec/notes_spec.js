// var run = {};
// (function(exports) {
//
//   function equal(argument, expectedValue) {
//     try {
//       if (argument !== expectedValue) throw new Error ("doesnt equal the expected value")
//       if (argument === expectedValue) console.log("%c - Pass", "color: green")
//       }
//     catch(err) {
//       console.log("%c - " + err.stack, "color: red")
//     }
//   }
//
//   function includes(argument, expectedValue) {
//     try {
//       if (eval(argument) !== expectedValue) throw new Error ("doesnt equal the expected value")
//       if (eval(argument) === expectedValue) console.log("%c - Pass", "color: green")
//     }
//     catch(err) {
//       console.log("%c - " + err.stack, "color: red")
//     }
//   }
//
//
//   function test(func, message, argument, expectedValue) {
//     console.log(message)
//     if (func === 'equal') {
//       equal(argument, expectedValue)
//     };
//     if (func === 'includes'){
//       includes(argument, expectedValue)
//     }
//   }
//   exports.test = test
//
// }) (run)
//
//
// // run tests from here:
//
// run.test('includes', 'ensures inserted note is saved', "model.saveNotes('something')", "something");
