import { ApiProperty } from '@nestjs/swagger';

import { PostCategory } from '../enums';

export class CreatePostDto {
    @ApiProperty()
    readonly title: string;

    @ApiProperty()
    readonly slug: string;

    @ApiProperty()
    readonly excerpt: string;

    @ApiProperty()
    readonly content: string;

    @ApiProperty()
    readonly category: PostCategory;

    @ApiProperty()
    readonly tags: string[];

    @ApiProperty()
    readonly status: boolean;
}
