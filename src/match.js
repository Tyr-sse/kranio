const domain = 'localhost:2200';
let match_id = 1000;
//fetch('https://example.com/', {
	//method: 'GET',
//	body: new FormData()
  //})
const players = [
	['nick_01',11,"pswd001","ookonnnn"],
	['nick_02',12,"pswd002","nnonkono"],
	['nick_03',13,"pswd003","ookonooo"],
	['nick_04',9,"pswd004","ookonkkn"],
	['nick_05',3,"pswd005","ookonnon"],
	

]
let cpl=0; //current player lance
let cpi = 0;//current player index
async function lance(increment){
	if(increment===1){
		try{
			fetch(`http://${domain}/match/${match_id}`)
				.then(resp => resp.json())
				.then(rjson => {
					console.log('RSP >>>',rjson);

					}
				)
			;

		}catch(err){
			console.log('err-fetch> ',err);
		}

	}

	if(!increment){
		console.log('X');
		return;
	}

	cpl+=increment; 
	players[cpi][1] = lance;
	console.log(increment+'>');
	
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
updateScreen();
function updateScreen(){
	
	//console.log(document.getElementsByClassName('f'));
	console.log(document.getElementById("asd"));
	console.table(players);
	let field = "";
	players.forEach(
		(player, pi)=>{
			//TIRAR PONTO DE VISTA
			if(auth === player[2]){
				console.log('THIS', player);
				document.getElementById('lance-n').innerHTML = player[1]+'';
				let hand = "";
				let c = 0;
				player[3].split('').forEach(
					(letter, i)=> {
						switch(letter){
							case 'k':
							case 'o':
								//PLACE FIELDCARDS
								//placed

									if(c<4)hand += `\n<div class='card' h ${(i>3)?'u':''} ${letter}>${letter}</div>`;
									c += 1;
								break;
							default:
								break;
						}
					}
				);
				document.getElementById('hand').innerHTML = hand;
				//return;


			}

			let cards_html = "";
			player[3].substring(4,8).split('').forEach( 
				(letter)=> {
					switch(letter){
						case 'k':
						case 'o':
							//PLACE FIELDCARDS
							cards_html+=`\n<div class='card' ${letter}>${letter}</div>`;
							
							break;
						default:
							break;
					}
				}


			);
			field +=  `\n
			<div class='player col'>
				<div class='player-info'>
					<div class='player-nick'>
						${player[0]}
					</div>
					<div class='player-lance'>
						${player[1]}
					</div>
				</div>
				<div class='player-field col'>
					${cards_html}
				</div>
				
			</div>
			`;

			
			
		}
	);
	document.getElementById("field").innerHTML = field;
	//console.log('>>\n',document.getElementById("field"));
	//document.getElementById("field").innerHTML = field;
	
	
	
	
}