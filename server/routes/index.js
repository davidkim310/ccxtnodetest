var express = require('express');
var router = express.Router();
var rp = require('request-promise');
'use strict';
const ccxt = require ('ccxt');

router.get('/kraken', function (req, res, next) {
  (async function () {
    let kraken    = new ccxt.kraken ()
    console.log(req.query.type)
    let info;
    if(req.query.type === 'fetchtrades'){
      info = (kraken.id,    await kraken.fetchTrades ('BTC/USD'))
    } else if(req.query.type === 'loadmarkets'){
      info = (kraken.id,    await kraken.loadMarkets ())
    } else if(req.query.type === 'fetchorderbook'){
      info = (kraken.id,    await kraken.fetchOrderBook (kraken.symbols[0]))
    } else if(req.query.type === 'fetchticker'){
      info = (kraken.id,    await kraken.fetchTicker ('BTC/USD'))
    }
    res.send(info)
}) ();
});

router.get('/markets', function (req, res, next) {
  res.send(ccxt.exchanges)
})


module.exports = router;
