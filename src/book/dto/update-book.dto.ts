import { IsOptional, IsString, IsNumber, IsEnum } from 'class-validator';
import { Category } from '../book.interface';

export class UpdateBookDto {
  @IsOptional()
  @IsString()
  readonly title: string;

  @IsOptional()
  @IsString()
  readonly author: string;

  @IsOptional()
  @IsString()
  readonly description: string;

  @IsOptional()
  @IsNumber()
  readonly price: number;

  @IsOptional()
  @IsEnum(Category, { message: 'Invalid category' })
  readonly category: Category;
}
