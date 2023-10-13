/** @type {import('./$types').PageServerLoad} */
export async function load({}) {
	return {
		planets: fetchPlanets(),
		streamed: {
			people: fetchPeople()
		}
	}
	// console.log(people)
	// planets.map(planet => {
	// 	if (planet.residents.length === 0) {
	// 		return residents[planet.name] = [];
	// 	} else {
	// 		residents = loadResidents(planet.residents)
	// 		return residents[planet.name] = residents
	// 	}
	// })
	// return {...planets, ...residents}
}

async function fetchPeople() {
	let res = await fetch('https://swapi.dev/api/people/');
	let data = res.json();
	return data
}

async function fetchPlanets() {
	let res = await fetch('https://swapi.dev/api/planets/');
	let data = res.json();
	return data
}

// function loadResidents(params) {
// 	if (params == undefined) return [];

// 	let residents = [];
// 	params.map(url => {
// 		let id = url.split('/').at(-2)
// 		let resident = fetchResident(id);
// 		residents.push(resident)
// 	})
// 	return residents
// }

// function fetchResident(id) {
// 	const res = fetch(`https://swapi.dev/api/people/${id}`);
// 	const data = res.json();
// 	return data.name;
// }