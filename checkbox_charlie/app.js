console.log("here we go")

const checkboxList = document.querySelectorAll('.checkbox-wrapper input[type="checkbox"]')

console.log(checkboxList)

let lastChecked;

function handleCheck(e) {
	console.log(e)


	let inBetween = false

	if (e.shiftKey && this.checked) {
		checkboxList.forEach(checkbox => {
			console.log(checkbox)
			if (checkbox === this || checkbox === lastChecked) {
				inBetween = !inBetween
			}

			if (inBetween) {
				setChecked(checkbox)
			}
		})
	}

	lastChecked = this
}

function setChecked(checkbox) {
	checkbox.checked = true
}

checkboxList.forEach(checkbox => checkbox.addEventListener('click', handleCheck))