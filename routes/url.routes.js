const express = require('express');
const { v4: uuidv4 } = require('uuid');
const Url = require('../models/url.model');

const router = express.Router();
const BASE_URL = 'http://localhost:3000/api/url';


router.post('/shorten', async (req, res) => {
  const { originalUrl } = req.body;
  if (!originalUrl || !/^https?:\/\/.+/.test(originalUrl)) {
    return res.status(400).json({ error: 'Invalid URL format.' });
  }
  try {
    let url = await Url.findOne({ originalUrl });
    if (!url) {
      const shortId = uuidv4().slice(0, 8);
      url = await Url.create({ originalUrl, shortId });
    }
    res.status(201).json({ shortUrl: `${BASE_URL}/${url.shortId}` });
  } catch (error) {
    res.status(500).json({ error: 'Server error. Please try again.' });
  }
});


router.get('/:shortId', async (req, res) => {
  const { shortId } = req.params;
  try {
    const url = await Url.findOne({ shortId });
    if (!url) {
      return res.status(404).json({ error: 'URL not found.' });
    }
    res.redirect(url.originalUrl);
  } catch (error) {
    res.status(500).json({ error: 'Server error. Please try again.' });
  }
});

module.exports = router;
