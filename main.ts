#! /usr/bin/env node
import inquirer from "inquirer"

let myBalance = 10000; //Dollar
let myPin = 1234;

let pinAnswer = await inquirer.prompt(
    [
        {
            name:"pin",
            message:"enter your pin",
            type:"number"
        },
    ]
);

if (pinAnswer.pin === myPin) {
    console.log("Welcome to your account");


    let operationAns = await inquirer.prompt(
        [
            {
                name:"operation",
                message:"Please select option",
                type:"list",
                choices:["fastCash", "withdraw", "checkBalance"]
            },
        ]
    );

  if(operationAns.operation === "fastCash"){
    let amountAns = await inquirer.prompt(
        [
            {
                name:"fastCash",
                message:"Select your amount",
                type:"number",
                choices:["500", "1000", "2000", "5000"],
            },
        ]
    );
    myBalance -=amountAns.fastCash;
    console.log(`Your withdraw ${amountAns.fastCash} rupees \n your remaining balance is ${myBalance}`);
  }

  else if(operationAns.operation === "withdraw"){
   let amountAns =await inquirer.prompt([
    {
        name:"amount",
        message:"Enter your amount",
        type:"number",
    }
   ]);
   if(amountAns.amount < 500){
    console.log(`You can not withdraw less than 500`)
   }
   else if(amountAns.amount <= myBalance){
    myBalance -= amountAns.amount;
    console.log(`You withdraw ${amountAns.amount} rupees \n your remainng balance is ${myBalance}`)
   }
   else{
    console.log("Insufficent balance")
   }
}
   else if(operationAns.operation === "checkBalance"){
    console.log(`Your balance is ${myBalance}`);
   }
}
else{
    console.log("Incorrect pin number");
}

