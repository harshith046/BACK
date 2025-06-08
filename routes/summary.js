const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

router.get('/dashboard-summary', authMiddleware, (req, res) => {
  res.json({
    teams: 3,
    projects: 7,
    notifications: 12
  });
});

module.exports = router;
