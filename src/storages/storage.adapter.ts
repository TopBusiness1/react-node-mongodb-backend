import * as fs from 'fs';
import * as path from 'path';
import { Options, StorageEngine } from 'fastify-multer/lib/interfaces';
import { StorageAbstract } from './storage.abstract';
import * as multer from 'fastify-multer';

export class StorageAdapter extends StorageAbstract implements StorageEngine {
  private readonly storage;

  constructor(options: Options | undefined) {
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

    this.setMulter(
      multer({
        ...options,
        storage: this,
      }).single('file'),
    );
    this.storage = storage1;
  }

  async _handleFile(req, file, cb) {
    const filePath = await this.saveAsTemp(file);

    const storage: any = await new Promise((resolve, reject) => {
      this.storage._handleFile(
        req,
        {
          ...file,
          stream: fs.createReadStream(filePath as string),
        },
        (err, destination) => {
          resolve(() => cb(err, destination));
        },
      );
    }).catch(e => cb(e));

    this.reset();
    storage();
  }

  async _removeFile(req, file, cb) {
    this.reset();
  }
}
