(function drumKit() {

	function onLoad() {
		const keys = document.querySelectorAll('.dk-key')
			console.log(keys)
			keys.forEach(key => key.addEventListener('transitionend', removeTransition))
	}

	function playSound(event) {
		const sound = document.querySelector(`audio[data-key="${event.keyCode}"]`)
		const key = document.querySelector(`.dk-key[data-key="${event.keyCode}"]`)
		if (!sound) return
		sound.currentTime = 0
		sound.play()
		key.classList.add('active')
	}

	function removeTransition(event) {
		if (event.propertyName == 'transform') {
			this.classList.remove('active')
		}
	}

	window.addEventListener('keydown', playSound)
	window.addEventListener('DOMContentLoaded', onLoad)
})();
