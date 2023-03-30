import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Users from '../database/models/Users';
import { Response } from 'superagent';
import { token, users } from './mock/user.mock'

chai.use(chaiHttp);

const { expect } = chai;

describe('rota /login', () => {
  describe('Usando o método POST', () => {
    let chaiHttpResponse: Response;

    before(async () => {
      sinon.stub(Users, 'findOne')
        .resolves(users[1] as Users);
    });

    after(() => {
      (Users.findOne as sinon.SinonStub).restore();
    })

    it('retorna o token ao fazer login', async () => {
      chaiHttpResponse = await chai.request(app)
        .post('/login').send({
          'email': 'admin@admin.com',
          'password': 'secret_admin'
        });

      expect(chaiHttpResponse.status).to.be.equal(200);
      expect(chaiHttpResponse.body).to.deep.equal(token);
    });
    it('retorna erro se passar password errado', async () => {
      chaiHttpResponse = await chai.request(app).post('/login').send({
        'email': 'admin@admin.com',
        'password': 'batata'
      });
      expect(chaiHttpResponse.status).to.be.equal(400);
      expect(chaiHttpResponse.body).to.deep.equal({ "message": "password invalid" })
    });
    it('retorna erro ao passar email invalido', async () => {
      chaiHttpResponse = await chai.request(app).post('/login').send({
        'email': 'admin@admin.co',
        'password': 'secret_admin'
      });
      expect(chaiHttpResponse.status).to.be.equal(404);
      expect(chaiHttpResponse.body).to.deep.equal({ "message": "user not found" })
    })
  })
})