import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Contact } from './interfaces/contact.interface';
import { CreateContactDTO } from './dto/create-contact.dto';

@Injectable()
export class ContactsService {
  constructor(
    @InjectModel('Contact') private readonly contactModel: Model<Contact>,
  ) {}

  // create a contact
  async createContact(createContactDTO: CreateContactDTO): Promise<Contact> {
    const newContact = new this.contactModel(createContactDTO);
    return await newContact.save();
  }

  // get all contacts
  async getAllContacts(userId: string): Promise<Contact[]> {
    return await this.contactModel.find({ user: userId });
  }

  // get a single contcat by id
  async getContactById(recordId: string): Promise<Contact> {
    return await this.contactModel.findById(recordId);
  }

  // edit contact details
  async updateContact(
    contactId: string,
    createContactDTO: CreateContactDTO,
  ): Promise<Contact> {
    const updatedContact = await this.contactModel.findByIdAndUpdate(
      contactId,
      createContactDTO,
      { new: true },
    );
    return updatedContact;
  }

  // delete a contact
  async deleteContact(contactId): Promise<any> {
    const deletedContact = await this.contactModel.findByIdAndRemove(contactId);
    return deletedContact;
  }
}
