import * as mongoose from 'mongoose';

export const MedicalSchema = new mongoose.Schema({
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
