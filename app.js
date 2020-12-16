const localServer = require("./localServer");
const ask = require("./ask");
const fs = require("fs");

const questions = ['What is your name? ',
                    'Where do you live? ',
                    'What is your occupation? ',
                    'Please write a short bio of yourself: ',
                    'What are your hobbies? (Please separate them with commas): ',
                    'What are your top 3 coding languages or skills? (Please separate them with commas): '];

async function runApp() {
    const answers = await ask.askQuestions(questions);
    console.log(answers[0]);
    localServer.setUpLocalServer();
}

runApp();