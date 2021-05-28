const path = require('path');
const fs = require("fs");
const fse = require("fs-extra");
const pug = require("pug");

// Remove dist folder
if (fse.ensureDir("./dist") == true) {
	fse.remove("./dist", (err) => {
		if (err) throw err;
		console.log("Successfully removed dist folder");
	})
}

// Copy public folder into dist folder
fse.copy("./public", "./dist", (err) => {
	if (err) throw err;
	console.log("Successfully copied public folder into dist folder");
});

// Copy Bootstrap CSS and JS and Normalize.CSS into dist folder
fse.copy("./node_modules/bootstrap/dist/css/bootstrap.min.css", "./dist/bootstrap.min.css", (err) => {
	if (err) throw err;
	console.log("Successfully copied bootstrap.min.css from node_modules folder to dist folder");
});

fse.copy("./node_modules/bootstrap/dist/js/bootstrap.min.js", "./dist/bootstrap.min.js", (err) => {
	if (err) throw err;
	console.log("Successfully copied bootstrap.min.js from node_modules folder to dist folder");
});

fse.copy("./node_modules/@fosscord/ui/css/list.css", "./dist/list.css", (err) => {
	if (err) throw err;
	console.log("Successfully copied list.css from node_modules folder to dist folder");
});

// Compile pug views into html files
function compile(template, finalFile, values) {
	const temp = pug.compileFile("views/" + template + ".pug");
	if (finalFile == "index.html") {
		fs.writeFile("dist/index.html", temp(values), (err) => {
                	if (err) throw err;
                	console.log("Successfully compiled views/" + template + ".pug into dist/" + finalFile);
        	});
	} else {
		fs.writeFile("dist/" + template + "/"  + finalFile, temp(values), (err) => {
			if (err) throw err;
			console.log("Successfully compiled views/" + template + ".pug into dist/" + finalFile);
		});
	}
}

console.log("You can see the builded content in " + path.resolve(__dirname, "dist/index.html"));
compile("home", "index.html", { title: "Fosscord - Chat platform" });
