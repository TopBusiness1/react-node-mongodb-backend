"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const storage_adapter_1 = require("./storage.adapter");
class StorageFactory {
    static createStorageFromType() {
        return new storage_adapter_1.StorageAdapter({
            fileFilter(req, file, cb) {
                cb(null, true);
            },
        });
    }
}
exports.StorageFactory = StorageFactory;
//# sourceMappingURL=storage.factory.js.map