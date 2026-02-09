// Express API for COMP2068 Assignment 1

const express = require('express');
const app = express();

app.use(express.json());

// logging middleware
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

// ROUTES (THIS IS THE KEY LINE)
const routes = require('./routes');
app.use('/api', routes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
