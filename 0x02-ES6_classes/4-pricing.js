import Currency from "./3-currency";

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== "number") {
      throw new Error("Amount must be a number");
    }
    if (!(currency instanceof Currency)) {
      throw new Error("Currency must be an instance of Currency");
    }
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(newAmount) {
    if (typeof newAmount !== "number") {
      throw new Error("Amount must be a number");
    }
    this._amount = newAmount;
  }

  set currency(newCurrency) {
    if (!(newCurrency instanceof Currency)) {
      throw new Error("Currency must be an instance of Currency");
    }
    this._currency = newCurrency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency._name} (${this._currency._code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
