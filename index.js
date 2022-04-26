const inquirer = require("inquirer");
const fs = require("fs");

let fileName = './dist/index.html';

const startUp = ([
    {
        type: 'list',
        name: 'roles',
        message: 'Team Member Role:  ',
        choices: ['Manager', 'Engineer', 'Intern',],
    }
]);

const managerInfo = ([
    {
        type: 'input',
        message: 'What is the name of the team Manager?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is the employee ID of the Manager?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is the email address of the Manager?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is the office number of the Manager?',
        name: 'office',
    },
    {
        type: 'list',
        name: 'next',
        message: ' Add Team Members: ',
        choices: ['Manager', 'Engineer', 'Intern', 'Exit'],
    },
]);

const engineerInfo = ([
    {
        type: 'input',
        message: 'What is the name of the Engineer?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is the employee ID of the Engineer?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is the email address of the Engineer?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is the GitHub username of the Engineer?',
        name: 'gitHub',
    },
    {
        type: 'list',
        name: 'next',
        message: ' Add Team Members: ',
        choices: ['Manager', 'Engineer', 'Intern', 'Exit'],
    },
]);

const internInfo = ([
    {
        type: 'input',
        message: 'What is the name of the Intern?',
        name: 'name',
      },
      {
        type: 'input',
        message: 'What is the employee ID of the Intern?',
        name: 'id',
      },
      {
        type: 'input',
        message: 'What is the email address of the Intern?',
        name: 'email',
      },
      {
        type: 'input',
        message: 'What is the school of the Intern?',
        name: 'school',
      },
      {
        type: 'list',
        name: 'next',
        message: ' Add Team Members: ',
        choices: ['Manager', 'Engineer', 'Intern', 'Exit'],
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

addManager = () => {
    console.log("Manager Role activate!");
    inquirer
        .prompt(managerInfo)
        .then(answers => {
            const { name: manName, id: manID, email: manEmail, office: manOffice, next: nextRole, } = answers;

            if (nextRole === 'Manager') {
                addManager();
            } else if (nextRole === 'Engineer') {
                addEngineer();
            } else if (nextRole === 'Intern') {
                addIntern();
            } else {
                generateTeamFoot(fileName);
            }

            let managerCard =
                `<div class="card employee-card">
            <div class="card-header">
                <h2 class="card-title">${manName}</h2>
                <h3 class="card-title"><i class="fa-solid fa-bullhorn"></i> Manager </h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">🆔 ID: ${manID}</li>
                    <li class="list-group-item">📧 Email: ${manEmail}</li>
                    <li class="list-group-item">🚪 Office #: ${manOffice}</li>
                </ul>
            </div>
          </div>`;

            appendingDoom(fileName, managerCard);
        });
}

addEngineer = () => {
    console.log("Engineer role activate!");
    inquirer
        .prompt(engineerInfo)
        .then(answers => {
            const { name: engName, id: engID, email: engEmail, gitHub: engGitHub, next: nextRole, } = answers;
            if (nextRole === 'Manager') {
                addManager();
            } else if (nextRole === 'Engineer') {
                addEngineer();
            } else if (nextRole === 'Intern') {
                addIntern();
            } else {
                generateTeamFoot(fileName);
            }
            let engineerCard =
                `<div class="card employee-card">
            <div class="card-header">
                <h2 class="card-title">${engName}</h2>
                <h3 class="card-title"><i class="fa-solid fa-calculator"></i> Engineer </h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">🆔 ID: ${engID}</li>
                    <li class="list-group-item">📧 email: ${engEmail}</li>
                    <li class="list-group-item">💻 GitHub: ${engGitHub}</li>
                </ul>
            </div>
          </div>`

            appendingDoom(fileName, engineerCard);
        });
}

addIntern = () => {
    console.log("Intern Role activate!");
    inquirer
        .prompt(internInfo)
        .then(answers => {
            const { name: intName, id: intID, email: intEmail, school: intSchool, next: nextRole, } = answers;
            if (nextRole === 'Manager') {
                addManager();
            } else if (nextRole === 'Engineer') {
                addEngineer();
            } else if (nextRole === 'Intern') {
                addIntern();
            } else {
                generateTeamFoot(fileName);
            }
            let internCard =
                `<div class="card employee-card">
            <div class="card-header">
                <h2 class="card-title">${intName}</h2>
                <h3 class="card-title"><i class="fa-solid fa-eraser"></i> Intern </h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">🆔 ID: ${intID}</li>
                    <li class="list-group-item">📧 email: ${intEmail}</li>
                    <li class="list-group-item">🏫 School: ${intSchool}</li>
            </div>
        </div>`
            appendingDoom(fileName, internCard);
        })
}
function init() {
    inquirer
        .prompt(startUp)
        .then(answers => {
            const { roles: empRole } = answers;
            if (empRole === 'Manager') {
                generateTeamHead(fileName);
                addManager();
            } else if (empRole === 'Engineer') {
                generateTeamHead(fileName);
                addEngineer();
            } else if (empRole === 'Intern') {
                generateTeamHead(fileName);
                addIntern();
            }
        })
}

init();
