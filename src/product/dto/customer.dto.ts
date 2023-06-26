import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CustomerDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsNumber()
  age: number;

  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  image: string;

  @IsNotEmpty()
  @IsString()
  movieId: string;
}
