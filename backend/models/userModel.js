const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Add a name']
    },
    email: {
        type: String,
        required: [true, 'Add an email address'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Give password']
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('User',userSchema)