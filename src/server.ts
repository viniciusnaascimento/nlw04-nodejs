import express from 'express'

const app = express()

// GET -> BUSCAR
// POST -> SALVAR
// PUT -> EDITAR
// DELETE -> DELETAR
// PATCH -> ALTERAÇÃO ESPECÍFICA,

app.get('/', (req, res) => {
  res.json({message: "Hello world NLW04!!!"})
})

//1 param -> rota (recurso api)
//2 param -> request, response

app.post('/', (req, res) => {
  //recebeu dados para salvar
  return res.json({message: "Os dados foram salvos com sucesso!"})
})

app.listen(3333, () => console.log('Server running...'))