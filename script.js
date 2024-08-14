const APILINK = ''
const IMG_PATH = ''
const SEARCHAPI = ''


const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("query");

returnMovies(APILINK)

function returnMovies(url){
    fetch(url).then(res => res.json()) // Faz uma requisição HTTP para a URL fornecida. Quando a resposta for recebida, ela será convertida para JSON.
    .then(function(data){ //Com o objeto JSON, a função dentro deste then será executada.
        console.log(data.results); //Exibe o conteúdo da propriedade results do objeto JSON no console.
        data.results.forEach(element => {
            const div_card = document.createElement('div');
            div_card.setAttribute('class', 'card');

            const div_row = document.createElement('div');            
            div_row.setAttribute('class', 'row');

            const div_column = document.createElement('div');            
            div_column.setAttribute('class', 'column');

            const image = document.createElement('img');
            image.setAttribute('class', 'thumbnail');
            image.setAttribute('id', 'image');

            const title = document.createElement('h3');
            title.setAttribute('id', 'title');

            const center = document.createElement('center');

            title.innerHTML = `${element.title}`;
            image.src = IMG_PATH + element.poster_path;

            center.appendChild(image);
            div_card.appendChild(center);
            div_card.appendChild(title);
            div_column.appendChild(div_card);
            div_row.appendChild(div_column);


        });

    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    main.innerHTML = '';

    const searchItem = search.ariaValue;

    if (searchItem) {
        returnMovies(SEARCHAPI + searchItem);
    }

})