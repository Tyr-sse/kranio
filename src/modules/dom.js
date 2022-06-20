const e = module.exports;
const fs = require('fs');

e.updateN = async ()=> {
	fs.readFile('./src/db/global_serv.txt',
		(err, data)=>{
			if(err) return -e.lastN;
			//console.log(data);
			let count = 0;
			for(let i=0; data[i]!==undefined; i++){
				//console.log(data[i])
				if(data[i]==77&&data[i+1]==58) count += 1;
			}
			e.count = count;
			console.log('updated count to ',count)
		}
	);

};
