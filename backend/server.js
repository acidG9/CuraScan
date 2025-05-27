const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(express.json());

const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
  res.send('Server is live and CORS enabled');
});

const authRoutes = require('./routes/auth');
const historyRoutes = require('./routes/history');

app.use('/api/auth', authRoutes);
app.use('/api/history', historyRoutes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
