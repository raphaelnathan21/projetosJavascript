/* Objetivo: fazer o carregamento da URL com filmes
Será usado o comando fecth() para localizar
e carregar os filmes e exibir em uma página html
*/

function carregarFilmes() {
    fetch("js/apiFilmes.json")
    
    //Localize o arquivo

    //Receba os dados localizados em json
    .then((response) => response.json())
    
    //Guarde os dados na variável dados
    .then((dados) => {
        
        console.log(dados.results);

        var saida = "<div id=filme>";
        dados.results.map((item, i) => {
            saida += ` 
            
            <div>
            <a href="${item.link}" target="_blank">
            <img src=http://image.tmdb.org/t/p/w500${item.poster_path}>
            </a>
            <p id=voto>${item.vote_average}</p>
            <h2>${item.title}</h2>
            <p id=data>${item.release_date}</p>
            </div>
            `; 
          
        });
        saida += "</div>";
        document.body.innerHTML += saida;
    })
    .catch((erro) => console.log(`Erro ao tentar executar a API -> $(erro)`));
}