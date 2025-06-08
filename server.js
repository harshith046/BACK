const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config();

connectDB();

const app = express();
app.use(express.json());
app.use(cors());

const authRoutes = require('./routes/auth');
const preferenceRoutes = require('./routes/preferences');
const userRoutes = require('./routes/user');

app.use('/api', authRoutes);
app.use('/api', preferenceRoutes);
app.use('/api', userRoutes);

const summaryRoutes = require('./routes/summary');
app.use('/api', summaryRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
