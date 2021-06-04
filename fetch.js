import "./styles.css";

const fetch = require("node-fetch");

const getPokemons = async ({ limit = 10 }) => {
  //Use fetch to this API https://pokeapi.co/api/v2
  //Make sure to not retrieve one specific pokemon, you need to retrieve multiple pokemons
  let pokeList = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=" + limit
  );
  let pokemons = await pokeList.json();
  //console.log(pokemons.results)
  return pokemons; //nose;
};

const getData = async ({ url }) => {
  //Use fetch to this API https://pokeapi.co/api/v2
  //Make sure to not retrieve one specific pokemon, you need to retrieve multiple pokemons
  let response = await fetch(url);
  let data = await response.json();
  //console.log(data.weight)
  return { weight: data.weight, name: data.name }; //nose;
};

const getPokemon = async (limit) => {
  let poke = await getPokemons({ limit });
  //console.log(poke);
  const pokemons = Promise.all(
    poke.results.map(async ({ url }) => {
      const data = await getData({ url });
      //console.log(weight)
      //Fetch one specific pokemon for every url in the poke.results array
      //Then get the weight and name from the result and return it
      return { data };
    })
  );
  return pokemons;
};

getPokemon(2).then(pokemon => {
    //console.log every pokemon
    //This is the expected output
    /*
    [
        { weight: 69, name: 'bulbasaur' },
        { weight: 130, name: 'ivysaur' },
        { weight: 1000, name: 'venusaur' },
        { weight: 85, name: 'charmander' },
        { weight: 190, name: 'charmeleon' },
        { weight: 905, name: 'charizard' },
        { weight: 90, name: 'squirtle' },
        { weight: 225, name: 'wartortle' },
        { weight: 855, name: 'blastoise' },
        { weight: 29, name: 'caterpie' },
        { weight: 99, name: 'metapod' },
        { weight: 320, name: 'butterfree' },
        { weight: 32, name: 'weedle' },
        { weight: 100, name: 'kakuna' },
        { weight: 295, name: 'beedrill' },
        { weight: 18, name: 'pidgey' },
        { weight: 300, name: 'pidgeotto' },
        { weight: 395, name: 'pidgeot' },
        { weight: 35, name: 'rattata' },
        { weight: 185, name: 'raticate' }
      ]
    */
})

