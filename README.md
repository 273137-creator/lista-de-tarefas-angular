# Lista de Tarefas — Angular + TypeScript

Aplicação web para gerenciar tarefas do dia a dia (To-Do List), desenvolvida em Angular com componentes standalone e TypeScript.

## Funcionalidades

- Adicionar novas tarefas
- Marcar tarefas como concluídas
- Excluir tarefas
- Filtrar por: todas, pendentes ou concluídas
- Contador de tarefas pendentes em tempo real

## Tecnologias utilizadas

- Angular (standalone components)
- TypeScript
- Angular Forms (`ngModel`) para vínculo de dados
- CSS puro para estilização

## Como executar o projeto localmente

1. Clone o repositório:
```bash
   git clone https://github.com/273137-creator/lista-de-tarefas-angular.git
   cd lista-de-tarefas-angular
```
2. Instale as dependências:
```bash
   npm install
```
3. Rode o servidor de desenvolvimento:
```bash
   ng serve
```
4. Acesse `http://localhost:4200` no navegador.

## Estrutura principal
src/app/
├── app.ts -> lógica do componente (adicionar, filtrar, remover tarefas)
├── app.html -> template da interface
└── app.css -> estilos


## Próximos passos (melhorias futuras)

- Salvar as tarefas no localStorage para não perder ao atualizar a página
- Editar o texto de uma tarefa já criada
- Conectar a uma API backend para persistência real

---
Projeto desenvolvido por Matheus da Silva Gomes como parte dos estudos em Engenharia de Software.