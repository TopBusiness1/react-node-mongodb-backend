"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.ContactSchema = new mongoose.Schema({
    name: { salutation: String, first: String, last: String },
    company: { name: String, title: String, tags: [String] },
    address: [
        {
            street: String,
            city: String,
            state: String,
            country: String,
            zipCode: String,
            addressType: String,
            primaryAddress: Boolean,
        },
    ],
    phone: [
        {
            phoneNumber: String,
            extension: String,
            phoneType: String,
            main: Boolean,
        },
    ],
    biography: {
        dob: Date,
        gender: String,
        socialSecurityNumber: String,
        drivingLicenseNumber: String,
        picture: String,
        socialLinks: {
            facebook: String,
            twitter: String,
            linkedIn: String,
        },
    },
    marketing: {
        referredByContact: String,
        referredByAdvertising: String,
        referredByEmployee: String,
        referredTo: String,
        abcd: String,
        tags: [String],
    },
    notes: String,
    contactType: String,
    createdBy: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});
//# sourceMappingURL=contact.schema.js.map