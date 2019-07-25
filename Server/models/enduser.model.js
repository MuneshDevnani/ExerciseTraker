const mongoose =require('mongoose');

const Schema = mongoose.Schema;

const enduserSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        minlength:3
    },
},{
    timestamps:true,  
});

const EndUser = mongoose.model('EndUser', enduserSchema);

module.exports =EndUser;