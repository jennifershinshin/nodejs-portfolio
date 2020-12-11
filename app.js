const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("What is your name? ", function(name) {
    readline.question("Where do you live? ", function(residence) {
        readline.question("What is your occupation? ", function(occupation) {
            readline.question("What is your LinkedIn? ", function(bio) {
                readline.question("Please write a short bio of yourself: ", function(linkedIn) {
                    readline.question("What are your hobbies? (Please separate them with commas) ", function(hobbies) {
                        readline.question("What are your top 3 coding languages or skills? (Please separate them with commas) ", function(hobbies) {
                            //generate html here?
                            readline.close();
                        });
                    });
                });
            });
        });
    });
});

readline.on("close", function() {
    process.exit(0);
});