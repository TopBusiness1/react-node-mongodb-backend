import { Options, StorageEngine } from 'fastify-multer/lib/interfaces';
import { StorageAbstract } from './storage.abstract';
export declare class StorageAdapter extends StorageAbstract implements StorageEngine {
    private readonly storage;
    constructor(options: Options | undefined);
    _handleFile(req: any, file: any, cb: any): Promise<void>;
    _removeFile(req: any, file: any, cb: any): Promise<void>;
}
