// External modules
import { IsString, IsOptional } from "class-validator";

export class UpdateUserDto {
    @IsString()
    @IsOptional()
    firstName: string;

    @IsString()
    @IsOptional()
    lastName: string;

    @IsString()
    @IsOptional()
    email: string;

    @IsString()
    @IsOptional()
    password: string;

    @IsString()
    @IsOptional()
    creditCard: string;

    @IsString()
    @IsOptional()
    username: string;

    @IsString()
    @IsOptional()
    description: string;
}
