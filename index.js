const inquirer = require("inquirer");
const fs = require("fs");

let fileName = './dist/index.html';

const startUp = ([
    {
        type: 'list',
        name: 'class',
        message: 'Choose Your List of Classes:  ',
        choices: ['Fighter', 'Mage', 'Hunter',],
    }
]);

const fighterTraits = ([
    {
        type: 'input',
        name: 'name',
        message: 'Insert Fighter Name: ',
    },
    {
        type: 'input',
        name: 'HP',
        message: 'Set HP points |min 1. pt max 9 pt.|: ',
    },
    {
        type: 'input',
        name: 'STR',
        message: 'Set STR points |min 1. pt max 9 pt.|: ',
    },
    {
        type: 'list',
        name: 'weapon',
        message: ' Select Weapon: ',
        choices: ['Shield', 'Sword', 'Gauntlets',],
    },
    {
        type: 'list',
        name: 'next',
        message: ' Create teammate class: ',
        choices: ['Fighter', 'Mage', 'Hunter', 'Exit'],
    },
]);

const mageTraits = ([
    {
        type: 'input',
        name: 'name',
        message: 'Insert Mage Name: ',
    },
    {
        type: 'input',
        name: 'HP',
        message: 'Set HP points |min 1. pt max 9 pt.|: ',
    },
    {
        type: 'input',
        name: 'MAG',
        message: 'Set MAG points |min 1. pt max 9 pt.|: ',
    },
    {
        type: 'list',
        name: 'weapon',
        message: ' Select Weapon: ',
        choices: ['Shield', 'Staff', 'Gauntlets',],
    },
    {
        type: 'list',
        name: 'next',
        message: ' Create teammate class: ',
        choices: ['Fighter', 'Mage', 'Hunter', 'Exit'],
    },
]);

const hunterTraits = ([
    {
        type: 'input',
        name: 'name',
        message: 'Insert Hunter Name: ',
    },
    {
        type: 'input',
        name: 'HP',
        message: 'Set HP points |min 1. pt max 9 pt.|: ',
    },
    {
        type: 'input',
        name: 'DEX',
        message: 'Set DEX points |min 1. pt max 9 pt.|: ',
    },
    {
        type: 'list',
        name: 'weapon',
        message: ' Select Weapon: ',
        choices: ['Shield', 'Bow', 'Daggers',],
    },
    {
        type: 'list',
        name: 'next',
        message: ' Create teammate class: ',
        choices: ['Fighter', 'Mage', 'Hunter', 'Exit'],
    },
]);


//possibly transfer to teambuilder.js?

const generateTeamHead = (fileName) => {
    let headHTML = `<!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/08966e3c68.js" crossorigin="anonymous"></script>
    <script> src = ""</script>
  </head>
  
  <body>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 jumbotron mb-3 team-heading">
          <h1 class="text-center">My Team</h1>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="team-area col-12 d-flex justify-content-center">
          <div class="row row-cols-xs-1 d-flex flex-row justify-content-center" id = "team-builder">`;

    //Adds Header HTML to index.html
    fs.writeFile(fileName, headHTML, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("HTML Head Generated!");
        }
    });
}

const generateTeamFoot = (fileName) => {
    let footHTML = `</div>
    </div>
    </body>
    </html>`

    appendingDoom(fileName, footHTML);
    console.log("HTML Footer Created!")
}

function appendingDoom(fileName, data) {
    fs.appendFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
        }
    });
}

addFighter = () => {
    console.log("Fighter class activate!");
    inquirer
        .prompt(fighterTraits)
        .then(answers => {
            const { name: charName, HP: charHP, STR: charSTR, weapon: charWeapon, next: nextChar, } = answers;

            if (nextChar === 'Fighter') {
                addFighter();
            } else if (nextChar === 'Mage') {
                addMage();
            } else if (nextChar === 'Hunter') {
                addHunter();
            } else {
                generateTeamFoot(fileName);
            }

            let fighterCard =
         `<div class="card employee-card">
            <div class="card-header">
                <h2 class="card-title">${charName}</h2>
                <h3 class="card-title"><i class="fa-solid fa-hand-fist"></i> Class: Fighter </h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">💚 HP: ${charHP}</li>
                    <li class="list-group-item">⚔️ STR: ${charSTR}</li>
                    <li class="list-group-item">Weapon: ${charWeapon}</li>
                </ul>
            </div>
          </div>`;

            appendingDoom(fileName, fighterCard);
        });
}

addMage = () => {
    console.log("Mage class activate!");
    inquirer
        .prompt(mageTraits)
        .then(answers => {
            const { name: charName, HP: charHP, MAG: charMAG, weapon: charWeapon, next: nextChar, } = answers;
            if (nextChar === 'Fighter') {
                addFighter();
            } else if (nextChar === 'Mage') {
                addMage();
            } else if (nextChar === 'Hunter') {
                addHunter();
            } else {
                generateTeamFoot(fileName);
            }
            let mageCard =
         `<div class="card employee-card">
            <div class="card-header">
                <h2 class="card-title">${charName}</h2>
                <h3 class="card-title"><i class="fa-solid fa-hat-wizard"></i> Class: Mage</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">💚 HP: ${charHP}</li>
                    <li class="list-group-item">✨ MAG: ${charMAG}</li>
                    <li class="list-group-item">Weapon: ${charWeapon}</li>
                </ul>
            </div>
          </div>`

            appendingDoom(fileName, mageCard);
        });
}

addHunter = () => {
    console.log("Hunter class activate!");
    inquirer
        .prompt(hunterTraits)
        .then(answers => {
            const { name: charName, HP: charHP, DEX: charDEX, weapon: charWeapon, next: nextChar, } = answers;

            if (nextChar === 'Fighter') {
                addFighter();
            } else if (nextChar === 'Mage') {
                addMage();
            } else if (nextChar === 'Hunter') {
                addHunter();
            } else {
                generateTeamFoot(fileName);
            }
            let hunterCard =
        `<div class="card employee-card">
            <div class="card-header">
                <h2 class="card-title">${charName}</h2>
                <h3 class="card-title"><i class="fa-solid fa-bullseye"></i> Class: Hunter</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">💚 HP: ${charHP}</li>
                    <li class="list-group-item">🏹 DEX: ${charDEX}</li>
                    <li class="list-group-item">Weapon: ${charWeapon}</li>
            </div>
        </div>`
            appendingDoom(fileName, hunterCard);
        })
}
function init() {
    inquirer
        .prompt(startUp)
        .then(answers => {
            const { class: charClass } = answers;
            if (charClass === 'Fighter') {
                generateTeamHead(fileName);
                addFighter();
            } else if (charClass === 'Mage') {
                generateTeamHead(fileName);
                addMage();
            } else if (charClass === 'Hunter') {
                generateTeamHead(fileName);
                addHunter();
            }
        })
}

init();
