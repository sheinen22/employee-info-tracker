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
        engineer info here ***********
    </div>
    <div>
        intern info here************
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
            <div>Email: ${manager.getEmail}</div>
            <div>Office Number: ${manager.getOfficeNumber()}</div> 
        </div>
    </div>
    `
}