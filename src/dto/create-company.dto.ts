import { IsInt, IsNotEmpty, IsString } from 'class-validator';
//import { InputType, Field, Float } from '@nestjs/graphql';

export class Companies {
  @IsNotEmpty()
  @IsString()
  readonly id: string;

  @IsNotEmpty()
  @IsInt()
  readonly name: string;

  @IsInt()
  readonly domain: string;

  @IsInt()
  readonly description: string;
}