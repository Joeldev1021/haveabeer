// External modules
import { IsString } from "class-validator";

export class CreateUserDto {
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
}
