import { App } from '../app';
import supertest from 'supertest';

const app = new App();
describe("GET / - a simple api endpoint", () => {
    it("Get list tasks API Request", async () => {
      const result = await supertest(app.app).get("/task/1/2020-01-01");
      expect(result.status).toEqual(200);
    });
  });