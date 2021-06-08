import { ApiProperty } from '@nestjs/swagger';
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
    @ApiProperty()
    @IsString()
    title: string;

    @ApiProperty()
    @IsString()
    slug: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    excerpt: string;

    @ApiProperty()
    @IsString()
    content: string;

    @ApiProperty()
    @IsEnum(PostCategory, {
        message: `Invalid option. The correct options are: '${EnumToString(
            PostCategory,
        )}'`,
    })
    @IsOptional()
    category: PostCategory;

    @ApiProperty()
    @IsArray()
    @IsOptional()
    @IsString({ each: true })
    tags: string[];

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    status: boolean;
}
