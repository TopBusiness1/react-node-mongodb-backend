"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const medical_service_1 = require("./medical.service");
const medical_controller_1 = require("./medical.controller");
const mongoose_1 = require("@nestjs/mongoose");
const medical_schema_1 = require("./medical.schema");
let MedicalModule = class MedicalModule {
};
MedicalModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Medical', schema: medical_schema_1.MedicalSchema }]),
        ],
        providers: [medical_service_1.MedicalService],
        controllers: [medical_controller_1.MedicalController],
    })
], MedicalModule);
exports.MedicalModule = MedicalModule;
//# sourceMappingURL=medical.module.js.map