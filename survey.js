const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let name = "";
let activity = "";
let music = "";
let meal = "";
let food = "";
let sport = "";
let superPower = "";

rl.question(
  "What's your name? Nicknames are also acceptable :) ",
  (answer1) => {
    name = answer1;

    rl.question("What's an activity you like doing? ", (answer2) => {
      activity = answer2;

      rl.question("What do you listen to while doing that? ", (answer3) => {
        music = answer3;

        rl.question(
          "Which meal is your favourite (eg: dinner, brunch, etc.) ",
          (answer4) => {
            meal = answer4;

            rl.question(
              "What's your favourite thing to eat for that meal? ",
              (answer5) => {
                food = answer5;

                rl.question(
                  "Which sport is your absolute favourite? ",
                  (answer6) => {
                    sport = answer6;

                    rl.question(
                      "What is your superpower? In a few words, tell us what you are amazing at! ",
                      (answer7) => {
                        superPower = answer7;

                        console.log(
                          "\n" +
                            `${name} loves listening to ${music} while ${activity}, devouring ${food} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${superPower}`
                        );

                        rl.close();
                      }
                    );
                  }
                );
              }
            );
          }
        );
      });
    });
  }
);
