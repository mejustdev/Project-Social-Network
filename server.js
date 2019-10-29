const express = require('express');

const connectDB = require('./config/db');

const app = express();

// Connect  Database
connectDB();

// Init Middleware --> It should allow us to get data from req.body
app.use(express.json({ extended: false }));

// Defined endpoint
app.get('/', (req, res) => res.send('API running'));

// Define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.port || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// Server.js is our main entry file.
