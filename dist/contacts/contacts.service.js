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
let ContactsService = class ContactsService {
    constructor(contactModel) {
        this.contactModel = contactModel;
    }
    async createContact(createContactDTO) {
        const newContact = new this.contactModel(createContactDTO);
        return await newContact.save();
    }
    async getAllContacts(userId) {
        return await this.contactModel.find({ user: userId });
    }
    async getContactById(recordId) {
        return await this.contactModel.findById(recordId);
    }
    async updateContact(contactId, createContactDTO) {
        const updatedContact = await this.contactModel.findByIdAndUpdate(contactId, createContactDTO, { new: true });
        return updatedContact;
    }
    async deleteContact(contactId) {
        const deletedContact = await this.contactModel.findByIdAndRemove(contactId);
        return deletedContact;
    }
};
ContactsService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Contact')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ContactsService);
exports.ContactsService = ContactsService;
//# sourceMappingURL=contacts.service.js.map