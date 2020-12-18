const localServer = require("./localServer");
const ask = require("./ask");
const fs = require("fs");

const portfolioHtml = 'portfolio.html';

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

    var portfolioHtmlString =
    `<!DOCTYPE html>
    <html>
    <head>
        <link rel="stylesheet" type="text/css" href="Portfolio.css" media="screen"/>
        <title>Portfolio</title>
        <style>
            h1 {
                color: #FC6139;
                font-size: 700%;
                text-align: center;
            }

            h2 {
                color: #F0876D;
                font-family: "Gill Sans", sans-serif;
                padding-right: 300px;
                padding-top: 150px;
                text-align: center;
            }

            h3 {
                color: #F0876D;
                width: 300px;
                padding: 50px;
                border: 15px solid #D6A8FC;
                background-color: #DFB8FF;
                text-align: center;
                font-family: "Gill Sans", sans-serif;
            }

            #boxLists {
                margin: 0 auto;
                width: 1000px;
            }

            #Hobbies {
                float: left;
            }

            #Skills {
                float: right;
            }

            p {
                color: #BE6DF0;
                font-size: 150%;
                text-align: center;
                padding: 10px;
                word-wrap: break-word;
                width: 700px;
                margin: 0 auto;
            }
            
            html {
                background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
            }
        </style>
    </head>    
    <body>
        <h2>Hello. My name is</h2>
        <h1>${name}</h1>
    
        <p>${occupation}</p>
        <p>${location}</p>
        <p>${bio}</p>
    
        <div id="boxLists">
            <div id="Hobbies">
                <h3>Hobbies
                    <ul>`;
                    for(var i = 0; i < hobbies.length; i++) {
                        portfolioHtmlString += `<li>${hobbies[i]}</li>`;
                    }
                    portfolioHtmlString += `</ul>
                </h3>
            </div>
            <div id="Skills">
                <h3>Skills`;
                for(var i = 0; i < skills.length; i++) {
                    portfolioHtmlString += `<li>${skills[i]}</li>`;
                }
                portfolioHtmlString += `</ul>
                </h3>
            </div>
        </div>
    </body>
    </html>`;

    fs.unlink(portfolioHtml, (err) => {
        if(err) throw err;
        console.log('\nDeleted portfolio.html to clear it from previous run.');
    });

    fs.appendFile(portfolioHtml, portfolioHtmlString, (err) => {
        if(err) throw err;
        console.log('Created HTML file!\n');
    });
}

async function runApp() {
    const answers = await ask.askQuestions(questions);

    convertToHTML(answers);

    localServer.setUpLocalServer(portfolioHtml);
}

runApp();