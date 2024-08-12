const APILINK = ''
const IMG_PATH = ''
const SEARCHAPI = ''


const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("query");

returnMovies(APILINK)

function returnMovies(url){
    fetch(url).then(res => res.json()) // Faz uma requisição HTTP para a URL fornecida. Quando a resposta for recebida, ela será convertida para JSON.
    .then(function(data)){ //Com o objeto JSON, a função dentro deste then será executada.
        console.log(data.results); //Exibe o conteúdo da propriedade results do objeto JSON no console.
        data.results.forEach(element => {
            const div_card = document.createElement('div');
            const div_row = document,createElement('div');
            const div_column = document.createElement('div');
            const image = document.createElement('img');
            const title = document.createElement('h3');
            const center = document.createElement('center');

            
        });

    });
}