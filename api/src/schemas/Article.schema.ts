import * as mongoose from 'mongoose';

export const ArticleSchema = new mongoose.Schema({
    title : {type : String, required : true},
    slug :{type : String, required : true}, 
    description : {type : String, required : true},
    creationDate : {type : Date, required : true},
    content : {type : String, required : true},
    author : {type : String, required : true},
    img : {type : String, required : true},
    category : {type : String, required : true},
    tags : {type : String, required : true},
})
