var express = require('express');
var router = express.Router();
var dbcon = require('../dbcontroller');

router.get('/', function(req, res) {
  res.send('check');
})

router.post('/auth', function(req, res) {
  dbcon.login(req.body.username, req.body.password, function(result, error) {
    if(error) {
      res.status(404);
      res.send(error);
    } else {
      res.json(result);
    }
  });
});

router.post('/landCredentials', function(req, res) {
  dbcon.getLandIdFromMapper(req.body.ownerNIC, req.body.landKey, function(result, error) {
    if(error) {
      res.status(404);
      res.send(error);
    } else {
      res.json(result);
    }
  });
});

router.post('/getNic', function(req, res) {
  dbcon.getNIC(req.body.ownerNIC, function(result, error) {
    if(error) {
      res.status(404);
      res.send(error);
    } else {
      res.json(result);
    }
  });
});

router.post('/getDeed', function(req, res) {
  dbcon.getDeed(req.body.land_id, function(result, error) {
    if(error) {
      res.status(404);
      res.send(error);
    } else {
      res.json(result);
    }
  });
});

router.post('/getPlan', function(req, res) {
  dbcon.getPlan(req.body.land_id, function(result, error) {
    if(error) {
      res.status(404);
      res.send(error);
    } else {
      res.json(result);
    }
  });
});

module.exports = router;
