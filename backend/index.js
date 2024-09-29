//npm init para criar o package.json

import app from "./server.js" //Importa a aplicação Express configurada no arquivo server.js, que provavelmente contém as rotas e middlewares.
import mongodb from "mongodb" //Importa o pacote oficial do MongoDB para Node.js, que permite interagir com um banco de dados MongoDB.
//import ReviewsDAO from "./dao/reviewsDAO.js"

const MongoClient = mongodb.MongoClient //Cria uma instância do cliente MongoDB, que será usada para se conectar ao banco de dados.
//const mongo_username = process.env['MONGO_USERNAME']
//const mongo_password = process.env['MONGO_PASSWORD']
const uri = "mongodb+srv://ennya:Princesa4@cluster0.rzvea.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0" //Define a URI de conexão com o MongoDB. Neste caso, está utilizando o serviço MongoDB Atlas em um cluster remoto

const port = 8000 //Define a porta em que o servidor Express será executado (porta 8000).

MongoClient.connect( //Estabelece a conexão com o MongoDB usando a URI fornecida
    uri,
    {
        maxPoolSize: 50, //Configura o número máximo de conexões simultâneas no pool para 50.
        wtimeoutMS: 2500, //Define um timeout de 2500 ms (2,5 segundos) para operações de escrita.
        useNewUrlParser: true //Usa o novo parser de URL para a conexão (recomendado nas versões mais recentes do driver MongoDB).
    }
)
    .catch(err => { //Caso ocorra algum erro durante a conexão com o banco de dados, o erro será capturado e exibido no console, e o processo será encerrado (process.exit(1)).
        console.error(err.stack)
        process.exit(1)
    })
    .then(async client => { //Caso a conexão com o banco de dados seja bem-sucedida, o servidor Express começa a escutar na porta definida (8000).
        app.listen(port, () => { // Inicia o servidor Express e faz com que ele escute requisições na porta 8000.
            console.log(`listening on port ${port}`)
        })
    })