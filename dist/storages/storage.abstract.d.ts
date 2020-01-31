import { IUploadImage } from './interfaces/upload.image.interface';
export declare abstract class StorageAbstract implements IUploadImage {
    protected filename: string;
    private multer;
    protected constructor();
    protected setMulter(multer: any): void;
    setFilename(value: any): IUploadImage;
    getMulter(): any;
    protected saveAsTemp(file: any): Promise<string>;
    protected reset(): void;
}
