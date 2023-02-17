import { IsEnum, IsInt, IsNotEmpty, IsString } from 'class-validator';
import { Category } from './category.interface';

export class CreateBookDto {
  @IsString()
  readonly title: string;

  @IsString()
  readonly description: string;

  @IsNotEmpty()
  @IsString()
  readonly author: string;

  @IsNotEmpty()
  @IsInt()
  readonly price: number;

  @IsNotEmpty()
  @IsEnum(Category)
  readonly category: Category;
}
