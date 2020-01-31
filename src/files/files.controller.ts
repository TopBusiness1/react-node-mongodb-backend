import { Controller, Post, Inject, Req, Res } from '@nestjs/common';
import { IUploadImage } from '../storages/interfaces/upload.image.interface';
import { uuid } from 'uuidv4';

@Controller('files')
export class FilesController {
  constructor(
    @Inject('IUploadImage') private readonly uploadImage: IUploadImage,
  ) {}

  @Post('/upload')
  async create(@Req() req, @Res() res) {
    await new Promise((resolve, reject) => {
      this.uploadImage.setFilename(uuid()).getMulter()(req, res, err => {
        if (err) {
          reject(err);
        }

        resolve(req.file);
      });
    });
    res.code(200).send({ success: true });
    return;
  }
}
