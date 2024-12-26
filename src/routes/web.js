const express = require('express');
const router = express.Router();
const {getHomepage,getABC,getkhangchu,getlove,getlove1,getlove2,getlove3,getcreatUser,getcreat} = require('../controllers/homecontroller');
router.get('/', getHomepage);
  router.get('/abc', getABC)
  router.get('/khangchu', getkhangchu)
  router.get('/love', getlove)
  router.get('/love1',getlove1)
  router.get('/love2',getlove2)
  router.get('/love3',getlove3)
  router.post('/create-user',getcreatUser)
  router.get('/create',getcreat)
  module.exports = router;
  