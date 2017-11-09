(function cssUpdater() {

	function onLoad() {

		const inputs = document.querySelectorAll('.settings input')

		inputs.forEach(input => input.addEventListener('change', handleUpdate))
		inputs.forEach(input => input.addEventListener('mousemove', handleUpdate))

			function handleUpdate() {
				const suffix = this.dataset.sizing || ''
				console.log(suffix)
				document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
			}
	}

	window.addEventListener('DOMContentLoaded', onLoad)

})()