var mongo = require('mongoose')
var schema = mongo.Schema
var post = new schema( {
    title : {
        type:String,
        required:true
    },
    Author : {
        type:String,
        required:true
    },
    Description : {
        type:String,
        required:true
    }
    ,
    // like : {
    //     type:String,
    //     required:true
    // },
    comment : [
        comment
    ]
    // image : {
    //     type:String,
    //     required:true
    // }
},
    {timeStamp : true}
)
var comment = new schema({
    Author : {
        type :String,
        required:true
    },
    Comment : {
        type :String,
        required:true
    }
})
module.exports = mongo.model('Post',post)