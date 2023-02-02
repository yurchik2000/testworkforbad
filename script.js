function firstUniqueSymbol(word) {
    for( let i = 0; i < word.length; i++) {
        if (word.lastIndexOf(word[i]) === i && word.indexOf(word[i]) === i) {            
            return word[i];
        }
    }
}

function main (text) {
    const breakpoint = /\W/;
    const wordArray = text.split(breakpoint);        
    let compiledWord = "";
    wordArray.forEach(word => {
        if (firstUniqueSymbol(word)) compiledWord += firstUniqueSymbol(word);
    })        
    return firstUniqueSymbol(compiledWord);
}

document.querySelector('.find__btn').addEventListener('click', () => {
    document.querySelector('.result').textContent = "";
    const text = document.querySelector('.input__text').value;
    if (text) {
        const output = document.querySelector('.result').textContent = main(text);        
    }
    
})
