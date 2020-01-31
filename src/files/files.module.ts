import { Module } from '@nestjs/common';
import { FilesController } from './files.controller';
import { FactoryProvider } from '@nestjs/common/interfaces';
import { StorageFactory } from '../storages/storage.factory';

export const MulterFactory: FactoryProvider = {
  provide: 'IUploadImage',
  useFactory: () => {
    return StorageFactory.createStorageFromType();
  },
};

@Module({
  imports: [],
  controllers: [FilesController],
  providers: [MulterFactory],
})
export class FilesModule {}
