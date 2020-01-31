import { IUploadImage } from './interfaces/upload.image.interface';
import { StorageAdapter } from './storage.adapter';

export class StorageFactory {
  static createStorageFromType(): IUploadImage {
    return new StorageAdapter({
      fileFilter(req, file, cb) {
        cb(null, true);
      },
    });
  }
}
