const {user} = require('../model/userModel');
const bcrypt = require('bcrypt')
//list all userdata.

const loginTest = (req,res) => {
    res.status(200).json({success: true, message: 'Test'});
}

const login = async (req,res)=> {
    let email = req.body.email;
    let password = req.body.password;
    // console.log(req.body);
    
    try{
        const data = await user.findOne({role: 'admin', email: email });
        // console.log(data)
        if(data !== null)
        {
            let result = await bcrypt.compare(password, data.password)
            // console.log(data, result);
            if(!result)
            {
                res.status(200).json({"success": true, "data": null, "message": "Password doesn't match."})
            }
            else
            {
                let sessiondata = {email: data.email, role: data.role}
                res.status(200).json({"success":true,"data": sessiondata});
            }
        }
        else{
            res.status(200).json({"success": true, "data": null, "message": "Email or password doesn't match. Please try again later."})
        }
    }
    catch(err){
        res.status(500).json({"success": false, "data": null, message: "Internal Server Error"})
        // console.log('error', err);

    }
}

module.exports = {loginTest ,login};