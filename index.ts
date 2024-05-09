import { type } from "os";
import inquirer from "inquirer";
let user_ans = await inquirer.prompt({
    type:"input",
    name:"words",
    message:"Please Enter Your Sentence"
});
let word_count = user_ans.words.trim().split(" ").length
console.log(`your Sentense has ${word_count} words`);