import {
    Controller,
    Get,
    Post,
    Body,
    Put,
    Param,
    Delete,
    ParseIntPipe,
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto, UpdatePostDto } from './dtos';

@Controller('posts')
export class PostController {
    constructor(private readonly postService: PostService) {}

    @Post()
    createOne(@Body() createPostDto: CreatePostDto) {
        return this.postService.create(createPostDto);
    }

    @Get()
    getAll() {
        return this.postService.findAll();
    }

    @Get(':id')
    getOne(@Param('id', ParseIntPipe) id: number) {
        return this.postService.findOne(id);
    }

    @Put(':id')
    editOne(
        @Param('id', ParseIntPipe) id: number,
        @Body() updatePostDto: UpdatePostDto,
    ) {
        return this.postService.update(id, updatePostDto);
    }

    @Delete(':id')
    deleteOne(@Param('id', ParseIntPipe) id: number) {
        return this.postService.remove(id);
    }
}
