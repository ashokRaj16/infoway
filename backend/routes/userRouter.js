const {user} = require('../model/userModel');

//list all userdata.
const listUser = async (req,res)=> {
    try{
        const data = await user.find();
        // console.log(data);

        if(data.length !== 0)
        {
            res.status(200).json({"success":true,"data": data});
        }
        else{
            res.status(200).json({"success": true, "message": "No data found."})
        }
    }
    catch(err){
        res.status(500).json({"success": false, message: "Internal Server Error"})
        // console.log('error', err);
    }
}

//for listing user data
const viewUser = async (req,res)=> {
    // res.send('res sending')
    let id = req.params.id;
    if(id)
    {
        try{
            const data = await user.findOne({_id: id});
            // console.log(data, id);
            if(data)
            {
                res.status(200).json({"success":true, "data": data});
            }
            else{
                res.status(200).json({"success": true, "message": "No data found for given id."})
            }
        }
        catch(err){
            res.status(500).json({"success": false, message: "Internal Server Error"})
            // console.log('error', err);
        }
    }
    else
    {
        res.status(500).json({"success": false, "message": "No parameter provided."})
    }
}

//for inserting user data
const saveUser = async(req,res) => {
    // console.log(req.body)
    let userData = req.body;

    try{
            const userinfo = new user(userData)
            const data = await userinfo.save();
            // console.log(data);
            if(data)
            {
                res.status(200).json({"success": true, "data": data });
            }
            else{
                res.status(200).json({"success": true, "message": "Record not inserted."})
            }
        }
        catch(err){
            res.status(500).json({"success": false, message: "Internal Server Error"})
            // console.log('error', err);
        }
}

//for updating user data
const editUser = async(req,res) => {
    let userdata = req.body;
    let id = req.params.id;
     try{
            const data = await user.findByIdAndUpdate({_id: id},{$set : userdata});
            // console.log(userdata, data);
            if(data)
            {
                res.status(200).json({"success": true, "data": data });
            }
            else{
                res.status(200).json({"success": true, "message": "Record not inserted."})
            }
        }
        catch(err){
            res.status(500).json({"success": false, message: "Internal Server Error"})
            // console.log('error', err);
        }
}

//for deleting user data
const deleteUser = async(req,res) => {
    let id = req.params.id;
     try{
            const data = await user.findByIdAndDelete({_id: id});
            // console.log(userdata, data);
            if(data)
            {
                res.status(200).json({"success": true, "data": data });
            }
            else{
                res.status(200).json({"success": true, "message": "Record not inserted."})
            }
        }
        catch(err){
            res.status(500).json({"success": false, message: "Internal Server Error"})
            // console.log('error', err);
        }
}

module.exports = {listUser, viewUser, saveUser, editUser, deleteUser}