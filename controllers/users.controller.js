var express = require('express');
const userModel = require('../models/User');
const { validationResult, check } = require('express-validator');
const { isValidNumber } = require('libphonenumber-js');
var router = express.Router();





const validators = [
    check('email', 'enter a valid email').isEmail(),
    check('name', 'Enter a valid name').isLength({ min: 5, max: 32 }),
    check('phone', 'Enter a valid phone').custom((value, { req }) => {
        return isValidNumber(value);
    })
]




router.get('/',async (req,res)=>{


    const result= await userModel.find({});

    res.status(200).json(result);

})


/* GET home page. */
router.get('/createUser', validators, async function (req, res, next) {



    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        res.send({ errors, data: [], meta: {} });
        return;
    }


    const resp = await userModel.create({ email: req?.query?.email })
    res.send(resp);


});


router.delete('/:userId', async (req, res) => {
    const result = await userModel.findByIdAndDelete(req.params.userId);
    res.send(result)
})

module.exports = router;
