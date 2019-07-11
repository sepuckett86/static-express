const app = require('../lib/app');
const request = require('supertest');

describe('app', () => {
  /*
  create a /api/v1/colors route. 
  It should return an array of colors 
  [{ name: red, hex: 'FF0000', r: 255, g: 0, b: 0 }...]
  */
  it('returns a color array for /api/v1/colors route', () => {
    return request(app)
      .get('/api/v1/colors')
      .then(res => {
        expect(res.body)
          .toEqual(expect.arrayContaining([{ 
            name: 'red', 
            hex: 'FF0000', 
            r: 255, 
            g: 0, 
            b: 0 
          }]));
      });
  });

  /*
  create a /api/v1/colors/:name route. 
  It should return the color from your 
  array of colors by that name.
  */
  it('returns a specific color with /api/v1/colors/:name', () => {
    return request(app)
      .get('/api/v1/colors/red')
      .then(res => {
        expect(res.body).toEqual({
          name: 'red', 
          hex: 'FF0000', 
          r: 255, 
          g: 0, 
          b: 0 
        });
      });
  });
});

