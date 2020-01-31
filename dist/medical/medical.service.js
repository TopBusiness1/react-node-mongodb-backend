"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let MedicalService = class MedicalService {
    constructor(medicalModel) {
        this.medicalModel = medicalModel;
    }
    async createRecord(createMedicalDTO) {
        const newRecord = new this.medicalModel(createMedicalDTO);
        return await newRecord.save();
    }
    async getAllRecords(userId) {
        return await this.medicalModel.find({ user: userId }).exec();
    }
    async getRecordById(recordId) {
        return await this.medicalModel.findById(recordId).exec();
    }
    async updateRecord(recordId, createMedicalDTO) {
        const updatedRecord = await this.medicalModel.findByIdAndUpdate(recordId, createMedicalDTO, { new: true });
        return updatedRecord;
    }
    async deleteRecord(recordId) {
        const deletedRecord = await this.medicalModel.findByIdAndRemove(recordId);
        return deletedRecord;
    }
};
MedicalService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Medical')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], MedicalService);
exports.MedicalService = MedicalService;
//# sourceMappingURL=medical.service.js.map