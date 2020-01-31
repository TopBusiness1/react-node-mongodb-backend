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
const passport_1 = require("@nestjs/passport");
const authentication_service_1 = require("./authentication/authentication.service");
const swagger_1 = require("@nestjs/swagger");
let AppController = class AppController {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    async login(req) {
        return this.authenticationService.login(req.user._doc);
    }
};
__decorate([
    common_1.UseGuards(passport_1.AuthGuard('local')),
    common_1.Post('login'),
    __param(0, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "login", null);
AppController = __decorate([
    swagger_1.ApiTags('auth'),
    common_1.Controller(),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map