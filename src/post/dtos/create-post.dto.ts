import {
    IsArray,
    IsBoolean,
    IsEnum,
    IsOptional,
    IsString,
} from 'class-validator';
import { EnumToString } from 'src/helpers';
import { PostCategory } from '../enums';

export class CreatePostDto {
    @IsString()
    title: string;

    @IsString()
    slug: string;

    @IsString()
    @IsOptional()
    excerpt: string;

    @IsString()
    content: string;

    @IsEnum(PostCategory, {
        message: `Invalid option. The correct options are: '${EnumToString(
            PostCategory,
        )}'`,
    })
    @IsOptional()
    category: PostCategory;

    @IsArray()
    @IsOptional()
    @IsString({ each: true })
    tags: string[];

    @IsBoolean()
    @IsOptional()
    status: boolean;
}
