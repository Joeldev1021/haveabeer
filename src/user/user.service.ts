// External modules
import * as bcrypt from "bcrypt";

// Internal modules
import { IUser } from "./interfaces/user.interface";
import { CreateUserDto } from "./dtos/create.user.dto";
import { UpdateUserDto } from "./dtos/update.user.dto";
import userRepository from "./user.repository";

// Utils
import { toUpperCase } from "../utils/uppercase";

class UserService {
    constructor() { }

    async findAll(): Promise<IUser[]> {
        try {
            const users = await userRepository.findAll();

            return users;
        } catch (error) {
            throw error;
        }
    }

    async findById(id: string): Promise<IUser> {
        try {
            return await userRepository.findById(id);
        } catch (error) {
            throw error;
        }
    }

    async findByEmail(email: string): Promise<IUser> {
        try {
            return await userRepository.findByEmail(email);
        } catch (error) {
            throw error;
        }
    }

    async findTopDrunks(): Promise<IUser[]> {
        try {
            const users = await this.findAll();
            
            const topDrunks = users.sort((a, b) => b.donations - a.donations).slice(0, 3);

            return topDrunks;
        } catch (error) {
            throw error;
        }
    }

    async create(createUserDto: CreateUserDto): Promise<IUser> {
        try {
            const hashedPassword = await this.hashedPassword(createUserDto.password);
            const user = await userRepository.create({ ...createUserDto, password: hashedPassword });

            user.password = undefined;

            return toUpperCase(user);
        } catch (error) {
            throw error;
        }
    }

    async update(id: string, updateUserDto: UpdateUserDto): Promise<IUser> {
        try {
            const hashedPassword = await this.hashedPassword(updateUserDto.password);
            const user = await userRepository.update(id, { ...updateUserDto, password: hashedPassword });

            user.password = undefined;

            return toUpperCase(user);
        } catch (error) {
            throw error;
        }
    }

    async updateLogin(id: string) {
        try {
            return await userRepository.updateLogin(id);
        } catch (error) {
            throw error;
        }
    }

    async delete(id: string) {
        try {
            return await userRepository.delete(id);
        } catch (error) {
            throw error;
        }
    }

    // Utils
    async validateCredentials(email: string, password: string) {
        try {
            const user = await this.findByEmail(email);

            const isValid = await bcrypt.compare(password, user.password);

            if (!isValid) throw new Error("Invalid credentials");

            user.password = undefined;

            return user;
        } catch (error) {
            throw error;
        }
    }

    async isPasswordValid(password: string, hashedPassword: string) {
        try {
            return await bcrypt.compare(password, hashedPassword);
        } catch (error) {
            throw error;
        }
    }

    async hashedPassword(password: string, saltRounds: number = 10) {
        try {
            return await bcrypt.hash(password, saltRounds);
        } catch (error) {
            throw error;
        }
    }
}

export default new UserService();