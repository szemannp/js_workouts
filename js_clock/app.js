(function jsClock() {

	function onLoad() {
		const handSeconds = document.querySelector('.hand-seconds')
		const handMinutes = document.querySelector('.hand-minutes')
		const handHours = document.querySelector('.hand-hours')

		function setDate() {
			const current = new Date();
			const handOffset = 90;

			const seconds = current.getSeconds()
			const secondsDegrees = ((seconds / 60) * 360) + handOffset

			const minutes = current.getMinutes()
			const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60 ) * 6) + handOffset

			const hours = current.getHours()
			const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + handOffset

			handSeconds.style.transform = `rotate(${secondsDegrees}deg)`
			handMinutes.style.transform = `rotate(${minutesDegrees}deg)`
			handHours.style.transform = `rotate(${hoursDegrees}deg)`
		}

		setInterval(setDate, 1000)

	}

	window.addEventListener('DOMContentLoaded', onLoad)

})()