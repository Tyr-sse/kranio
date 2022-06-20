const players = [
	['nick_01',10,"pswd001","ookonnnn"],
	['nick_02',10,"pswd002","ookonnnn"],
	['nick_03',10,"pswd003","ookonnnn"],
	['nick_04',10,"pswd004","ookonnnn"],
	['nick_05',10,"pswd005","ookonnnn"],
	

]
let cpl=0; //current player lance
let cpi = 0;//current player index
function lance(increment){
	cpl+=increment; 
	players[cpi][1] = lance;
	console.log('s');
	
	getElementById('lance').innerHTML = 
		`<button class="btn-lance" onClik="lance(1)">+</button>
			${cpl}
		<button class="btn-lance" onClik="lance(-1)">-</button>`
}

function f(){
	console.table(players);
	document.getElementById('a').innerHTML = 'XABLAU CAR';
	
}

let auth = 'pswd002';
function updateScreen(){
	players.forEach(
		(player,pi)=>{
			//TIRAR PONTO DE VISTA
			if(player[2]===auth){
				
				
				return;
			} 
			
			`
				<div class='player col'>
					<div class='player-info'>
						<div class='player-nick'>
							JOSE
						</div>
						<div class='player-lance'>
							0
						</div>
					</div>
					<div class='player-field col'>
						<div k class='field-card'>k</div>
						<div class='field-card'>n</div>
						<div class='field-card'>n</div>
						
					</div>
					
				</div>
			`
			
			
		}
	);
	
	
	
	
}