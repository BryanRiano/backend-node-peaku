import { App } from './app';
import supertest from 'supertest';

const app = new App();

test('should return false given external link', () => {
    expect(app.listen())
  })