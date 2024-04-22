const os = require("os");
const path = require("path");
const fs = require("fs");

let desktoppath = path.join(os.homedir(), "Desktop");
let foldername = "Dev" + Date.now();
const htmlboiler = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <!-- made with 🩷 in sheryians -->
    <!-- start from here -->
</body>

</html>`;
const cssboiler = `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html,
body {
    height: 100%;
    width: 100%;
}

/* start styling here... */
`;

try {
    fs.mkdirSync(path.join(desktoppath, foldername));
    fs.writeFileSync(
        path.join(desktoppath, foldername, "index.html"),
        htmlboiler
    );
    fs.writeFileSync(
        path.join(desktoppath, foldername, "style.css"),
        cssboiler
    );
    fs.writeFileSync(
        path.join(desktoppath, foldername, "script.js"),
        "//start coding here"
    );
    console.log("Your Boilerplate is ready!");
    console.log(
        `You can access the folder from ${path.join(desktoppath, foldername)} `
    );
} catch (error) {
    console.log(error);
}
