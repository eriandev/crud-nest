import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreatePostDto } from './dtos/create-post.dto';
import { UpdatePostDto } from './dtos/update-post.dto';
import { Post } from './entities';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}

  create(createPostDto: CreatePostDto) {
    const post = this.postRepository.create(createPostDto as any);
    return this.postRepository.save(post);
  }

  findAll() {
    return this.postRepository.find();
  }

  async findOne(id: number) {
    const post = await this.postRepository.findOne(id);

    if (!post) throw new NotFoundException('Post does not exist');

    return post;
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    const post = await this.postRepository.findOne(id);

    if (!post) throw new NotFoundException('Post does not exist');

    const editedPost = Object.assign(post, updatePostDto);
    return this.postRepository.save(editedPost);
  }

  async remove(id: number) {
    return this.postRepository.softDelete(id);
  }
}
