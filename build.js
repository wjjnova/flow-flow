// cmd
var cmd = "tsc --outDir app/js main.ts";

// Execute cmd
var cp = require("child_process");
cp.exec(cmd, function (error, stdout, stderr) {
	if(stdout != "") {
		console.log('stdout: ' + stdout);
	}
	if(stderr != "") {
		console.log('stderr: ' + stderr);
	}
	if (error !== null) {
		console.log('exec error: ' + error);
	}});
