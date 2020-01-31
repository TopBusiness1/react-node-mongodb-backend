import { ContactsService } from './contacts.service';
import { CreateContactDTO } from './dto/create-contact.dto';
import { Contact } from './interfaces/contact.interface';
export declare class ContactsController {
    private readonly contactsService;
    constructor(contactsService: ContactsService);
    createContact(req: any, createContactDTO: CreateContactDTO): Promise<Contact>;
    getAllContacts(req: any): Promise<Contact[]>;
    getRecord(id: string): Promise<Contact>;
    updateRecord(contactID: string, createContactDTO: CreateContactDTO): Promise<Contact>;
    deleteRecord(contactID: string): Promise<any>;
}
