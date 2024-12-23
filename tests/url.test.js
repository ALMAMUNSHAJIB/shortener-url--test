const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../app');
const Url = require('../models/url.model');

beforeAll(async () => {
  await mongoose.connect('mongodb://localhost:27017/urlshortener-test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});

describe('URL Shortener', () => {
  it('should create a short URL for a valid long URL', async () => {
    const res = await request(app).post('/api/url/shorten').send({
      originalUrl: 'https://example.com',
    });

    expect(res.statusCode).toBe(201);
    expect(res.body.shortUrl).toBeDefined();
  });

  it('should return the original URL when accessing a short URL', async () => {
    const url = await Url.create({ originalUrl: 'https://example.com', shortId: 'test123' });
    const res = await request(app).get(`/api/url/${url.shortId}`);

    expect(res.statusCode).toBe(302); // Redirection
    expect(res.header.location).toBe(url.originalUrl);
  });

  it('should return 404 for a non-existent short URL', async () => {
    const res = await request(app).get('/api/url/nonexistent');

    expect(res.statusCode).toBe(404);
  });
});
