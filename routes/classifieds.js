
'use strict';

const express = require('express');
const knex = require('../knex');

const router = express.Router();

router.get('/:id?', (req, res, next) => {
  if (req.params.id) {
    knex.select('id', 'title', 'description', 'price', 'item_image')
      .from('classifieds')
      .where('id', req.params.id)
      .then((result) => {
        res.send(result[0]);
      })
      .catch((err) => {
        console.log(err);
      })
  } else {
    knex.select('id', 'title', 'description', 'price', 'item_image')
    .from('classifieds')
    .then((results)=> {
      res.send(results);
    })
    .catch((err) => {
      console.log(err);
    })
  }
});

router.post('/', (req, res, next) => {
  knex('classifieds')
    .insert(req.body, ['id', 'title', 'description', 'price', 'item_image'])
    .then((result) => {
      res.send(result[0])
    })
    .catch((err) => {
      console.log(err);
    });
});

router.patch('/:id', (req, res, next) => {

});

router.delete('/:id', (req, res, next) => {

});

module.exports = router;
