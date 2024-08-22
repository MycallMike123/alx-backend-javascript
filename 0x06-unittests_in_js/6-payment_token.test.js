// 6-payment_token.test.js

const getPaymentTokenFromAPI = require('./6-payment_token');
const { expect } = require('chai');

describe('getPaymentTokenFromAPI', () => {
    it('should return a resolved promise with correct data when success is true', (done) => {
        getPaymentTokenFromAPI(true).then((response) => {
            expect(response).to.include({ data: 'Successful response from the API' });
            done();
        }).catch(done);
    });

    it('should do nothing when success is false', (done) => {
        const result = getPaymentTokenFromAPI(false);
        expect(result).to.be.undefined;
        done();
    });
});
