const mongoose = require('mongoose');

let Connection_String = process.env.CONNECT_URL;

const connection = mongoose.connect(Connection_String, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('connected'))
.catch((err)=> {
    console.log(err)
});

module.exports = connection
