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

lab.test('retorno da soma de 150 e 150 deve ser 300', (done) => {

    Code.expect(soma(150, 150)).to.equal(300);
    done();
});

lab.test('retorno da soma de 37 e 5 deve ser 37', (done) => {

    Code.expect(soma(37, 5)).to.equal(42);
    done();
});

lab.test('retorno da soma de 20 com 2 deve ser 22', (done) => {

    Code.expect(soma(20, 2)).to.equal(22);
    done();
});
