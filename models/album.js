import mongoose from "mongoose";

const {Schema} = mongoose ;

const albumSchema = new Schema({

    title :{
        type: String,
        trim: true,
        required : true
    },
    album :{
        type: String,
        trim: true,
        required : true
    },
    genre:{
        type: String,
        trim: true,
        required : true
    },
    musicDirector:{
        type: String,
        trim: true,
        required : true
    },
    movieDirector:{
        type: String,
        trim: true,
        required : true
    },
    lyricist:{
        type: String,
        trim: true,
        required : true
    },
    productionHouse:{
        type: String,
        trim: true,
        required : true
    },
    releasedate:{
        type: Date,
        default :Date.now()
    },
    price: {
        type: Number,
        trim: true,
        required: true,
      },

})

export default mongoose.model("Album",albumSchema);