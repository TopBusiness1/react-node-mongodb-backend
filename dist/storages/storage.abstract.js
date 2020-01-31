"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const uuidv4_1 = require("uuidv4");
const common_1 = require("@nestjs/common");
class StorageAbstract {
    constructor() { }
    setMulter(multer) {
        this.multer = multer;
    }
    setFilename(value) {
        this.filename = value;
        return this;
    }
    getMulter() {
        return this.multer;
    }
    async saveAsTemp(file) {
        try {
            return new Promise((resolve, reject) => {
                const tmpFile = '/tmp/' + uuidv4_1.uuid();
                const writeStream = fs.createWriteStream(tmpFile);
                file.stream
                    .pipe(writeStream)
                    .on('error', error => reject(error))
                    .on('finish', () => resolve(tmpFile));
            });
        }
        catch (e) {
            throw new common_1.BadRequestException(e.message);
        }
    }
    reset() {
        this.setFilename(null);
    }
}
exports.StorageAbstract = StorageAbstract;
//# sourceMappingURL=storage.abstract.js.map