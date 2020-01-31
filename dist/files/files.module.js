"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const files_controller_1 = require("./files.controller");
const storage_factory_1 = require("../storages/storage.factory");
exports.MulterFactory = {
    provide: 'IUploadImage',
    useFactory: () => {
        return storage_factory_1.StorageFactory.createStorageFromType();
    },
};
let FilesModule = class FilesModule {
};
FilesModule = __decorate([
    common_1.Module({
        imports: [],
        controllers: [files_controller_1.FilesController],
        providers: [exports.MulterFactory],
    })
], FilesModule);
exports.FilesModule = FilesModule;
//# sourceMappingURL=files.module.js.map