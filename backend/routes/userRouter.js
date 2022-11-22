const {user} = require('../model/userModel');
const bcrypt = require('bcrypt')
//list all userdata.
const listUser = async (req,res)=> {
    // console.log(req.query);
    try{
        const data = await user.find({"role": {"$ne": 'admin' }}, {password: 0});
        // console.log(data);

        if(data.length !== 0)
        {
            res.status(200).json({"success":true,"data": data});
        }
        else{
            res.status(200).json({"success": true, "data": null, "message": "No data found."})
        }
    }
    catch(err){
        res.status(500).json({"success": false, "data": null, message: "Internal Server Error"})
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
            const data = await user.findOne({_id: id}, {password: 0});
            // console.log(data, id);
            if(data)
            {
                res.status(200).json({"success":true, "data": data});
            }
            else
            {
                res.status(201).json({"success": true, "data":null, "message": "No data found for given id."})
            }
        }
        catch(err){
            res.status(500).json({"success": false, "data": null, "message": "Internal Server Error"})
            // console.log('error', err);
        }
    }
    else
    {
        res.status(500).json({"success": false, "data": null, "message": "No parameter provided."})
    }
}

//for inserting user data
const saveUser = async(req,res) => {
    
    let userData = req.body;
    let password = await bcrypt.hash(req.body.password, 10);
    userData = {...userData, password: password}
    // console.log(password, userData)
    try{
            const userinfo = new user(userData)
            const data = await userinfo.save();
            // console.log(data);
            if(data)
            {
                res.status(200).json({"success": true, "data": data, "message": "Record inserted successfully." });
            }
            else{
                res.status(201).json({"success": true, "data": null, "message": "Record not inserted."})
            }
        }
        catch(err){
            res.status(500).json({"success": false, "data": null, "message": "Internal Server Error"})
            // console.log('error', err);
        }
}

//for updating user data
const editUser = async(req,res) => {
    let userdata = req.body;
    let password = await bcrypt.hash(req.body.password, 10);
    userdata = {...userdata, password: password}
    let id = req.params.id;
     try{
            const data = await user.findByIdAndUpdate({_id: id},{$set : userdata});
            // console.log(userdata, data);
            if(data)
            {
                res.status(200).json({"success": true, "data": data, "message": "Record updated successfully." });
            }
            else{
                res.status(201).json({"success": true, "data": null, "message": "Record updation failed."})
            }
        }
        catch(err){
            res.status(500).json({"success": false, "data": null, "message": "Internal Server Error"})
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
                res.status(200).json({"success": true, "data": data, "message": "Record successfully removed." });
            }
            else{
                res.status(201).json({"success": true, "message": "Record not inserted."})
            }
        }
        catch(err){
            res.status(500).json({"success": false, message: "Internal Server Error"})
            // console.log('error', err);
        }
}

module.exports = {listUser, viewUser, saveUser, editUser, deleteUser}