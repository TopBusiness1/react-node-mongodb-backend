"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const storage_abstract_1 = require("./storage.abstract");
const multer = require("fastify-multer");
class StorageAdapter extends storage_abstract_1.StorageAbstract {
    constructor(options) {
        super();
        const absolutePath = path.resolve('./uploads');
        let storage1 = multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, absolutePath);
            },
            filename: (req, file, cb) => {
                cb(null, this.filename + path.extname(file.originalname));
            },
        });
        this.setMulter(multer(Object.assign(Object.assign({}, options), { storage: this })).single('file'));
        this.storage = storage1;
    }
    async _handleFile(req, file, cb) {
        const filePath = await this.saveAsTemp(file);
        const storage = await new Promise((resolve, reject) => {
            this.storage._handleFile(req, Object.assign(Object.assign({}, file), { stream: fs.createReadStream(filePath) }), (err, destination) => {
                resolve(() => cb(err, destination));
            });
        }).catch(e => cb(e));
        this.reset();
        storage();
    }
    async _removeFile(req, file, cb) {
        this.reset();
    }
}
exports.StorageAdapter = StorageAdapter;
//# sourceMappingURL=storage.adapter.js.map