const localServer = require("./localServer");
const ask = require("./ask");
const fs = require("fs");

const questions = ['What is your name? ',
                    'What is your occupation? ',
                    'Where do you live? ',
                    'Please write a short bio of yourself: ',
                    'What are your hobbies? (Please separate them with commas): ',
                    'What are your top 3 coding languages or skills? (Please separate them with commas): '];

function convertToHTML(answers) {
    const name = answers[0];
    const occupation = answers[1];
    const location = answers[2];
    const bio = answers[3];
    const hobbies = answers[4].split(",");
    const skills = answers[5].split(",");

    var htmlString =
    `<!DOCTYPE html>
    <html>
    <head>
        <title>Portfolio</title>
    </head>
    
    <body>
        <p>Hello. My name is</p>
        <h1>${name}</h1>
    
        <p>${occupation}</p>
        <p>${location}</p>
        <p>${bio}</p>
    
        <h3>Hobbies
            <ul>`;
            for(var i = 0; i < hobbies.length; i++) {
                htmlString += `<li>${hobbies[i]}</li>`;
            }
            htmlString += `</ul>
        </h3>

        <h3>Skills`;

            for(var i = 0; i < skills.length; i++) {
                htmlString += `<li>${skills[i]}</li>`;
            }
            htmlString += `</ul>
        </h3>
    </body>
    </html>`;
}

async function runApp() {
    const answers = await ask.askQuestions(questions);

    convertToHTML(answers);

    localServer.setUpLocalServer();
}

runApp();