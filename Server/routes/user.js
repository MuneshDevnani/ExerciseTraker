const router = require('express').Router();
let EndUser = require('../models/enduser.model');

router.route('/').get((req,res)=>{
    EndUser.find()
    .then(enduser => res.json(enduser))
    .catch(err => res.status(400).json('Error :' + err))
});

router.route('/add').post((req,res)=>{
    const username = req.body.username;

    const newUser = new EndUser({username});
    newUser.save()
    .then(()=> res.json('User Added!'))
    .catch(err => res.status(400).json('Error :' + err))
});
module.exports = router;