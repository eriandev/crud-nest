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
    excerpt: string;

    @IsString()
    content: string;

    @IsEnum(PostCategory, {
        message: `Invalid option. The correct options are: '${EnumToString(
            PostCategory,
        )}'`,
    })
    category: PostCategory;

    @IsArray()
    @IsString({ each: true })
    tags: string[];

    @IsOptional()
    @IsBoolean()
    status: boolean;
}
