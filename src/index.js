export default class Validator {
  constructor(username) {
    this.username = username;
  }

  validateUsername() {
    const validSymbols = /^[\w-]+$/.test(this.username);
    const ruleForNumbers = /[0-9]{4}/.test(this.username);
    const ruleForFirstSymbol = /^[0-9-_]/.test(this.username);
    const ruleForLastSymbol = /[0-9-_]$/.test(this.username);

    if (!validSymbols || ruleForNumbers || ruleForFirstSymbol || ruleForLastSymbol) {
      return 'Имя пользователя не соответствует правилам!';
    }
    return this.username;
  }
}
