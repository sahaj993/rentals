const mongoose = require('mongoose');
const { model } = require('../config/mongoose');

const landlordSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    tenant: []
}, {
    timestamps: true
})

const Landlord = mongoose.model('Landlord', landlordSchema);
module.exports = Landlord;