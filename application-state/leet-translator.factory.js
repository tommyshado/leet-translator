const leetTranslatorFactory = () => {
    let letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
    let leetChars = ['@', '8', '(', '|)', '3', 'ph', 'g', '#','l', '_|', '|<', '1', "|'|'|", '/\/', '0', '|D', '(,)', '|2', '5', '+', '|_|', '|/', "|/|/'",'><', 'j', '2'];

    // words variables
    let translated = '';
    let originalStringVar = '';

    // an empty object to store the words
    const dict = {};

    const leetLetterIterator = () => {
        for (let i = 0; i < letters.length; i++) {
            const currentLetter = letters[i];

            dict[currentLetter] = leetChars[i];
        }
    }
    
    const leetTranslator = (originalString) => {
        originalStringVar = originalString;
        for (let i = 0; i < originalStringVar.length; i++) {
            const currentLetter = originalStringVar[i];

            translated += dict[currentLetter];
        }
    }
    
    const logsTranslated = () => {
        return translated;
    }

    const translatedOriginal = () => {
        translated = originalStringVar;
        return translated;
    }
    
    return { 
        leetLetterIterator,
        leetTranslator,
        logsTranslated,
        translatedOriginal
    }
}

