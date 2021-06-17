const express = require('express');
const router = express.Router();
const signUpTemplateCopy = require('../models/SignUpModels');
// const brcrypt = require('bcrypt');

router.post('/login', (request, response) => {

    // const saltPassword = await bcrypt.genSalt(10);
    // const securePassword = await brcrypt.hash(request.body.password, saltPassword);

    const signedUpUser = new signUpTemplateCopy({
        fullName: request.body.fullName,
        username: request.body.username,
        email: request.body.email,
        password: request.body.password
    })
    signedUpUser.save()
    .then(date => {
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    })
});

module.exports = router;