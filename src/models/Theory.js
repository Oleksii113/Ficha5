import mongoose from "mongoose";
const { Schema } = mongoose;


const commentSchema = new Schema({
        authorName: {
            type: String,
            require: true,
            trim: true,
            minlength: 2,
        },
        text: {
            type: String,
            require: true,
            trim: true,
            minlength: 2,
        },
    },
    {
        _id: false,
    }
);