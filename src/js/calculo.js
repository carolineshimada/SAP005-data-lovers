import * as filtros from './data.js';
import data from '../data/pokemon/pokemon.js';

//*---------------- CONSTANTES E VARIAVEIS ---------------------*/
const pokemons = data.pokemon;
var buttonKanto = document.getElementById("botaoKanto");
var buttonJohto = document.getElementById("botaoJohto");
var buttonReset = document.getElementById("botao-reset");

//*---------------- FUNCTIONS ---------------------*/
function inputKantoCalculo(){
    let value = document.getElementById("inserir-kanto-quantidade").value;
    let valorPokemon = filtros.filterByRegiao(pokemons, "kanto").length;
    let valorTotal = valorPokemon - value;
    document.getElementById("inserir-kanto").innerHTML = "Faltam " + valorTotal + " pokemons para completar sua pokédex de Kanto"
}

function inputJohtoCalculo(){
    let value = document.querySelector('#inserir-johto-quantidade').value;
    let valorPokemon = filtros.filterByRegiao(pokemons, "johto").length;
    let valorTotal = valorPokemon - value;
    document.getElementById("inserir-johto").innerHTML = "Faltam " + valorTotal + " pokemons para completar sua pokédex de Johto"
}
//*---------------- LISTENERS ---------------------*/
buttonKanto.addEventListener('click', (event) => {
    event.preventDefault();
    inputKantoCalculo()});

buttonJohto.addEventListener('click', (event) => {
    inputJohtoCalculo();
    event.preventDefault();
    });

buttonReset.addEventListener('click', (event) => {
    document.getElementById("inserir-johto").innerHTML = "";
    document.getElementById("inserir-kanto").innerHTML = "";
    document.getElementById("inserir-kanto-quantidade").value = "";
    document.getElementById("inserir-johto-quantidade").value = "";
    event.preventDefault();
});
