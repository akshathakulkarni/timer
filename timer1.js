const args = process.argv.slice(2);
//console.log(args);
let negativeNumberCheck = Math.sign(args);
let numberCheck = args[0];
if ((args.length === 0) || (negativeNumberCheck === -1) || (!(isNaN(numberCheck)) === false)) {
  return;
} else {
  setTimeout(() => {
    process.stdout.write('.');
  }, args * 1000);
  setTimeout(() => {
    process.stdout.write('\n');
  }, 0);
}