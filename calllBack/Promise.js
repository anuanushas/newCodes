// function bookSearchPromise() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (Math.random() > 0.5) {
//                 resolve("Book found");
//             } else {
//                 reject("Book not found");
//             }
//         }, 3000); // 3000 milliseconds = 3 seconds
//     });
// }

// // Using the promise
// bookSearchPromise()
//     .then((result) => {
//         console.log(result); // Handle the fulfillment case
//     })
//     .catch((error) => {
//         console.log(error); // Handle the rejection case
//     });


function buyBike() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Bought Royal Enfield Himalayan");
        resolve();  // Resolve the promise to indicate completion
      }, 2000);
    });
  }
  
  function planTrip() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Trip to Ladakh planned");
        resolve();  // Resolve the promise to indicate completion
      }, 1000);
    });
  }
  
  function reachLadakh() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Reached Ladakh");
        resolve();  // Resolve the promise to indicate completion
      }, 1000);
    });
  }
  
  function visitPangongLake() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Visited Pangong Lake");
        resolve();  // Resolve the promise to indicate completion
      }, 500);
    });
  }
  
  // Function to execute the steps in order
  async function executeSteps() {
    await buyBike();
    await planTrip();
    await reachLadakh();
    await visitPangongLake();
  }
  
  // Call the function to execute the steps
  executeSteps();
  