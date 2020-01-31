import {
  Controller,
  Body,
  Post,
  Get,
  Put,
  Delete,
  Request,
  UseGuards,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { CreateContactDTO } from './dto/create-contact.dto';
import { Contact } from './interfaces/contact.interface';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@ApiTags('contacts')
@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  // create a contact
  @Post()
  async createContact(
    @Request() req,
    @Body() createContactDTO: CreateContactDTO,
  ): Promise<Contact> {
    const userId = req.user._id;
    const newAttr = {
      ...createContactDTO,
      createdBy: userId,
      user: userId,
    };
    return await this.contactsService.createContact(newAttr);
  }

  // get all conatacts
  @Get()
  async getAllContacts(@Request() req): Promise<Contact[]> {
    const userId = req.user._id;
    return await this.contactsService.getAllContacts(userId);
  }

  // get a single contact
  @Get(':id')
  async getRecord(@Param('id') id: string): Promise<Contact> {
    return await this.contactsService.getContactById(id);
  }

  // edit a contact
  @Put(':contactID')
  async updateRecord(
    @Param('contactID') contactID: string,
    @Body() createContactDTO: CreateContactDTO,
  ): Promise<Contact> {
    const rec = await this.contactsService.updateContact(
      contactID,
      createContactDTO,
    );
    if (!rec) throw new NotFoundException('Record does not exist!');
    return rec;
  }

  // delete a contact
  @Delete(':contactID')
  async deleteRecord(@Param('contactID') contactID: string): Promise<any> {
    const rec = await this.contactsService.deleteContact(contactID);
    if (!rec) throw new NotFoundException('Record does not exist!');
    return rec;
  }
}
