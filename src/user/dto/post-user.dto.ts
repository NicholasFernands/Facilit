import { IsString, IsEmail, IsNotEmpty, MinLength } from "class-validator"

export class PostUserDto {

  @IsString()
  @IsNotEmpty()
  readonly cpf: string;

  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly phone: string;

  @IsString()
  @IsNotEmpty()
  readonly gender: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @MinLength(6)
  @IsString()
  @IsNotEmpty()
  password: string;

}
