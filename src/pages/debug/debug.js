const domain = 'localhost:2200';


function isValidMatchId(match_id) {
	let r = true;
	if (
		typeof (match_id) !== typeof ("string") || !match_id
	) return false;
	let mid = match_id.toUpperCase();
	const algarisms = ['0','1','2','3','4','5','6','7','8','9'];
	for(let i=0; i<mid.length;i++){
		if(!algarisms.includes(mid[i])) return false;
	}
	return r;
}


function terminateFunc() {
	let m_id = document.getElementById('terminate_txtbx').value;
	// if (!isValidMatchId(m_id)) {
	// 	//ENTRADA INVALIDA
	// 	return;
	// }
	
	console.log('Valido?', isValidMatchId(m_id));
	if(!isValidMatchId(m_id)) return;
	try {
		console.log('')

		// 'Content-Type',
		// 	'text/plain;charset=UTF-8',
		// 	'Accept',
		console.log('>> ',m_id);
		fetch(
			`http://${domain}/terminateMatch`,
			{
				method: 'POST',
				body: m_id,
				headers: {
					'Content-Type': 'application/text-plain'
				}
			}
		)
			.then(gotTerminateInfo(m_id))
			.catch()
		//post.(`http://${domain}/terminateMatch`, {m: m_id});

	} catch (err) {
		console.log('tried to terminate', err);

	}



}

function gotTerminateInfo(match_id) {
	console.log(`SUCESS (HEAD) TERMINATING MATCH ${match_id}`);

}
