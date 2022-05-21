import supertest from 'supertest';
import { expect }  from "chai";
import 'dotenv/config'
import input from './dataset.json'

const request = supertest(process.env.BASE_URL)
let pokemon = input[Math.floor(Math.random() * input.length)]

let pokemonName = pokemon.name;
let pokemonMoves = pokemon.moves;
let apiResponse;
let resPokemonMoves = [];

describe(`Pokemon: ${pokemonName}`,  () =>{

  before(async function(){
    await request
      .get(`/pokemon/${pokemonName}`)
      .then(res =>{
        apiResponse = res;
      })
  })

  before(() => {
        for(let i  in apiResponse.body.moves){
          resPokemonMoves.push(apiResponse.body.moves[i].move.name)
        }
  })

  it(`Check ${pokemonMoves[0]}`,()=>{
    expect(resPokemonMoves).have.include(pokemonMoves[0])
  })

  it(`Check ${pokemonMoves[1]}`,()=>{
    expect(resPokemonMoves).have.include(pokemonMoves[1])
  })

  it(`Check ${pokemonMoves[2]}`,()=>{
    expect(resPokemonMoves).have.include(pokemonMoves[2])
  })

  it(`Check ${pokemonMoves[3]}`,()=>{
    expect(resPokemonMoves).have.include(pokemonMoves[3])
  })

  it(`Check ${pokemonMoves[4]}`,()=>{
    expect(resPokemonMoves).have.include(pokemonMoves[4])
  })

  it(`Check ${pokemonMoves[5]}`,()=>{
    expect(resPokemonMoves).have.include(pokemonMoves[5])
  })

  it(`Check ${pokemonMoves[6]}`,()=>{
    expect(resPokemonMoves).have.include(pokemonMoves[6])
  })

  it(`Check ${pokemonMoves[7]}`,()=>{
    expect(resPokemonMoves).have.include(pokemonMoves[7])
  })

  it(`Check ${pokemonMoves[8]}`,()=>{
    expect(resPokemonMoves).have.include(pokemonMoves[8])
  })

  it(`Check ${pokemonMoves[9]}`,()=>{
    expect(resPokemonMoves).have.include(pokemonMoves[9])
  })

  it(`Check ${pokemonMoves[10]}`,()=>{
    expect(resPokemonMoves).have.include(pokemonMoves[10])
  })

  it(`Check ${pokemonMoves[11]}`,()=>{
    expect(resPokemonMoves).have.include(pokemonMoves[11])
  })

  it(`Check ${pokemonMoves[12]}`,()=>{
    expect(resPokemonMoves).have.include(pokemonMoves[12])
  })

  it(`Check ${pokemonMoves[13]}`,()=>{
    expect(resPokemonMoves).have.include(pokemonMoves[13])
  })

  it(`Check ${pokemonMoves[14]}`,()=>{
    expect(resPokemonMoves).have.include(pokemonMoves[14])
  })

});
