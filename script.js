var api = "jep3lf7tgact04gld9y8f7r5kd9ogp162zic86a90jx977fmj";

var date = new Date();

var day;

if (date.getMonth < 10) {
    day = "0" + date.getMonth().toString();
} else {
    day = date.getMonth();
}

const url = "https://api.wordnik.com/v4/words.json/wordOfTheDay?date=" + date.getFullYear().toString() + "-" + day.toString() + "-" + date.getDay().toString() + "&api_key=" + api;

const body = document.querySelector('.body');

async function getData(url) {
    let response = await fetch(url);
    let data = await response.json()
    
    return data;
}

getData(url)
    .then(response => {

        body.innerHTML = "";

        // console.log(response);

        post(response.word, response.definitions[0].text);

    });

function post(word, definition) {
    const wordh1 = document.createElement('h1');
    const definitionp = document.createElement('p');

    wordh1.textContent = word.toUpperCase();
    wordh1.className = 'word';

    definitionp.textContent = definition;
    definitionp.className = 'definition';

    body.appendChild(wordh1);
    body.appendChild(definitionp);

    return body;
}