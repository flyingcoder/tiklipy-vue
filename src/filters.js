export default {
    currencyUSD(value) {
      return '$' + value
    },
    capitalizeFirstLetterSentence(sentence) {
        if (sentence.length === 0) return "";
        return sentence.charAt(0).toUpperCase() + sentence.slice(1);
    },
    capitalizeSentencesInParagraph(paragraph) {
        if (paragraph.length === 0) return "";
        return paragraph.replace(/(^|\. )(\w)/g, (match) => match.toUpperCase());
    }

}