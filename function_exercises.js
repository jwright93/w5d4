class Clock {
  constructor() {
    var date = new Date();
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    setInterval(() => this._tick(), 1000);
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.
  }

  printTime() {
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);

    // Format the time in HH:MM:SS
    // Use console.log to print it.
  }

  _tick() {
      // console.log("HEREs");

      // console.log(typeof this.seconds);
      if (this.seconds < 60) {
        this.seconds++;
      }
      else {
        if (this.minutes <  60) {
          this.minutes++;
          this.seconds = 0;
        } else {
          this.hours = (this.hours + 1) % 12;
          this.minutes = 0;
          this.seconds = 0;
        }
      }
      // console.log(`${this.hours}:${this.minutes}:${this.seconds}`);

      this.printTime();
    // 1. Increment the time by one second.
    // 2. Call printTime.
  }
}


const readline = require('readline');

const reader = readline.createInterface({
  // it's okay if this part is magic; it just says that we want to
  // 1. output the prompt to the standard output (console)
  // 2. read input from the standard input (again, console)

  input: process.stdin,
  output: process.stdout
});


function addNumbers (sum, numsLeft, completionCallback) {
  if (numsLeft === 0) {
    reader.close();
    return completionCallback(sum);
  }
  console.log(sum);
  if (numsLeft > 0) {
    reader.question("Pass in your number", function (answer) {
      sum += parseInt(answer);
      console.log(sum);
      addNumbers(sum, numsLeft - 1, completionCallback);
    });
  }
}

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
// const readline = require('readline');
//
// const reader = readline.createInterface({
//   // it's okay if this part is magic; it just says that we want to
//   // 1. output the prompt to the standard output (console)
//   // 2. read input from the standard input (again, console)
//
//   input: process.stdin,
//   output: process.stdout
// });

function askIfGreaterThan(el1, el2, callback) {
  reader.question(`Is ${el1} greater than ${el2}`, function(answer) {
    console.log(answer);
    if (answer === "true")
      callback(true);
    else
      callback(false);
    } );

}

// askIfGreaterThan(3, 5, result => console.log(result));
//
// function swap(arr, i, j) {
//   var tmp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = tmp;
// }



function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i === arr.length - 1) {
    outerBubbleSortLoop(madeAnySwaps);
    return;
  }

  askIfGreaterThan(arr[i], arr[i + 1], (isGreaterThan) => {
    console.log(isGreaterThan);
    if (isGreaterThan) {
      // console.log(true);
      let tmp = arr[i];
      arr[i] = arr[i + 1];
      arr[i+1] = tmp;
      madeAnySwaps = true;
    }
    return innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
  });

}

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps)
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    else {
      sortCompletionCallback(arr);
      return;
    }
  }
  outerBubbleSortLoop(true);
  // Kick the first outer loop off, starting `madeAnySwaps` as true.
}

// absurdBubbleSort([3, 2, 1], function (arr) {
//   console.log("Sorted array: " + JSON.stringify(arr));
//   reader.close();
// });


Function.prototype.myBind = function(context) {
  return () => this.apply(context);
};
