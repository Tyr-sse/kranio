const e = module.exports;
const fs = require('fs');
e.count = 0;
e.getN = ()=>{
	try{
		let data = fs.readFileSync('./src/db/global_serv.txt');
		let count = 0;
		for(let i=0; data[i]!==undefined; i++){
			if(data[i]==32&&data[i+1]==77&&data[i+2]==58) count += 1;
		}
		e.count = count;
		return count;
	}catch(err){
		console.log('ERR> ',err);
		return 0;
	}
}