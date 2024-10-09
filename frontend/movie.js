const url = new URL(location.href);
const movieId = url.searchParams.get("id");
const movieTitle = url.searchParams.get("title");


const APILINK = 'http://localhost:8000/api/v1/reviews/';


const main = document.getElementById("section");
const title = document.getElementById("title");

title.innerText = movieTitle;


returnReviews(APILINK);

function returnReviews(url){
    fetch(url + "movie/" + movieId).then(res => res.json()) // Faz uma requisição HTTP para a URL fornecida. Quando a resposta for recebida, ela será convertida para JSON.
    .then(function(data){ //Com o objeto JSON, a função dentro deste then será executada.
        console.log(data); //Exibe o conteúdo da propriedade results do objeto JSON no console.
        data.results.forEach(review => {
            const div_card = document.createElement('div');
            div_card.innerHTML = `
                <div class="row">
                    <div class="column">
                        <div class="card" id="${review._id}">
                            <p><strong>Review: </strong>${review.review}</p>
                            <p><strong>User: </strong>${review.user}</p>
                            <p><a href="#" onclick="editReview('${review._id}', '${review.review}', '${review.user}')">edit</a>
                            <a href="#" onclick="deleteReview('${review._id}')">delete</a>
                            </p>
                        </div>
                    </div>
                </div>
            `

            main.appendChild(div_card);
        });

    });
}

function editReview(id, review, user) {
    const element = document.getElementById(id);
    const reviewInputId = "review" + id
    const userInputId = "user" + id

    element.innerHTML = `
            <p><strong>Review: </strong>
            <input type="text" id="${reviewInputId}" value="${review}">
            </p>
            <p><strong>User: </strong>
            <input type="text" id="${userInputId}" value="${user}">
            </p>
            <p>
            <a href="#" onclick="saveReview('${reviewInputId}','${userInputId}',)">salvar</a>
            </p>
    `

}

function saveReview(reviewInputId, userInputId, id="") {
    const review = document.getElementById(reviewInputId).value;
    const user = document.getElementById(userInputId).value;

    id (id){
        fetch(APILINK + id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"user": user, "review": review, "movieId": movieId})
        }).then(res => res.json())
            .then(res => {
                console.log(res)
                location.reload();
            });
    }
}





