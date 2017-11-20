class StringSpec {
    constructor(quotes){
        this.quotes = quotes;
    }
    hasVowels() {
        // Expect five vowels
        // Expect other language vowels(special characters vowels)
        expect("Sharon").toEqual(true);
        expect("dry").toEqual(false);
    }
    toUpper() {
        expect("Waithira").toEqual("WAITHIRA")
    }
    toLower() {
        expect("Waithira").toEqual("waithira")
    }
    ucFirst() {
        expect("waithira").toEqual("Waithira")
    }
    isQuestion() {
        // Expect ? 
        // Expect string
        expect("What?").toEqual(true);
        expect("what").toEqual(false);
    }
    in () {
        expect("word word1 word2").toEqual(["word", "word1", "word2"])
    }
    wordCount() {
        // Expect string 
        expect("").toEqual(0)
        expect("bottle milk").toEqual(2)
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
        // Should be integer
        expect(9).toEqual(true);
        expect("s").toEqual(false);
        expect([]).toEqual(false);
    }
    doubleCheck() {
        // Should be string
        expect(type(string)).toEqual(true);
        expect("aa").toEqual(true);
        expect("ab").toEqual(false);
    }
}