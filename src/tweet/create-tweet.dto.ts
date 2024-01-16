import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class CreateTweetDto {
  @IsNotEmpty()
  content: string;
}
