import { IUploadImage } from '../storages/interfaces/upload.image.interface';
export declare class FilesController {
    private readonly uploadImage;
    constructor(uploadImage: IUploadImage);
    create(req: any, res: any): Promise<void>;
}
