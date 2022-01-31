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
    body.style.background = 'url(../img/persons.jpg) no-repeat center center fixed';
    body.style.backgroundSize = 'cover';
    body.style.transitionDuration = '0.3s';
};

function changeDarth(){
    body.style.background = 'url(../img/darthvader.jpg) no-repeat center center fixed';
    body.style.backgroundSize =  'cover';
    body.style.transitionDuration = '0.3s';
}

function changeObi(){
    body.style.background = 'url(../img/obiwan.jpg) no-repeat center center fixed';
    body.style.backgroundSize =  'cover';
    body.style.transitionDuration = '0.3s';
}

function changeStarships(){
    body.style.background = 'url(../img/starship.jpg) no-repeat center center fixed';
    body.style.backgroundSize =  'cover';
    body.style.transitionDuration = '0.3s';
}

function changePlanets(){
    body.style.background = 'url(../img/planets.jpg) no-repeat center center fixed';
    body.style.backgroundSize =  'cover';
    body.style.transitionDuration = '0.3s';
}
