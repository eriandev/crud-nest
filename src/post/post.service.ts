import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dtos/create-post.dto';
import { UpdatePostDto } from './dtos/update-post.dto';

@Injectable()
export class PostService {
    create(createPostDto: CreatePostDto) {
        return {
            message: 'This action adds a new post',
            data: createPostDto,
        };
    }

    findAll() {
        return {
            message: 'This action returns all post',
        };
    }

    findOne(id: number) {
        return {
            message: `This action returns a #${id} post`,
        };
    }

    update(id: number, updatePostDto: UpdatePostDto) {
        return {
            message: `This action updates a #${id} post`,
            data: updatePostDto,
        };
    }

    remove(id: number) {
        return {
            message: `This action removes a #${id} post`,
        };
    }
}
