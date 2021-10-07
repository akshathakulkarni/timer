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
