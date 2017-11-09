// JSON concat script to handle 100+ files where specific concatenation was needed and this approach was closer than manually editing those files
// first draft, requires refactoring etc.

const fs = require('fs')
const folder = './json'

function readAll() {
	fs.readdir(folder, function(err, filenames) {
		if (err) {
			console.log(err)
			return
		}
		console.log("folder's content: ", filenames)

		const arrLen = filenames.length
		var result = {
			"params": {},
			"media-queries": {
				"mobile": {},
				"tablet": {},
				"desktop": {}
			}
		}

		for (var i = 0; i < arrLen; i++) {
			let raw = fs.readFileSync(folder + '/' + filenames[i], 'utf-8')
			let data = JSON.parse(raw)

			if (i % 3 === 0) {
				result['media-queries']['mobile'] = Object.assign(data.params)
				result.params = Object.assign(data.params)

			} else if (i % 3 === 1) {
				let tablet = data
				result['media-queries']['tablet'] = Object.assign(data.params)

			} else if (i % 3 === 2) {
				let desktop = data
				result['media-queries']['desktop'] = Object.assign(data.params)
				fs.writeFileSync(filenames[i], JSON.stringify(result, null, 2) , 'utf-8');
			}
		}

	})
}

function readJsonFiles(filename) {
	let data = fs.readFileSync(folder + '/' + filename, 'utf-8')
	console.log("content: ", data)
}


readAll();



