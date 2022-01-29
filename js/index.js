const persons = document.getElementById('persons');
const starships = document.getElementById('starships');
const planets = document.getElementById('planets');
const body = document.getElementById('body');

fillCounters();

function fillCounters() {
    Promise.all([
        getData('people/'),
        getData('starships/'),
        getData('planets/')
    ])
    .then(data => {
        persons.style.fontSize = '5em';
        starships.style.fontSize = '5em';
        planets.style.fontSize = '5em';

        persons.innerHTML = data[0].count;
        starships.innerHTML = data[1].count;
        planets.innerHTML = data[2].count;

    })
    .catch(err => console.log('Erro:', err))
};

function getData(param) {
return fetch(`https://swapi.dev/api/${param}`)
        .then(res => res.json())
};

function loadPhrase() {
    const btn = document.getElementById('btn-phrases');
    const phrase = document.getElementById('phrase');


    return fetch('https://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote')
        .then(data => data.json())
        .then(json => {
            btn.innerHTML = 'Once again?';
            phrase.innerHTML = `"${json.content}"`;

        phrase.animate([
            { transform: 'tranlateY(-70px)'},
            { transform: 'tranlateY(-0px)'},
            
        ]), {
            duration: 500
        }
        })
        .catch(err => console.log('Erro:', err))
        
};

function changePersons(){
    body.style.backgroundImage = 'url(../img/personagens.jpg)';
    body.style.backgroundSize = 'cover';
    body.style.transition = '0.8s';
};

function changeDarth(){
    body.style.backgroundImage = 'url(../img/bg.jpg)';
    body.style.backgroundSize = 'cover';
    body.style.transition = '0.8s';
}

function changeObi(){
    body.style.backgroundImage = 'url(../img/obi.jpeg)';
    body.style.backgroundSize = 'cover';
    body.style.transition = '1s ease';
}

function changeStarships(){
    body.style.backgroundImage = 'url(../img/starships.jpg)';
    body.style.backgroundSize = 'cover';
    body.style.transition = '0.8s';
}

function changePlanets(){
    body.style.backgroundImage = 'url(../img/planets.jpg)';
    body.style.backgroundSize = 'cover';
    body.style.transition = '0.8s';
}
