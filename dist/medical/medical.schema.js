"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.MedicalSchema = new mongoose.Schema({
    provider: String,
    client: String,
    requested: {
        recordDate: Date,
        recordAffidavitDate: Date,
        billDate: Date,
        billAffidavitDate: Date,
    },
    received: {
        recordDate: Date,
        recordAffidavitDate: Date,
        billDate: Date,
        billAffidavitDate: Date,
    },
    notes: String,
    createdBy: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});
//# sourceMappingURL=medical.schema.js.map