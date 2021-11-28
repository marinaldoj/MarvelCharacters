# Marvel Characters

Esta aplicação tem como principal objetivo realizar a apresentação dos super heróis da Marvel, por meio de uma integração por Marvel API.

# Configuração utilizada

* node version v16.13.0
* npm version 8.1.0
* yarn version 1.22.5

# Como iniciar a aplicação

Após instalar todos os itens citados a cima você precisa fazer o clone desse repositório

``` git clone https://github.com/marinaldoj/MarvelCharacters.git ```

Após ter feito a clonagem do repositório entre na pasta criada

``` cd ./MarvelCharacters ```

Nessa pasta você encontrará todos os arquivos da aplicação, vamos para os passos de configuração
baixe todos os pacotes usados na aplicação usando o seguinte comando

``` npm install ``` ou ``` yarn ```

Após todos os pacotes baixados você deve editar o arquivo

``` .env ``` da aplicação

no arquivo `.env` você encontrará 3 campos para atualizar

* REACT_APP_PRIVATE_KEY 
* REACT_APP_PUBLIC_KEY
* REACT_APP_API_MARVEL

esses valores você encontra acessando sua conta desenvolvedor em  ``` https://developer.marvel.com/ ``` após acessar o link clique na opção Get a Key 

No valor `REACT_APP_PRIVATE_KEY ` você insere o private key da sua conta

No valor `REACT_APP_PUBLIC_KEY` você insere o public key da sua conta

No valor `REACT_APP_API_MARVEL` você insere `http://gateway.marvel.com/v1/public`

Após toda a configuração feita basta salvar e executar o comando
`npm start` ou `yarn start`

# Minhas conclusões

A Aplicação ficou bem funcional com muito potencial de crescimento e expansão, podendo ser feito novas features e melhorias e até mesmo incluir outras funcionalidades na aplicação.

# Agradecimento

Fico grato pela oportunidade espero que tenha gostado do resultado final da aplicação.
*