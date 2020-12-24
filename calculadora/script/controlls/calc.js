class CalcController {

    constructor() {
        this._calcItem = document.querySelector("#calc");
        this._displayItem = document.querySelector("#display");
        this._calcElem;
        this.initialize();
    }

    get displayCalc() {
        return this._displayItem.innerHTML
    }
    set displayCalc(valueDisplayCalc) {
        this.this._displayItem.innerHTML = valueDisplayCalc;
    }
    get calcElem() {
        return this._calcItem.innerHTML;
    }
    set calcElem(valueCalcElem) {
        this._calcItem.innerHTML = valueCalcElem;
    }


    initialize() {

        this._displayItem.innerHTML = "0";
        this._calcItem.innerHTML = "309 x 422";

    }

}