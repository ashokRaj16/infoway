const express = require('express');
const app = express();
const {listUser, viewUser, saveUser, editUser, deleteUser } = require('./routes/userRouter');

app.route('/').get(listUser).post(saveUser);
app.route('/:id').get(viewUser).put(editUser).delete(deleteUser);

module.exports = app;