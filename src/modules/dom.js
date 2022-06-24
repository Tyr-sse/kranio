const e = module.exports;
const fs = require('fs');
e.count = 0;
e.getN = () => {
	try {
		let data = fs.readFileSync('./src/db/global_serv.txt');
		let count = 0;
		for (let i = 0; data[i] !== undefined; i++) {
			if (data[i] == 32 && data[i + 1] == 77 && data[i + 2] == 58) count += 1;
		}
		e.count = count;
		return count;
	} catch (err) {
		console.log('ERR> ', err);
		return 0;
	}
}

e.terminate_match = (match_id) => {
	function a() {
		console.log('a');
	}
	let b = () => {
		console.log('b');
	}


	console.log('TERMINATE MATCH (DOM):', match_id);
	let data = '__';
	try {
		data = fs.readFileSync('./src/db/global_serv.txt', 'utf8')
		let b = 0;
		for (let i = 0; i < data.length; i++) {
			console.log('TESTING> ', data.substring(i, i + 2))
			if (data.substring(i, i + 32) != ' M:') break;
			for (let j = i;
				j < data.length &&
				data[j] != ' ';
				j++
			);
			console.log('ENTONCES::  ', data.substring(i, j))

		};

	} catch (errR) {
		console.log('ERROR Reading\n', errR);
	}

}


