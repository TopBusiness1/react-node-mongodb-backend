import { Document } from 'mongoose';

export interface Medical extends Document {
  readonly provider: string;
  readonly client: string;
  readonly requested: object;
  readonly received: object;
  readonly notes: string;
  readonly createdBy: string;
  readonly user: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
