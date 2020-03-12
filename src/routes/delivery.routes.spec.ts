import { App } from '../app';
import supertest from 'supertest';

const app = new App();
describe("POST / - a simple api endpoint", () => {
    it("Create a delivery API Request", async () => {
      const result = await supertest(app.app)
      .post("/delivery")
      .send({
        "nombre": "test",
        "apellidos": "test",
        "email": "test",
        "telefono": "test",
        "direccionEntrega": "test",
        "fechaEntrega": "2020-01-01",
        "franjaHoraEntrega": "test"
      });
      expect(result.status).toEqual(201);
    });
  });