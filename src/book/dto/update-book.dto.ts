import { IsEnum, IsInt, IsString } from 'class-validator';
import { Category } from './category.interface';

export class UpdateBookDto {
  @IsString()
  readonly title: string;

  @IsString()
  readonly description: string;

  @IsString()
  readonly author: string;

  @IsInt()
  readonly price: number;

  @IsEnum(Category)
  readonly category: Category;
}
