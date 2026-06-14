import chalk from "chalk";

console.log(chalk.green("Exito"));
console.log(chalk.red("Error"));
console.log(chalk.yellow("Advertencia"));

//ejercicio 2
import cowsay from "cowsay";

console.log(
  cowsay.say({
    text: "Idk what to say so. Yeah, this is just a cow saying something",
    e: "oO",
    T: "O ",
  }),
);

//ejercicio 3

import axios from "axios";
import { log } from "node:console";

try {
  const response = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto");
  console.log(response.data.name);
  console.log(response.data.height);
  console.log(response.data.weight);
} catch (error) {
  console.error(error);
}

//ejercicio 5

import { uniqueNamesGenerator, animals } from "unique-names-generator";

const customConfig = {
  dictionaries: [animals],
  separator: "-",
  length: 1,
};

const shortName1 = uniqueNamesGenerator(customConfig); // big-donkey
console.log(chalk.blue(shortName1));
const shortName2 = uniqueNamesGenerator(customConfig); // big-donkey
console.log(chalk.cyan(shortName2));
const shortName3 = uniqueNamesGenerator(customConfig); // big-donkey
console.log(chalk.white(shortName3));
const shortName4 = uniqueNamesGenerator(customConfig); // big-donkey
console.log(chalk.bgBlack(shortName4));
const shortName5 = uniqueNamesGenerator(customConfig); // big-donkey
console.log(chalk.magenta(shortName5));
