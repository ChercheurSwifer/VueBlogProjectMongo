import * as mongoose from 'mongoose';
export const TagSchema = new mongoose.Schema({
    titre : {type : String, required : true},
    quantityArticle :{type : Number, required : true}, 
})

