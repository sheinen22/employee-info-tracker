function fillData(managerArr, engineerArr, internArr) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" integrity="sha256-7ZWbZUAi97rkirk4DcEp4GWDPkWpRMcNaEyXGsNXjLg=" crossorigin="anonymous">
    <title>Document</title>
</head>
<body>
    <div>
        ${managerArr.map((data) => managerFill(data))}
    </div>
    <div>
        ${engineerArr.map((data) => engineerFill(data))}
    </div>
    <div>
        ${internArr.map((data) => internFill(data))}
    </div>
    `
}

const managerFill = (manager) => {
    return `
    <div class="card" id="manager">
        <div>${manager.getRole()}</div>
        <div class="card-body">
            <div>Name: ${manager.getName()}</div>
            <div>ID: ${manager.getId()}</div>
            <div>Email: ${manager.getEmail()}</div>
            <div>Office Number: ${manager.getOfficeNumber()}</div> 
        </div>
    </div>
    `
}

const engineerFill = (engineer) => {
    return `
    <div class="card" id="engineer">
        <div>${engineer.getRole()}</div>
        <div class="card-body">
            <div>Name: ${engineer.getName()}</div>
            <div>ID: ${engineer.getId()}</div>
            <div>Email: ${engineer.getEmail()}</div>
            <div>Github: ${engineer.getGithub()}</div> 
        </div>
    </div>
    `
}

const internFill = (intern) => {
    return `
    <div class="card" id="intern">
        <div>${intern.getRole()}</div>
        <div class="card-body">
            <div>Name: ${intern.getName()}</div>
            <div>ID: ${intern.getId()}</div>
            <div>Email: ${intern.getEmail()}</div>
            <div>School: ${intern.getCollege()}</div> 
        </div>
    </div>
    `
}

module.exports = fillData;