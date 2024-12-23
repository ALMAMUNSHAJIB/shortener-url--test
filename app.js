const express = require('express');
const mongoose = require('mongoose');
const urlRoutes = require('./routes/url.routes');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/urlshortener', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.use('/api/url', urlRoutes);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
