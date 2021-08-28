const router = require('express').Router();
const path = require('path');

router.ger('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.ger('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;