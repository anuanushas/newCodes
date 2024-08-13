// 1 call back hell question

// function buyBike(callback) {
//     setTimeout(() => {
//         console.log("Bought Royal Enfield Himalayan");
//         if (callback) callback();
//     }, 2000); // 2 seconds delay
// }

// function planTrip() {
//     setTimeout(() => {
//         console.log("Trip to Ladakh planned");
//     }, 1000);
// }

// // Call buyBike and pass planTrip as a callback
// buyBike(planTrip);



// 2 call back hell question

// function writeLetter(callback) {
//     setTimeout(() => {
//         console.log("Wrote Letter");
//         if (callback) callback();
//     }, 2000);
// }

// function postLetter() {
//     setTimeout(() => {
//         console.log("Letter Posted");
//     }, 1000);
// }

// writeLetter(postLetter);


// 3 call back hell question

// function learnJavaScript(callback) {
//     setTimeout(() => {
//         console.log("JavaScript Learned");
//         if (callback) callback();
//     }, 2000);
// }

// function learnReact() {
//     setTimeout(() => {
//         console.log("React Learned");
//     }, 1000);
// }

// learnJavaScript(learnReact);


// 4 callBack hell question


// function step1(callback) {
//     setTimeout(() => {
//         console.log("Step 1 completed");
//         if (callback) callback();
//     }, 2000); // 2 seconds delay
// }

// function step2(callback) {
//     setTimeout(() => {
//         console.log("Step 2 completed");
//         if (callback) callback();
//     }, 1000); // 1 second delay
// }


// step1(() => {
//     step2(() => {
//         console.log("All steps completed");
//     });
// });



// 5 call backhell question


// function add(value, callback) {
//     setTimeout(() => {
//         const newValue = value + 3;
//         console.log("Added 3");
//         if (callback) callback(newValue);
//     }, 2000); // 2 seconds delay
// }

// function multiply(value, callback) {
//     setTimeout(() => {
//         const newValue = value * 2;
//         console.log("Multiplied by 2");
//         if (callback) callback(newValue);
//     }, 1000); // 1 second delay
// }

// // Starting value
// const initialValue = 2;


// add(initialValue, (newValue) => {
//     multiply(newValue, (newMultivalue) => {
//         console.log(`Final Value: ${newMultivalue}`);
//     })
// })
