const router = require('express').Router();
const { verifySignUp } = require('../middlewares');
const controller = require('../controllers/auth.controller');

router.post('/login', controller.login);

router.post(
  '/sign-up',
  [verifySignUp.checkDuplicateEmail, verifySignUp.checkAddingAdmin],
  controller.signUp
);

module.exports = router;
