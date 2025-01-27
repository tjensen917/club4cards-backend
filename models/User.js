const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
    streetLine1: { type: String, required: true },
    streetLine2: { type: String },
    city: { type: String, required: true },
    regionCity: { type: String, required: true },
    zipCode: { type: String, required: true },
    country: { type: String, required: true },
});

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    address: { type: AddressSchema, required: true },
    subscriptionStatus: { type: String, default: 'Inactive' },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', UserSchema);




