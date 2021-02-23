import 'reflect-metadata'
import express from 'express'
import './database'

const app = express()

/*
 * GET -> BUSCA
 * POST -> SALVAR
 * PUT -> ALTERAR
 * DELETE -> DELETAR
 * PATCH -> ALTERAÇÃO ESPECÍFICA
 */

 app.get("/", (request, response)=> {
     return response.json({ message: "olá mundo!" })
 })

 app.post("/", (request, response) => {
    return response.json({ message: "os dados foram salvos com sucesso!" })

 })

app.listen(3333, () => {
    console.log("-------------------------------")
    console.log("Servidor rodando na porta: 3333")
    console.log("-------------------------------")
})