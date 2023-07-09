export default class DataValidation {
  constructor(requirements, data ) {
    this.requirements = requirements;    
    this.data = data;
  }

  stringIsEmpty(str) {
    return str === undefined || str === "";
  }

  stringIsWhitespace(str) {
    return /^\s+$/.test(str);
  }

  check() {
    if (this.requirements.cantBeEmpty) {
      if (this.stringIsEmpty(this.data)) {
        return false;
      }
    }
    if (this.requirements.cantBeWhitespace) {
      if (this.stringIsWhitespace(this.data)) {
        return false;
      }
    }
    return true;
  }
}