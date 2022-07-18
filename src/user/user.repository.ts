// Internal modules
import { IUser } from "./interfaces/user.interface";
import { CreateUserDto } from "./dtos/create.user.dto";
import { UpdateUserDto } from "./dtos/update.user.dto";
import User from "./schemas/user.schema";

class UserRepository {
    constructor() { }

    async findAll(): Promise<IUser[]> {
        try {
            return User.find();
        } catch (error) {
            throw error;
        }
    }

    async findById(id: string): Promise<IUser> {
        try {
            return User.findById(id);
        } catch (error) {
            throw error;
        }
    }

    async findByEmail(email: string): Promise<IUser> {
        try {
            return User.findOne({ email });
        } catch (error) {
            throw error;
        }
    }

    async create(user: CreateUserDto): Promise<IUser> {
        try {
            const createdUser = await User.create(user);

            return createdUser.save();
        } catch (error) {
            throw error;
        }
    }

    async update(id: string, user: UpdateUserDto): Promise<IUser> {
        try {
            const updatedUser = await User.findByIdAndUpdate(id, user, { new: true });

            return updatedUser.save();
        } catch (error) {
            throw error;
        }
    }

    async updateLogin(id: string): Promise<IUser> {
        try {
            const updatedUser = await User.findByIdAndUpdate(id, { lastLogin: new Date() }, { new: true });

            return updatedUser.save();
        } catch (error) {
            throw error;
        }
    }

    async delete(id: string) {
        try {
            return User.findByIdAndDelete(id);
        } catch (error) {
            throw error;
        }
    }
}

export default new UserRepository();
