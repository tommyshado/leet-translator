const leetTranslatorFactory = () => {
    let letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
    let leetChars = ['@', '8', '(', '|)', '3', 'ph', 'g', '#','l', '_|', '|<', '1', "|'|'|", '/\/', '0', '|D', '(,)', '|2', '5', '+', '|_|', '|/', "|/|/'",'><', 'j', '2'];
    let translated = '';

    const dict = {};

    const leetLetterIterator = () => {
        for (let i = 0; i < letters.length; i++) {
            const currentLetter = letters[i];

            dict[currentLetter] = leetChars[i];
        }
    }
    
    const leetTranslator = (originalString) => {
        for (let i = 0; i < originalString.length; i++) {
            const currentLetter = originalString[i];

            translated += dict[currentLetter];
        }
    }
    
    const logsTranslated = () => {
        return translated;
    }
    
    return { 
        leetLetterIterator,
        leetTranslator,
        logsTranslated
    }
}

let insta = leetTranslatorFactory();
insta.leetLetterIterator();
insta.leetTranslator('fullstack');
console.log(insta.logsTranslated());

