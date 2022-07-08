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
const match_path = '';
e.start_match = () => {
	if(fs.existsSync(match_path+'match_01.txt')) console.log('>>> match_01.txt already exists');
	fs.writeFileSync(match_path+'match_01.txt', content, err => {
		if(err) console.log('WRITING ERROR> ',err);
		else{
			console.log('Success saving mynewfile.txt');
		}
	});





}


//first lets check if the file exists in the same folder 
if (fs.existsSync('mynewfile.txt')) { //to check the file in the other directories please change the path of the file from "mynewfile.txt" to the path of your file
	console.log('The file exists.'); //instead of consoling you can also remove or modify the file

} else { //this will be exevuted if the files doesn't exist
	//this will create a file in the same directory
	fs.writeFileSync('mynewfile.txt', 'Hello content!', function (err) { //to create the file in the other directories please change the path of the file from "mynewfile.txt" to the path of your file
		if (err) {
			throw err;  //if any error happens then this will through the detailed error
		} else {
			console.log('Saved!'); //if no error found then this code will be executed. instead of consoling you can do other stuff like calling any other function etc
		}
	});

}