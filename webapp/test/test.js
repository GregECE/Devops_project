const request = require('supertest');
const app = require('../src/index');

describe('Basic Tests', () => {
    it('should return homepage', (done) => {
        request(app).get('/').expect(200, done);
    });
    it('should return health check', (done) => {
        request(app).get('/health').expect(200, done);
    });
});