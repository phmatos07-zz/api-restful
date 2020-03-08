const express = require('express');
const user = require('../../models/user.model.js');
const router = express.Router();

router.post('/register', async (req, res) => {
  try {

    const userModel = await user.create(req.body);
    return res.send({ userModel });

  } catch (error) {

    return res.status(400).send({
      error: 'Registro falhou!'
    });
  }
});

module.exports = app => app.use('/auth', router);
