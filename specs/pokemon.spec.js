import supertest from 'supertest';
import { expect }  from "chai";
import 'dotenv/config'
import * as input from './inputData.json'
import checkMoves from "../helpers/checkMoves";

let inputName = input[0].name;
let inputMoves = input[0].moves;


describe(`Pokemon: ${inputName}`,  () =>{
  const request = supertest(process.env.BASE_URL)
  let result;
  let pokemonMoves = [];

  before(async function(){
    await request
      .get(`/pokemon/${inputName}`)
      .then(res =>{
        result = res;
      })
  })

  it('Is pokemon name correct', function () {
    expect(result.body.name).to.eq(inputName)
  })

  it(`Get all moves of Pokemon: ${inputName}`, () =>{
        for(let i  in result.body.moves){
          pokemonMoves.push(result.body.moves[i].move.name)
        }
    console.log(pokemonMoves)
  })

  it('Check if move includes', ()=>{
    for(let i in inputMoves){
      if (pokemonMoves.includes(i)){
        return true;
      }
      console.log(`${inputMoves[i]} = `)
    }
  })

});
