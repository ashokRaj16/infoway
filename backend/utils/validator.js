const {validationResult} = require('express-validator');

const loginValidate = (req,res,next) => {
    const error = validationResult(req)
    const hasError = !error.isEmpty();
    // console.log(error)
    if(hasError)
    {
        res.status(422).json({error: error.array()})
    }else{
        next();
    }
}

module.exports = {loginValidate};