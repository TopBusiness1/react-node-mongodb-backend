import * as fs from 'fs';
import { IUploadImage } from './interfaces/upload.image.interface';
import { uuid } from 'uuidv4';
import { BadRequestException } from '@nestjs/common';

export abstract class StorageAbstract implements IUploadImage {
  protected filename: string;
  private multer: any;

  protected constructor() {}

  protected setMulter(multer: any) {
    this.multer = multer;
  }

  setFilename(value): IUploadImage {
    this.filename = value;
    return this;
  }

  getMulter(): any {
    return this.multer;
  }

  protected async saveAsTemp(file): Promise<string> {
    try {
      return new Promise((resolve, reject) => {
        const tmpFile = '/tmp/' + uuid();
        const writeStream = fs.createWriteStream(tmpFile);
        file.stream
          .pipe(writeStream)
          .on('error', error => reject(error))
          .on('finish', () => resolve(tmpFile));
      });
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  protected reset() {
    this.setFilename(null);
  }
}
