
# Front End Test

  # Features
**Categorias**
Funcionalidades para as categorias
 - [x] Listar Categorias
 - [x] Cadastrar Categorias
 - [ ] Editar Categorias
 - [ ] Deletar Categorias
 
**Listas**
Funcionalidades para as listas de uma categoria
 - [x] Listagem de Listas por categoria
 - [x] Cadastrar lista em uma categoria
 - [ ] Editar lista em uma categoria
 - [ ] Deletar lista de uma categoria

**Items**
Funcionalidades para os items de uma lista
- [x] Listar items de uma lista
- [x] Cadastrar item em uma lista
- [x] Editar item cadastrado de uma lista
- [ ] Excluir Item cadastrado de uma lista
- [x] Marcar item de uma lista como concluído

TODO
- [ ] Continuous Deployment com netlify
- [ ] Cache de requests
  

## Arquitetura
Os componentes devem saber apenas para quem eles devem delegar uma ação, e não como ela é executada.

**Facade** é um abstração para facilitar a comunicação entre o **Core** e os componentes servindo como desacoplamento de ambos, desta forma podemos trocar a implementação no **Core** sem impactar o funcionando dos componentes

Toda implementação de comunicação com a api e regras de negócios deve ser implementada na camada de **Core.**

![enter image description here](https://i.imgur.com/t3Hvwdt.png)

  
  # Desafio

Criar uma app "To-do list" utilizando Angular 7+ integrando com os endpoints abaixo.

  

A app deve utilizar rotas, componentes e ter uma tela para cada função.

  

Deverá ter as opções:

  

- Listar as categorias

- Listar e inserir listas

- Listar, inserir itens e marcar como "feito"

  

## Endpoint

  

`https://5cfa67ebf26e8c00146d0756.mockapi.io/`

  

## Categories

  

```json

{

"id": "ID da categoria (Gerado)",

"name": "Nome da categoria"

}

```

  

`[GET] /categories` Lista categorias

  

`[GET] /categories/:id` Retorna uma categoria específica

  

`[POST] /categories` Insere uma categoria

  

`[PUT] /categories/:id` Atualiza uma categoria

  

`[DELETE] /categories/:id` Remove uma categoria

  

## Lists

  

```json

{

"id": "ID da lista (Gerado)",

"name": "Nome da lista"

}

```

  

`[GET] /categories/:idCategory/lists` Lista as listas de uma categoria

  

`[GET] /categories/:idCategory/lists/:id` Retorna uma lista específica de uma categoria

  

`[POST] /categories/:idCategory/lists` Insere uma lista em uma categoria

  

`[PUT] /categories/:idCategory/lists/:id` Atualiza uma lista de uma categoria

  

`[DELETE] /categories/:idCategory/lists/:id` Remove uma lista de categoria

  

## Items

  

```json

{

"id": "ID do item (Gerado)",

"name": "Nome do item",

"done": true,

}

```

  

`[GET] /categories/:idCategory/lists/:idList/items` Lista os itens de uma lista

  

`[GET] /categories/:idCategory/lists/:idList/items/:id` Retorna um item

  

`[POST] /categories/:idCategory/lists/:idList/items` Insere um item em uma lista

  

`[PUT] /categories/:idCategory/lists/:idList/items/:id` Atualiza um item da lista

  

`[DELETE] /categories/:idCategory/lists/:idList/items/:id` Remove um item
