
function f(){
	console.log('sheet');
	
}

		let player = {
			nick: "John",
			n: 0,
			
			
		};
		const auth = 'ds';
		let players = [
			['joao23'   ,3,'ooooUDnQ','asda1'],
			['maria32'  ,1,'Akkkkkkk','asda'],
			['marcos44' ,3,'ookonnnn','ds'],
			['giselle12',4,'okoonkkn','as'],
			['germ47'   ,7,'ookooonn','sd'],
			
		];
		// o = normal card
		// k = kranium card
		// n = none
		// lowerCase Letters mean they are HIDDEN
		// upperCase letters mean they are REVEALED
		
		
		
		function updateVisuals(){
			updateTable();
			
			
		}
		
		function updateTable(){
			let head = "";
			players.forEach(
				(it,i)=>{
					//DRAW HAND CARDS
					let minicards = "";
					//console.log('['+i+'] ',it);
					it[2].substring(4,8).split('').forEach(
						(letter,i2)=>{
							if(letter==='n') return;
							minicards += `\n<div class='${letter} miniCard' id='card${i}'>${letter}</div>`;
						}
					);
					let player_field = `\n
						<div class='p-card' id='pC${i}'> 
							<div class='inf'>
								<div class='pn'>
									${it[1]}
								</div>
								${it[0]}
							</div>
							<div class='p-card-foot'>
								${minicards}
							</div>
						</div>`;
					if(auth === it[3]){
						let hand = ``;
						
						//DRAW HAND
						it[2].substring(0,4).split('').forEach( 
							(letter)=>{
									if(letter==='n') return;
									hand += `<div class='card ${letter}' id='hc${letter}'></div>`;
								}	
							);
						
						document.getElementById('foot').innerHTML = hand;
						//DRAW PERFIL
						document.getElementById('perfil').innerHTML = `
							<div id='perfil' 
								style="
									height:110px; display:flex;
									flex-direction:column;
									vertical-align: middle;
									margin:auto;"
							>
								<div style="margin:auto">
									<div style="font-size:12px; color:var(--txt);">${it[0]}</div>
									
									<input type="button" 
										style="border-color:var(--tint01); border-radius:20px;" 
										onclick='updateBid(1)' 
										value='^'></input>
									<div style="font-size:35px; color:var(--txt);">${it[1]}</div>
									<input type="button" 
										style="border-color:var(--tint01); border-radius:20px;" 
										onclick='updateBid(-1)' 
										value='v'></input>
								</div>
							</div>
						`;
						
					}else{
						head += player_field;
					}
				}
			);
			document.getElementById('head').innerHTML = head;
					
		
		}
		updateVisuals();
		function updateBid(dir){
			console.log('updateBID',dir);
		}
		function f(){
			console.log('as');
		}
		function t(i){
			let s = i.attributes[0].textContent;
			i.attributes[0].textContent = 
				s.includes("sel")?
				s.replace("sel",""):
				s+" sel";
		}
	
	//GAME FLOW
	
	let gameState = 0;
	setGameState(0)
	function setGameState(n){
		gameState = n;
		switch(gameState){
			case 0:
				getElementById()
				break;
			
		}
		
		
		
	}
	
	
	
	
	