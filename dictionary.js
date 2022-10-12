let dictionarySpace = document.querySelector("#dictionary-noun-space");
let wordInput = document.querySelector('#dictionary-input');
wordInput.addEventListener('keyup', makeWord);

function makeWord (e) {
    let input = e.target.value;
    getWord(input)
}

async function getWord(input) {
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en_GB/${input}`;
    let response = await fetch(url);
    let definitionJSON = await response.json();

    let definitionNoun = definitionJSON[0].meanings[0].definitions[0].definition;
    
    dictionarySpace.innerHTML = definitionNoun;

};


