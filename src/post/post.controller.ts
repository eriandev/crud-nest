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
import { ApiTags } from '@nestjs/swagger';
import { PostService } from './post.service';
import { CreatePostDto, UpdatePostDto } from './dtos';

@ApiTags('Posts')
@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  async createOne(@Body() createPostDto: CreatePostDto) {
    const data = await this.postService.create(createPostDto);
    return {
      ok: true,
      data,
    };
  }

  @Get()
  async getAll() {
    const data = await this.postService.findAll();
    return {
      ok: true,
      data,
    };
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
