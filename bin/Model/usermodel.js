const mongoose = require('mongoose');

var studentSchema = new mongoose.Schema({
    Rno:{
        type:String,
        require:true,
    },
    Name:{
        type:String,
        require:true,
    },
    Gujrati:{
        type:String,
        require:true,
    }, 
    English:{
        type:String,
        require:true,
    }, 
    Account:{
        type:String,
        require:true,
    },
    total:{
        type:String,
        require:true,
    }
});
module.exports = mongoose.model('Student',studentSchema)
