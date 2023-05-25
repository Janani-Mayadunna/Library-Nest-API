import { IsNotEmpty, IsString, IsNumber, IsEnum } from 'class-validator';
import { Category } from '../book.interface';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsString()
  @IsNotEmpty()
  readonly author: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsNumber()
  @IsNotEmpty()
  readonly price: number;

  @IsString()
  @IsEnum(Category, { message: 'Invalid category' })
  readonly category: Category;
}
