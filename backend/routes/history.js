const express = require('express');
const router = express.Router();
const History = require('../models/History');
const auth = require('../middleware/authMiddleware');

router.post('/add', auth, async (req, res) => {
  const { request, response, nickname } = req.body;
  try {
    const history = new History({
      user: req.user.userId,
      request,
      response,
      nickname
    });

    await history.save();
    res.json({ message: 'History saved successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save history' });
  }
});

router.get('/my', auth, async (req, res) => {
  try {
    const history = await History.find({ user: req.user.userId }).sort({ timestamp: -1 });
    res.json(history);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch history' });
  }
});

module.exports = router;
