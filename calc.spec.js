const Code = require('code');
const Lab = require('lab');
const lab = exports.lab = Lab.script();

const { soma } = require('./calc');

lab.test('retorno da soma de 2 e 3 deve ser 5', (done) => {

    Code.expect(soma(2, 3)).to.equal(5);
    done();
});

lab.test('retorno da soma de 7 e 7 deve ser 14', (done) => {

    Code.expect(soma(7, 7)).to.equal(14);
    done();
});

lab.test('retorno da soma de 150 e 300 deve ser 450', (done) => {

    Code.expect(soma(150, 350)).to.equal(450);
    done();
});

lab.test('retorno da soma de 37 e a deve ser 37', (done) => {

    Code.expect(soma(37, a)).to.equal(37);
    done();
});

lab.test('retorno da divisao de 20 com 2 deve ser 10', (done) => {

    Code.expect(soma(20, 2)).to.equal(10);
    done();
});
