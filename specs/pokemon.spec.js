import supertest from 'supertest';
import { expect }  from "chai";
import 'dotenv/config'
import * as input from './inputData.json'
import checkMoves from "../helpers/checkMoves";

let inputName = input[0].name;
let inputMoves = input[0].moves;




describe(`Pokemon: ${inputName}`,  () =>{
  let pokemonMoves = [];

  before(`Get all moves of Pokemon: ${inputName}`, () =>{
    const request = supertest(process.env.BASE_URL)
    request
      .get(`/pokemon/${inputName}`)
      .end((err,res)=>{
        pokemonMoves.push(res.body.moves[0])
        console.log(pokemonMoves.length)
      })
  });

  it('Is pokemon name correct', function () {
    const request = supertest(process.env.BASE_URL)
    request
      .get(`/pokemon/${inputName}`)
      .end((err,res)=>{
        expect(res.body.name).to.eq(inputName)
      })


  });

});
