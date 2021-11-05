API para CRUD basico de agendas de trabalho, em um banco de dados MONGODB,
para ser consumida em um ambiente MERN.

DATA base name: Schedule.
Collection name: Basics

Os entry points irão receber atualizações por funcionario no seguinte formato:

"Nome_Funcionario": {
  "Nome_Atividade": "Status da Atividade"
  "Nome_Atividade": "Status da Atividade"
  "Nome_Atividade": "Status da Atividade"
  ...
}

essas são as rotas desta API:

router.post('/basics'); (cria um novo documento de acordo com as entradas)
router.get('/basics'); (Retorna todas as agendas da seguinte forma:

basics: [
  "Nome_Funcionario": {
  "Nome_Atividade": "Status da Atividade"
  "Nome_Atividade": "Status da Atividade"
  "Nome_Atividade": "Status da Atividade"
  ...
},
  "Nome_Funcionario": {
    "Nome_Atividade": "Status da Atividade"
    "Nome_Atividade": "Status da Atividade"
    "Nome_Atividade": "Status da Atividade"
    ...
  },
  "Nome_Funcionario": {
    "Nome_Atividade": "Status da Atividade"
    "Nome_Atividade": "Status da Atividade"
    "Nome_Atividade": "Status da Atividade"
    ...
  },
  ...
]
)
router.put('/basics/:id'); (atualiza uma agenda sobrescrevendo a antiga do respectivo ID padrão do Mongo)
router.delete('/basics/:id'); (dele uma agenda pelo respectivo ID padrão do Mongo)


