const fs = require('fs');


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
  <script src="https://kit.fontawesome.com/c502137733.js"></script>
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

module.exports = generateTeamHead;




function generateFighterHTML(name, HP, STR, weapon, fileName) {
  let fighterCard = `<div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${name}</h2>
        <h3 class="card-title"><i class="fa-solid fa-hand-fist"></i> Class: ${charClass}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
      <li class="list-group-item">💚 HP: ${HP}</li>
      <li class="list-group-item">⚔️ STR: ${STR}</li>
      <li class="list-group-item">Weapon: ${weapon}</li>
      </ul>
    </div>`;
}

module.exports = generateFighterHTML;

const generateMageHTML = (name, HP, MAG, weapon, fileName) => {
  let mageCard = `<div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${name}</h2>
        <h3 class="card-title"><i class="fa-solid fa-hat-wizard"></i> Class: ${charClass}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
      <li class="list-group-item">💚 HP: ${HP}</div>
      <li class="list-group-item">✨ MAG: ${MAG}</div>
      <li class="list-group-item">Weapon: ${weapon}</div>
    </div>
  </div> `
}

module.exports = generateMageHTML;

const generateHunterHTML = (name, HP, DEX, weapon, fileName) => {
  let hunterCard = `<div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${name}</h2>
        <h3 class="card-title"><i class="fa-solid fa-bullseye"></i> Class: ${charClass}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
        <li class="list-group-item">💚 HP: ${HP} </div>
        <li class="list-group-item">🏹 DEX: ${DEX} </div>
        <li class="list-group-item">Weapon: ${weapon}</div>
    </div>
  </div> `

}

module.exports = generateHunterHTML;

const generateTeamFoot = (fileName) => {
  let footHTML = `</div>
  </div>
  </body>
  </html>`

}

module.exports = generateTeamFoot;