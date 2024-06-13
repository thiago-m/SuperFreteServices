# SuperFreteServices
Este é um projeto que utiliza TypeScript com Firebase Functions e Firestore, seguindo o padrão de microsserviços. Ele inclui uma estrutura de configuração e serviços, com testes unitários usando Jest.

## Funcionalidades
__Cadastro de Nomes:__ O projeto oferece um endpoint POST para cadastrar nomes em uma coleção Firestore.

__Incremento Automático de ID:__ Uma função de trigger é acionada no Firestore toda vez que um novo nome é cadastrado, incrementando automaticamente o atributo increment_id com base no número de registros existentes.

## Arquitetura
__O projeto é dividido em duas principais partes:__ configuração e serviços.

### Configuração
__Express:__ Configurações relacionadas ao Express, um framework web para Node.js, são definidas neste arquivo.

__Firebase:__ Configurações relacionadas ao Firebase são armazenadas e definidas neste arquivo.

## Serviços
### Names:
Este serviço lida com o cadastro de nomes.
* __Src:__ Contém o código fonte do serviço.
  * __Functions:__ Funções relacionadas ao serviço names são armazenas nesta pasta.
  * __Triggers:__ Rotas Express e triggers do Firestore estão nesse diretório, outros possiveis trigger seriam criados em outros arquivos e salvos nesta pasta.
  * __index.ts:__ Arquivo que inicia e liga as configurações do projeto.
* __Tests:__ Testes unitários usando Jest para garantir a robustez do serviço.

## Como Rodar o Projeto
1. Pré-requisitos:
* Node.js e npm instalados.
* Ter o arquivo `firebaseSecretKey.json`.
* Ter o `firebase-tools` instalado
* Ter o Java instalado em uma versão superior a 11

2. Clonar o Repositório:
```
git clone https://github.com/thiago-m/SuperFreteServices.git
```
3. Instalar Dependências:
```
npm i -g firebase-tools
cd SuperFreteServices
npm install
cd services/names
npm install
```
4. Configurar Variáveis de Ambiente:
Adiciona o arquivo `firebaseSecretKey.json` na pasta config.

5. Executar Localmente:
```
npm run serve
```
4. Deploy no Firebase:
```
npm run deploy
```
## Contribuindo
Se você deseja contribuir com este projeto, por favor, siga estas etapas:

1. Faça um fork do repositório
2. Crie uma branch para a sua feature (`git checkout -b feature/NomeDaSuaFeature`)
3. Faça commit das suas mudanças (`git commit -am 'Adicionando uma nova feature`)
4. Faça push para a branch (`git push origin feature/NomeDaSuaFeature`)
5. Crie um novo `Pull Request`
