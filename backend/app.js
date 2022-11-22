const express = require('express');
const app = express();
const {listUser, viewUser, saveUser, editUser, deleteUser } = require('./routes/userRouter');
const {loginTest, login}  = require('./routes/homeRouter');
const {loginValidate} = require('./utils/validator');

const {body} = require('express-validator')

app.route('/').get(loginTest).post( 
    body('email').isEmail(), 
    body('password').notEmpty(),
    loginValidate,login);

app.route('/user').get(listUser).post( 
    body('fname').notEmpty(),
    body('lname').notEmpty(),
    body('email').notEmpty().isEmail(),
    body('mobile').notEmpty(),
    body('password').notEmpty(),
    loginValidate,saveUser);

app.route('/user/:id').get(viewUser).put(editUser).delete(deleteUser);

module.exports = app;