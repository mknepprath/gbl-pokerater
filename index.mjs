import 'colors'

import fetch from 'node-fetch'

import teams, { fetchUrl } from './great-league.js'

const byRating = process.argv.includes('--rating')

const teamPosition = ['Lead', 'Swap', 'Closer']

/**
 * Gets data from pvpoke.com.
 * @returns {Promise<{
 *  speciesId: string,
 *  speciesName: string,
 *  rating: number,
 *  counters: {
 *   opponent: string,
 *   rating: number
 *  }[],
 * }>}
 */
const getPvPokeData = async () => {
  return fetch(fetchUrl)
    .then((res) => res.json())
    .catch((err) => console.log('fetch error', err))
}

const pvPokeData = await getPvPokeData()

const allCounters = teams.map((team) =>
  team.map((pokemon) => {
    const counters = pvPokeData.find(
      (p) => p.speciesName === pokemon
    )?.counters
    if (!counters) console.error(pokemon)
    return counters
  })
)

const ratings = [{}, {}, {}]

allCounters.forEach((teamCounters) => {
  teamCounters.forEach((pokemonCounters, teamIndex) => {
    pokemonCounters.forEach((counter, index) => {
      if (!ratings[teamIndex][counter.opponent]) {
        ratings[teamIndex][counter.opponent] = 0
      }
      ratings[teamIndex][counter.opponent] = byRating
        ? ratings[teamIndex][counter.opponent] + 1000 - counter.rating
        : ratings[teamIndex][counter.opponent] + 5 - index
    })
  })
})

// Convert ratings keyed object to array
const ratingsArray = ratings.map((r) =>
  Object.keys(r).map((key) => ({
    speciesId: key,
    speciesName: pvPokeData.find((p) => p.speciesId === key)?.speciesName,
    rating: r[key]
  }))
)

console.log('\n' + ' Pokérater Results '.bold.bgYellow.black)

const sortedRatingsArray = ratingsArray.map((r, index) => {
  r.sort((a, b) => b.rating - a.rating)
  // this is getting mutated later (bug), just logging it here bc it doesn't
  // matter
  console.log('\n' + ` ${teamPosition[index]} `.bgGreen.black + '\n')
  console.log(r.map((r) => `${r.speciesName.blue}: ${r.rating}`).join('\n'))
  return r
})

// merge arrays in ratingsArray and add ratings together
const mergedRatings = ratingsArray.reduce((acc, curr) => {
  curr.forEach((rating) => {
    const existingRating = acc.find((r) => r.speciesId === rating.speciesId)
    if (existingRating) {
      existingRating.rating = existingRating.rating + rating.rating
    } else {
      acc.push(rating)
    }
  })
  return acc
}, [])
mergedRatings.sort((a, b) => b.rating - a.rating)

console.log('\n' + ' Overall Rankings '.bgGreen.black + '\n')
console.log(
  mergedRatings.map((r) => `${r.speciesName.blue}: ${r.rating}`).join('\n')
)

export default allCounters
