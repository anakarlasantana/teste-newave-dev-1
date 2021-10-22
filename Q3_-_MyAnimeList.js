/**
 * Desenvolva um endpoint em node.js + express, onde você
 * deve passar como parâmetro o id de um anime do MyAnimeList
 * e ele deve retornar: 'title', 'episodes', 'status', 'rating',
 * 'score', 'rank', 'popularity' e 'synopsis'.
 * 
 * Para consumir os dados da MyAnimeList utilize a API abaixo ou
 * qualquer outra que desejar.
 * @link https://jikan.docs.apiary.io/#
 */
Resposta:

// index.js//

const api = require("./api")
const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const bodyParser = require("body-parser")

const server = express()

server.use(express.json());

server.listen(21262)

server.get('/', (req, res) => {
    return res.send({message: "Olá"});

});

server.get('/MyAnimeList', async (req, res) => {
    try{
        const{data} = await api.get('anime/id');
        return res.send({id: data.id})
        } catch (error){
        res.send({erro:error.message})
    }
});


// api.js //

const axios = require("axios")

const api = axios.create({
    baseURL: 'https://api.jikan.moe/v3/anime/id'
})

module.exports = api;

// Infelizmnete não consegui completar a questão. Consegui criar uma API, porém ainda não tenho skills suficiente para consumir uma API, mas segue ai minha tentativa//
