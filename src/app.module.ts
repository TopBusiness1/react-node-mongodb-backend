import { Module } from '@nestjs/common';
import { DbModule } from './db/db.module';
import { UsersModule } from './users/users.module';
import { ContactsModule } from './contacts/contacts.module';
import { MedicalModule } from './medical/medical.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { HashingModule } from './hashing/hashing.module';
import { AppController } from './app.controller';
import { FilesModule } from './files/files.module';

@Module({
  imports: [
    DbModule,
    UsersModule,
    ContactsModule,
    MedicalModule,
    AuthenticationModule,
    HashingModule,
    FilesModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
