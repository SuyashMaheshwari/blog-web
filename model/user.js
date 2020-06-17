var mongo = require('mongoose')
var schema = mongo.Schema
var user = new schema({
    name : {
        type : String,
        required:true
    },
    password: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true
    }
})
var registerUser = mongo.model('User',user)
module.exports = registerUser;