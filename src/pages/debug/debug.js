const domain = 'localhost:2200';


function isValidMatchId(match_id) {

	if (
		typeof (match_id) !== typeof ("string") || !match_id

	) return false;
	match_id.toUpperCase().split('').forEach(letter => {
		console.log('   >', letter);
	});
}


function terminateFunc() {
	console.log('____>>>>term> ' + document.getElementById('terminate_txtbx').value);
	//guardas, validação front
	let m_id = document.getElementById('terminate_txtbx').value;

	if (isValidMatchId(m_id)) return;
	console.log('wut')
	try {
		console.log('')

		// 'Content-Type',
		// 	'text/plain;charset=UTF-8',
		// 	'Accept',

		fetch(
			`http://${domain}/terminateMatch`,
			{
				method: 'POST',
				body: {a:2,b:4,m_id},
				headers: {
					'Content-Type': 'application/text-json'
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
