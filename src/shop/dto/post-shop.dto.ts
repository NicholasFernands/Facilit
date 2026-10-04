import { IsString, IsEmail, IsNotEmpty, IsNumber, IsMilitaryTime  } from 'class-validator'

export class PostShopDto {

  @IsString()
  @IsNotEmpty()
  readonly cnpj: string;

  @IsString()
  @IsNotEmpty()
  readonly shopname: string;

  @IsString()
  @IsNotEmpty()
  readonly phone: string;

  @IsString()
  @IsNotEmpty()
  readonly password: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  readonly street: string;

  @IsNumber()
  @IsNotEmpty()
  readonly number: number;

  @IsString()
  @IsNotEmpty()
  readonly district: string;

  @IsString()
  @IsNotEmpty()
  readonly city: string;

  @IsString()
  @IsNotEmpty()
  readonly cep: string;

  @IsString()
  @IsNotEmpty()
  readonly state: string;

  @IsString()
  @IsNotEmpty()
  readonly coordinate: string;

  @IsMilitaryTime()
  @IsNotEmpty()
  readonly openingTimeOne: string;

  @IsMilitaryTime()
  @IsNotEmpty()
  readonly closingTimeOne: string;

  @IsMilitaryTime()
  @IsNotEmpty()
  readonly startBreak: string;

  @IsMilitaryTime()
  @IsNotEmpty()
  readonly finalBreak: string;

  @IsString()
  @IsNotEmpty()
  readonly tag: string;

}
