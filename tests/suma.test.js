const {sum, palindromo} = require('../0.patternModule');

test('sumar 1 + 2 es igual a 3', () => {
    expect(sum(1,2)).toEqual(3);
})

test('es palindroma ', () => {
    expect(palindromo("Alli ves Sevilla")).toBeTruthy();
})