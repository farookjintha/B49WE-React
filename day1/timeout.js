// for (var i = 0; i < 10; i++) {
//   setTimeout(() => {
//     console.log(i);
//   });
// }

const myTimeout = (value) => {
  let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, 1000);
  });

  return myPromise;
};

async function myLoop() {
  for (var i = 0; i < 5; i++) {
    await myTimeout(i);
    console.log(i);
  }
}

myLoop();

// 0 -> 0 -> setTimeout(i)  5     0.00000001s
// 1 -> 1 -> setTimeout(i)  5
// 2 -> 2 -> setTimeout(i)  5
// 3 -> 3 -> setTimeout(i)  5
// 4 -> 4 -> setTimeout(i)  5
// 5 -> i =  5

// var i = 10;

// setTimeout(() => {
//   console.log("After Timeout: ", i);
// }, 3000);
// console.log("Outside Timeout: ", i);

// i = 100;
