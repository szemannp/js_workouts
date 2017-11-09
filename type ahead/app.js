
const citiesSource = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'

const citiesList = [];

fetch(citiesSource)
	.then(response => response.json())
	.then(citiesData => citiesList.push(...citiesData))

function findCity(cityName, citiesList) {
	return citiesList.filter(city => {
		const regex = new RegExp(cityName, 'gi')
		return city.city.match(regex) || city.state.match(regex)
	})
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function showResult() {
	const searchResult = findCity(this.value, citiesList)
	const template = searchResult.map(city => {
		const regex = new RegExp(this.value, 'gi')
		const cityName = city.city.replace(regex, `<span class="highlight">${this.value}</span>`)
		const stateName = city.state.replace(regex, `<span class="highlight">${this.value}</span>`)
		return `
			<li class="ta-result">
				<span class="ta-city-name">${cityName}, ${stateName}</span>
				<span class="ta-city-population">Population: ${numberWithCommas(city.population)}</span>
			</li>
		`
	}).join(' ')
	suggestions.innerHTML = template
}


const userInput = document.querySelector('.ta-search-bar')
const suggestions = document.querySelector('.ta-suggestions')

userInput.addEventListener('change', showResult)
userInput.addEventListener('keyup', showResult)