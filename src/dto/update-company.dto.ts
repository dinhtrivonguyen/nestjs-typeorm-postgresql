import { IsString, IsNotEmpty, IsNumber, } from 'class-validator'

export class UpdateCompanyDto {
  @IsString()
  id: string;

  @IsString()
  name: string;
  
  @IsString()
  domain: string;

  @IsString()
  description: string;
}