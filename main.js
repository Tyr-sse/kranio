const port = 2200
const domain = 'localhost'
const http = require('http');
const url = require('url');
const dom = require('./src/modules/dom.js');

console.log('debug %d', dom.getN());



const os = require('os');

const fs = require('fs');
const path = require('path');


var req = null;
var res = null;


const texts = {
	"match": `<!DOCTYPE html>
		<html lang="en">
			<head>
				<meta charset="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />

				
				<title>SHOOT</title>
			</head>
			<body>
				CAVALISMO
				
			</body>
		</html>
	`,

	"error_reading_file": `<!DOCTYPE html>
		<html lang="en">
			<head>
				<meta charset="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>ERROR 500</title>
				<style>$-$</style>
			</head>
			<body style="background-color:#121212;color:red">
				<div 
				style="
					font-weight: bold;
					text-align: center;
					margin: auto;
					background-color: #000000;
					color: #aaaaaa;
					border-width: 2px;
					border-type: solid;
					border-color:red;
					"
				>
					ERROR 500 - Error Reading File
				</div>
			</body>
		</html>
		`,

};





const resp_funcs = {
	"send_match_page": async () => { //MATCH HTML
		//RENDER MATCH	
		//console.log('\n>>>>GENERATING MATCH COMPLETE HTML [ ', inp, ' ]');
		let doc = [null, null, null, null];
		addHTML();
		addCSS();
		addGlobalCSS();
		addJS();
		async function addHTML() {//ADD HTML
			//console.log('<getHTML> ');
			return await fs.readFile('./src/pages/match/match.html',
				(errReading, data) => {
					let html = (errReading) ? texts.error_reading_file : data.toString();
					//console.log('</getHTML>');
					addToDoc(html, 0);

				}
			);
		}
		async function addCSS() {//ADD CSS
			//console.log('<getCSS> ');
			fs.readFile('./src/pages/match/match.css',
				(errReading, data) => {
					let css = (errReading) ? 'noCSS' : data.toString();
					//console.log('</getCSS> ');
					addToDoc(css, 1);

				}
			);
		}
		async function addGlobalCSS() {//ADD GLOBAL CSS
			//console.log('<getCSS> ');
			fs.readFile('./src/pages/global.css',
				(errReading, data) => {
					let css = (errReading) ? 'noGlobalCSS' : data.toString();
					//console.log('</getCSS> ');
					addToDoc(css, 3);

				}
			);
		}
		async function addJS() {//ADD JS
			//console.log('<getJS> ');
			fs.readFile('./src/pages/match/match.js',
				(errReading, data) => {
					let js = (errReading) ? '' : data.toString();
					//console.log('</getJS> ');
					addToDoc(js, 2);

				}
			);
		}



		function addToDoc(content, pos) {
			doc[pos] = content;
			if (doc.some((it) => it == null)) return;
			console.log('    >doc mount complete');
			//GENERATE COMPLETE HTML
			res.writeHead(200, { 'Content-type': 'text/html' });

			//HEAD
			//CSS
			//JS
			//BODY
			let html = doc[0].split("$INSERTS$");
			let r = `
				${html[0]}
				<style>${doc[3]}\n${doc[1]}</style>
				
				
				${html[1]}
				<script>${doc[2]}</script> 
				`;
			//console.log('TERMINOU')
			console.log('PAGE> ', r)
			res.end(r);


		}


	},
	"send_debug_page": async () => { //MATCH HTML
		//RENDER MATCH	
		//console.log('\n>>>>GENERATING DEBUG COMPLETE HTML [ ', inp, ' ]');
		let doc = [null, null, null, null];
		addHTML();
		addCSS();
		addGlobalCSS();
		addJS();
		async function addHTML() {//ADD HTML
			//console.log('<getHTML> ');
			return await fs.readFile('./src/pages/debug/debug.html',
				(errReading, data) => {
					let html = (errReading) ? texts.error_reading_file : data.toString();
					//console.log('</getHTML>');
					addToDoc(html, 0);

				}
			);
		}
		async function addCSS() {//ADD CSS
			//console.log('<getCSS> ');
			fs.readFile('./src/pages/debug/debug.css',
				(errReading, data) => {
					let css = (errReading) ? 'noCSS' : data.toString();
					//console.log('</getCSS> ');
					addToDoc(css, 1);

				}
			);
		}
		async function addGlobalCSS() {//ADD GLOBAL CSS
			//console.log('<getCSS> ');
			fs.readFile('./src/pages/global.css',
				(errReading, data) => {
					let css = (errReading) ? 'noGlobalCSS' : data.toString();
					//console.log('</getCSS> ');
					addToDoc(css, 3);

				}
			);
		}
		async function addJS() {//ADD JS
			//console.log('<getJS> ');
			fs.readFile('./src/pages/debug/debug.js',
				(errReading, data) => {
					let js = (errReading) ? '' : data.toString();
					//console.log('</getJS> ');
					addToDoc(js, 2);

				}
			);
		}



		function addToDoc(content, pos) {
			doc[pos] = content;
			if (doc.some((it) => it == null)) return;
			console.log('    >doc mount complete');
			//GENERATE COMPLETE HTML
			res.writeHead(200, { 'Content-type': 'text/html' });

			//HEAD
			//CSS
			//JS
			//BODY
			let html = doc[0].split("$INSERTS$");
			let r = `
				${html[0]}
				<style>${doc[3]}\n${doc[1]}</style>
				
				
				${html[1]}
				<script>${doc[2]}</script> 
				`;
			//console.log('TERMINOU')
			//console.log('PAGE> ',r)
			res.end(r);


		}


	},
	"terminate_match": async () => {
		endpoint_inputs = "";
		req.on('data',chunk=>{endpoint_inputs+=chunk});
		console.log('BFR END')
		req.on('end',()=>{
			//console.log("testando", endpoint_inputs );
			console.log('CALLING DOM > ',endpoint_inputs)
			dom.terminate_match(endpoint_inputs.toUpperCase());
			
		});
		
	}


};
let endpoint_inputs = {};
const endpoints = {
	"/match": resp_funcs["send_match_page"],

	"/debug": resp_funcs["send_debug_page"],


	"/terminateMatch": resp_funcs["terminate_match"],


	"login": () => {
		//RENDER PLUS

	},
	"debug": () => {


		//DEBUG

	}

};

const server = http.createServer(
	(Req, Res) => {

		req = Req;
		res = Res;
		let u = req.url;
		console.log("\n__________________NEW REQ:\n---URL: '" + u + "'\n IN> ");
		if (!(u in endpoints)) return;
		endpoints[u]();
		console.log('\nEND REQ HEAD_____________________ \n');
		
	}
);

server.listen(port, (error) => {
	console.log('initializing server...');

	if (error) {
		console.log("Error 500");
	} else {
		console.group();
		console.log("Server is listening to port: " + port + '\n\n');

	}
});
