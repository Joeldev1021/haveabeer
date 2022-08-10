import { IsOptional, IsString } from "class-validator";

export class PostDto {
    @IsString()
    _id: string;
    // Personal
    @IsString()
    title: string;

    @IsString()
    image: string;

    @IsString()
    description: string;

    @IsString()
    @IsOptional()// delete after
    _user: string;

    @IsString()
    createdAt: string;

    @IsString()
    deletedAt: string;
}

