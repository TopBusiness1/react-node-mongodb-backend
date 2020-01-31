import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class HashingService {
  async hash(pass: string): Promise<string> {
    return bcrypt.hash(pass, 10);
  }

  async compare(newPass: string, oldPass: string): Promise<boolean> {
    return bcrypt.compare(newPass, oldPass);
  }
}
