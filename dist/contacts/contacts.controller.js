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
const contacts_service_1 = require("./contacts.service");
const create_contact_dto_1 = require("./dto/create-contact.dto");
const swagger_1 = require("@nestjs/swagger");
const passport_1 = require("@nestjs/passport");
let ContactsController = class ContactsController {
    constructor(contactsService) {
        this.contactsService = contactsService;
    }
    async createContact(req, createContactDTO) {
        const userId = req.user._id;
        const newAttr = Object.assign(Object.assign({}, createContactDTO), { createdBy: userId, user: userId });
        return await this.contactsService.createContact(newAttr);
    }
    async getAllContacts(req) {
        const userId = req.user._id;
        return await this.contactsService.getAllContacts(userId);
    }
    async getRecord(id) {
        return await this.contactsService.getContactById(id);
    }
    async updateRecord(contactID, createContactDTO) {
        const rec = await this.contactsService.updateContact(contactID, createContactDTO);
        if (!rec)
            throw new common_1.NotFoundException('Record does not exist!');
        return rec;
    }
    async deleteRecord(contactID) {
        const rec = await this.contactsService.deleteContact(contactID);
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
    __metadata("design:paramtypes", [Object, create_contact_dto_1.CreateContactDTO]),
    __metadata("design:returntype", Promise)
], ContactsController.prototype, "createContact", null);
__decorate([
    common_1.Get(),
    __param(0, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ContactsController.prototype, "getAllContacts", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ContactsController.prototype, "getRecord", null);
__decorate([
    common_1.Put(':contactID'),
    __param(0, common_1.Param('contactID')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_contact_dto_1.CreateContactDTO]),
    __metadata("design:returntype", Promise)
], ContactsController.prototype, "updateRecord", null);
__decorate([
    common_1.Delete(':contactID'),
    __param(0, common_1.Param('contactID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ContactsController.prototype, "deleteRecord", null);
ContactsController = __decorate([
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    swagger_1.ApiTags('contacts'),
    common_1.Controller('contacts'),
    __metadata("design:paramtypes", [contacts_service_1.ContactsService])
], ContactsController);
exports.ContactsController = ContactsController;
//# sourceMappingURL=contacts.controller.js.map