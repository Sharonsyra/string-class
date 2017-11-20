class String {
    constructor(quotes){
        this.quotes = quotes;
    }
    hasVowels() {
        if(vowels){
            return true;
        }
        else{
            return false;
        }
    }
    toUpper() {
        return "UPPERCASE";
    }
    toLower() {
        return "lowercase";
    }
    ucFirst() {
        return "Capitalized";
    }
    isQuestion() {
        if(queestion) {
            return true;
        }
        else{
            return false;
        }
    }
    in () {
        return ["word", "word1", "word2"]
    }
    wordCount() {
        words = in("sentensi");
        count = in().length;
        return count;
    }
    toCurrency() {
        expect(11111.11).toEqual(11,111.11);
    }
    fromCurrency() {
        expect(11,111.11).toEqual(11111.11);
    }
    inverseCase() {
        expect("WaiThiRa").toEqual("wAItHIrA");
    }
    alternatingCase() {
        expect("Waithira").toEqual("wAiThIrA");
    }
    getMiddle() {
        expect("bottle").toEqual("tt");
    }
    numberWords() {
        expect(325).toEqual("Three two five");
    }
    isDigit() {
        if(number){
            return true;
        }
        else{
            return false;
        }
    }
    doubleCheck() {
        if(two_chars){
            return true;
        }
        else{
            return false;
        }
    }
}