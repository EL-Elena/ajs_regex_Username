import Validator from '../index';

test('testing validSymbols in validateUsername', () => {
  const name = new Validator('Паша');
  expect(name.validateUsername()).toBe('Имя пользователя не соответствует правилам!');
});

test('testing ruleForNumbers in validateUsername', () => {
  const name = new Validator('Alic1234e');
  expect(name.validateUsername()).toBe('Имя пользователя не соответствует правилам!');
});

test('testing ruleForFirstSymbol in validateUsername', () => {
  const name = new Validator('-Alic123e');
  expect(name.validateUsername()).toBe('Имя пользователя не соответствует правилам!');
});

test('testing ruleForLastSymbol in validateUsername', () => {
  const name = new Validator('Alic123e_');
  expect(name.validateUsername()).toBe('Имя пользователя не соответствует правилам!');
});

test('testing correct name in validateUsername', () => {
  const name = new Validator('Alic123-_e');
  expect(name.validateUsername()).toBe('Alic123-_e');
});
