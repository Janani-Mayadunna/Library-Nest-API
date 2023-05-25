import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsEnum,
  IsEmpty,
} from 'class-validator';
import { Category } from '../book.interface';
import { User } from '../../auth/schema/user.schema';

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

  @IsEmpty({ message: 'You cannot pass user ID' })
  readonly user: User;
}
