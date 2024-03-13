const mongoose =  require('mongoose')

const UserSchema= new mongoose.Schema({
    first_name:{type:String},
    last_name:{type:String},
    email:{type:String},
    gender:{type:String},
    mobile:{type:String},
    password:{type:String}
})

const userModel = mongoose.model('user',UserSchema,'users');
module.exports = userModel;