// input element reference to the dom
const input = document.querySelector('.stringInput');

// buttons reference element to the dom

// reference for translating a word to leet chars
const translateBtn = document.querySelector('.translateButton');
// reference to translate back the leet chars to original string
const originalStr = document.querySelector('.translateToOriginal');

// factory function instance 
const leetTranslator = leetTranslatorFactory();

// events

translateBtn.addEventListener('click', () => {
    leetTranslator.leetLetterIterator();
    leetTranslator.leetTranslator(input.value);

    // create an element
    const translateElement = document.createElement('div');
    translateElement.innerHTML = leetTranslator.logsTranslated();

    document.body.append(translateElement);
});

originalStr.addEventListener('click', () => {
    leetTranslator.leetLetterIterator();
    leetTranslator.leetTranslator(input.value);

    // create an element
    const translatedOriginalElement = document.createElement('div');
    translatedOriginalElement.innerHTML = leetTranslator.translatedOriginal();

    document.body.append(translatedOriginalElement);
});