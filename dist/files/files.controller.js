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
const uuidv4_1 = require("uuidv4");
let FilesController = class FilesController {
    constructor(uploadImage) {
        this.uploadImage = uploadImage;
    }
    async create(req, res) {
        await new Promise((resolve, reject) => {
            this.uploadImage.setFilename(uuidv4_1.uuid()).getMulter()(req, res, err => {
                if (err) {
                    reject(err);
                }
                resolve(req.file);
            });
        });
        res.code(200).send({ success: true });
        return;
    }
};
__decorate([
    common_1.Post('/upload'),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], FilesController.prototype, "create", null);
FilesController = __decorate([
    common_1.Controller('files'),
    __param(0, common_1.Inject('IUploadImage')),
    __metadata("design:paramtypes", [Object])
], FilesController);
exports.FilesController = FilesController;
//# sourceMappingURL=files.controller.js.map