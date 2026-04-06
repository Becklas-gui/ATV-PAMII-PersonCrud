Descrição do projeto<br>
Esse projeto é um aplicativo mobile inspirado em Steel Ball Run feito como atividade com o objetivo de consumir uma api própria. O aplicativo carrega os dados da api e exibe-os em forma de uma lista, mostrando nomes, e outras informações dos usuários adicionados

Tecnologias utilizadas
Para a criação do aplicativo, foi utilizado o framework do React Native para o frontend e as bibliotecas json-server e localtunnel para o backend

Instalação
Primeiro, baixe e extraia os arquivos desse repositório. Em um prompt de comando, navegue até a pasta "backend" dentro de ATV-PAMII-PersonCrud-main por meio do comando "cd nome-da-pasta", digite o comando "npm i" e espere terminar de baixar. Em um segundo prompt de comando, navegue até a pasta "frontend", digite o comando "npm i" e espere terminar de baixar os módulos necessários.

Execução
Abra um terceiro prompt de comando, navegue até a pasta "backend" e digite o comando "npx json-server --watch database.json --port 3000". No outro prompt de comando que você utilizou anteriormente e que também está na pasta backend, digite o comando "npx lt --port 3000" e copie a url recebida. Abra o arquivo ConfigApi.js, dentro do caminho ATV-PAMII-PersonCrud-main/frontend/src/servers e substituia a url lá existente pela que você copiou/n/n

No outro prompt de comando que está na pasta frontend, digite o comando "npx expo start" e escaneie o qr code gerado no console pelo seu aplicativo expo go ou execute pela web
