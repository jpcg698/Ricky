const fetch = require('node-fetch')

const getPokemons = async ({ limit = 10 }) => {
    //Use fetch to this API https://pokeapi.co/api/v2
    //Make sure to not retrieve one specific pokemon, you need to retrieve multiple pokemons
    const res =  siguele aqui jeipi
    const jsonParseado = eee investigale papi
    return nose;
}

const getPokemon = async (limit) => {
    let poke = await getPokemons({ limit });
    const pokemons = poke.results.map(({ url }) => {
        //Fetch one specific pokemon for every url in the poke.results array
        //Then get the weight and name from the result and return it
        return { weight, name };
    });
    return pokemons
}

getPokemon(2).then(pokemon => {
    //console.log every pokemon
    //This is the expected output
})

