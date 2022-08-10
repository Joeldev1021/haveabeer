// External modules
import { IsOptional, IsString } from "class-validator";

export class CreatePostDto {
  // Post 
  @IsString()
  title: string;

  @IsString()
  image: string;

  @IsString()
  description: string;

  @IsString()
  @IsOptional()
  _user: string;

  @IsString()
  createdAt: string;

}


