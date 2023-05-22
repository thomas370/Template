const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
    {
        postId: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            max: 500,
        }
    },
    {timestamps: true}
);