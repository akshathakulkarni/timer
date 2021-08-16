const args = process.argv.slice(2);

const timer = args => {
  for (const number of args) {
    if (!isNaN(number) && (number > 0)) {
      setTimeout(() => {
        process.stdout.write(`${number} \n`);
      }, number * 1000);
    }
  }
}

timer(args);

//console.log(args);
//let negativeNumberCheck = Math.sign(args);
//let numberCheck = args[0];

