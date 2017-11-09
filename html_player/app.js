console.log("here we go")

const player = document.querySelector('.player')
const video = player.querySelector('.viewer')

const progressBar = player.querySelector('progress-bar')
const toggle = player.querySelector('.toggle')

const skippers = player.querySelectorAll('[data-skip]')
const sliders = player.querySelectorAll('player-slider')


function togglePlay() {
	if (video.paused) {
		video.play()
	} else {
		video.pause()
	}
}

