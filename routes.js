const express = require('express'),
router = express.Router();

router.get('/hello/:foo/:bar', function(req, res) {
    res.json({message: 'Hello JSON', data: [
        req.params.foo,
        req.params.bar
    ] });
});

router.post('/hello', function(req,res) {
    res.json({result: 'Post was sent', data: req.body});
});

module.exports = router;