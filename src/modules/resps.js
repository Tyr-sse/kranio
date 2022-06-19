exports.resp_funcs = [
	()=>{ //MATCH HTML
		//RENDER MATCH
		console.log('MATCH.html')
		fs.readFile('src/match.html', 
			(errReading, data)=>{
				if(errReading) return;
				//console.log('READ: ',data.toString().split(' ').filter((inp)=>!(inp in ['','\n'] )).join('\n__') );
				res.writeHead(200,{'Content-type':'text/html'});
				res.write(data);
				//console.log("________",data.toString());
				res.end();
			}
		);
		
		expected_url = 'src/match.css';
		
	},
	
	()=>{//MATCH CSS
		console.log('MATCH CSS');
		fs.readFile('src/match.css', 
			(errReading, data)=>{
				if(errReading) return;
				console.log('READ: ',data.toString().split(' ').filter((inp)=>!(inp in ['','\n'] )).join('\n__') );
				res.writeHead(200,{'Content-type':'text/css'});
				res.write(data);
				//console.log("________",data.toString());
				res.end();
			}
		);
	},

];

