import express from "express" //Importa o framework Express, que facilita a criação de APIs e servidores web.
import cors from "cors" //Importa o middleware CORS (Cross-Origin Resource Sharing), que permite controlar o acesso à API de diferentes origens (domínios).
import reviews from "./api/reviews.route.js" //Importa as rotas relacionadas a "reviews" (resenhas ou avaliações) do arquivo reviews.route.js.

const app = express() //Cria uma instância da aplicação Express.

app.use(cors()) //Habilita o middleware CORS, permitindo que requisições de diferentes domínios sejam aceitas pela API.
app.use(express.json()) //Habilita o middleware para que a API consiga interpretar requisições com JSON no corpo, o que é comum em APIs REST.

app.use("/api/v1/reviews", reviews) //Define a rota base /api/v1/reviews para as requisições relacionadas a "reviews". Todas as requisições que começam com este caminho serão direcionadas para o roteador que foi importado de reviews.route.js.
app.use("*", (req, res) => res.status(404).json({error: "not found"}) //Define uma rota coringa (*), que captura qualquer requisição para rotas não definidas no servidor, retornando um erro 404 com a mensagem "not found".
)

export default app //Exporta a aplicação para que possa ser importada e utilizada em outro arquivo (como em um arquivo server.js, onde o servidor seria iniciado).