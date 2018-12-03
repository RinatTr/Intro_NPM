const chalk = require('chalk');

const helloBlue = () => {
  console.log(chalk.blue("Hello World"));
}
const helloRed = () => {
  console.log(chalk.red("Hello World"));
}
const stringToColor = (string, color) => {
  console.log(chalk.keyword(color)(string));
}
const evensBlueOddsYellow = (string) => {
  let arr = string.split(" ");
  let output = "";

  arr.forEach((el,i) => {
    i % 2 ? output += `${chalk.yellow(el)} ` : output += `${chalk.blue(el)} `;
  });

  console.log(output);
}
const angryText = (string) => {
  console.log(chalk.red.underline.bold(string.toUpperCase()));
}
const bgCyan = (string) => {
  console.log(chalk.white.bgCyan(string))
}

const boldDirstUnderlineLast = (string) => {
  let arr = string.split(" ");
  let output = "";

  arr.forEach((el,i) => {
    if (i === 0) {
      console.log("im here");
      output += `${chalk.bold(el)} `
    } else if (i === arr.length-1) {
      console.log("im there");
      output += `${chalk.underline(el)} `
    } else {
      output += `${el} `;
    }
  })

  console.log(output);
}

const commandLineChalk = () => {
  let output = "";
  let arr = process.argv;
  arr.forEach((el,i) => {
    if (i > 2) {
      output += `${chalk.keyword(arr[2])(el)} `
    }
  })
  console.log(output);
}
