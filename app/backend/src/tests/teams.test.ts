import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Teams from '../database/models/Teams';
import allTeams from './mock/teams.mock';
import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('rota /teams', () => {
  describe('Usando o método GET ', () => {
    let chaiHttpResponse: Response;

    before(async () => {
      sinon
        .stub(Teams, "findAll")
        .resolves(allTeams as Teams[]);
    });

    after(() => {
      (Teams.findAll as sinon.SinonStub).restore();
    })

    it('retorna a lista completa de times', async () => {
      chaiHttpResponse = await chai.request(app).get('/teams');

      expect(chaiHttpResponse.status).to.be.equal(200);
      expect(chaiHttpResponse.body).to.deep.equal(allTeams);
    });
  });
  describe('Usando o método GET', () => {
    let chaiHttpResponse: Response;

    before(async () => {
      sinon
        .stub(Teams, "findByPk")
        .resolves(allTeams[1] as Teams);
    });

    after(() => {
      (Teams.findByPk as sinon.SinonStub).restore();
    })

    it('retorna time especifíco com id', async () => {
      chaiHttpResponse = await chai.request(app).get('/teams/:id');

      expect(chaiHttpResponse.status).to.be.equal(200);
      expect(chaiHttpResponse.body).to.deep.equal(allTeams[1]);
    })
  })
});
