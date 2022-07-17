// External modules
import { IsString, IsBoolean } from "class-validator";

export class UserDto {
  @IsString()
  _id: string;
  // Personal
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  email: string;

  @IsString()
  password: string;

  @IsString()
  creditCard: string;

  // Profile 
  @IsString()
  username: string;

  @IsString()
  description: string;

  @IsString()
  donations: number;

  // Status
  @IsBoolean()
  isActive: boolean;

  @IsString()
  lastLogin: string;

  @IsString()
  createdAt: string;

  @IsString()
  deletedAt: string;
}
