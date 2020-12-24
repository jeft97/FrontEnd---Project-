class CalcController {

    constructor() {
        this._displayCalc = "0";
        this._calcElem;
        this.initialize();
    }

    get displayCalc() {
        return this._displayCalc;
    }
    set displayCalc(valueDisplayCalc) {
        this._displayCalc = valueDisplayCalc;
    }
    get calcElem() {
        return this._calcElem;
    }
    set calcElem(valueCalcElem) {
        this._calcElem = valueCalcElem;
    }


    initialize() {
        let displayItem = document.querySelector("#display");
        let calcItem = document.querySelector("#calc");
        displayItem.innerHTML = "0";
        calcItem.innerHTML = "309 x 422";

    }

}