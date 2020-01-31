import { Model } from 'mongoose';
import { Contact } from './interfaces/contact.interface';
import { CreateContactDTO } from './dto/create-contact.dto';
export declare class ContactsService {
    private readonly contactModel;
    constructor(contactModel: Model<Contact>);
    createContact(createContactDTO: CreateContactDTO): Promise<Contact>;
    getAllContacts(userId: string): Promise<Contact[]>;
    getContactById(recordId: string): Promise<Contact>;
    updateContact(contactId: string, createContactDTO: CreateContactDTO): Promise<Contact>;
    deleteContact(contactId: any): Promise<any>;
}
