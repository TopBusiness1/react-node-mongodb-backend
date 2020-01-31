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
const create_medical_dto_1 = require("./dto/create-medical.dto");
const medical_service_1 = require("./medical.service");
const swagger_1 = require("@nestjs/swagger");
const passport_1 = require("@nestjs/passport");
let MedicalController = class MedicalController {
    constructor(medicalService) {
        this.medicalService = medicalService;
    }
    async createRecord(req, createMedicalDTO) {
        const userId = req.user._id;
        const newAttr = Object.assign(Object.assign({}, createMedicalDTO), { createdBy: userId, user: userId });
        return await this.medicalService.createRecord(newAttr);
    }
    async getAllRecords(req) {
        const userId = req.user._id;
        return await this.medicalService.getAllRecords(userId);
    }
    async getRecord(id) {
        return await this.medicalService.getRecordById(id);
    }
    async updateRecord(recordID, createMedicalDTO) {
        const rec = await this.medicalService.updateRecord(recordID, createMedicalDTO);
        if (!rec)
            throw new common_1.NotFoundException('Record does not exist!');
        return rec;
    }
    async deleteRecord(recordID) {
        const rec = await this.medicalService.deleteRecord(recordID);
        if (!rec)
            throw new common_1.NotFoundException('Record does not exist!');
        return rec;
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Request()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_medical_dto_1.CreateMedicalDTO]),
    __metadata("design:returntype", Promise)
], MedicalController.prototype, "createRecord", null);
__decorate([
    common_1.Get(),
    __param(0, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MedicalController.prototype, "getAllRecords", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MedicalController.prototype, "getRecord", null);
__decorate([
    common_1.Put(':recordID'),
    __param(0, common_1.Param('recordID')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_medical_dto_1.CreateMedicalDTO]),
    __metadata("design:returntype", Promise)
], MedicalController.prototype, "updateRecord", null);
__decorate([
    common_1.Delete(':recordID'),
    __param(0, common_1.Param('recordID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MedicalController.prototype, "deleteRecord", null);
MedicalController = __decorate([
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    swagger_1.ApiTags('medical'),
    common_1.Controller('medical'),
    __metadata("design:paramtypes", [medical_service_1.MedicalService])
], MedicalController);
exports.MedicalController = MedicalController;
//# sourceMappingURL=medical.controller.js.map