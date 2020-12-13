const localServer = require("./localServer");
const portfolio = require("./portfolio");

async function runApp() {
    try {
        await localServer.setUpLocalServer();
        portfolio.generatePortfolio();
    }
    catch(e) {
        console.log('Error in runApp(): ', e);
    }
}

runApp();