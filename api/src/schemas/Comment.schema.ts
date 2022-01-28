import * as mongoose from 'mongoose';

export const CommentSchema = new mongoose.Schema({
    content : {type : String, required : true},
    user :{type : String, required : true}, 
})
