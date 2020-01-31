import { Injectable, Logger } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './interfaces/user.interface';
import { CreateUserDTO } from './dto/create-user.dto';
import { HashingService } from '../hashing/hashing.service';

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);

  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
    private readonly hashingService: HashingService,
  ) {}

  // fetch all users
  async getAllUsers(): Promise<User[]> {
    const users = await this.userModel.find().exec();
    return users;
  }

  // Get a single
  async getUserById(userID: number): Promise<User> {
    const user = await this.userModel.findById(userID).exec();
    return user;
  }

  // create a single user
  async createUser(createUserDTO: CreateUserDTO): Promise<User> {
    const { password, ...attrs } = createUserDTO;
    const newPass = await this.hashingService.hash(password);
    const updatedAttr = {
      ...attrs,
      password: newPass,
    };
    const newUser = new this.userModel(updatedAttr);
    return await newUser.save();
  }

  // Edit user details
  async updateUser(
    userID: number,
    createUserDTO: CreateUserDTO,
  ): Promise<User> {
    const updatedUser = await this.userModel.findByIdAndUpdate(
      userID,
      createUserDTO,
      { new: true },
    );
    return updatedUser;
  }

  // Delete a user
  async deleteCustomer(userID: number): Promise<any> {
    const deletedUser = await this.userModel.findByIdAndRemove(userID);
    return deletedUser;
  }

  // Get a user by email
  async getUserByEmail(email: string): Promise<User> {
    return this.userModel.findOne({ email: email }).exec();
  }
}
