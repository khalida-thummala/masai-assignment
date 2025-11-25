const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter seconds to countdown: ", (input) => {
  let time = Number(input);

  let interval = setInterval(() => {
    console.log(time);
    time--;
    if (time < 0) {
      clearInterval(interval);
      console.log("Countdown Complete!");
      process.exit(0);
    }
  }, 1000);

  function checkKey() {
    rl.question("", (key) => {
      if (key.toLowerCase() === "s") {
        clearInterval(interval);
        console.log("Countdown Stopped!");
        process.exit(0);
      } else {
        checkKey();
      }
    });
  }

  checkKey();
});
