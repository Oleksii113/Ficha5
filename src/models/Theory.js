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


const theorySchema = new Schema(
    {
    title: {
        type: String,
        require: true,
        trim: true,
        minlength: 2,
    },
    summary: {
        type: String,
        require: true,
        trim: true,
        minlength: 2,
    },
    content: {
        type: String,
        require: true,
        trim: true,
        minlength: 2,
    },
});