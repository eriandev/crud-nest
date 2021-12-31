import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsOptional,
  IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

import { EnumToString } from 'src/helpers';
import { PostCategory } from '../enums';

@Entity('posts')
export class Post {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @IsString()
  @Column({ type: 'varchar', length: 150 })
  title!: string;

  @IsString()
  @ApiProperty()
  @Column({ type: 'text' })
  slug!: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Column({ type: 'varchar', length: 255, nullable: true })
  excerpt?: string;

  @ApiProperty()
  @IsString()
  @Column({ type: 'text' })
  content!: string;

  @ApiProperty()
  @IsEnum(PostCategory, {
    message: `Invalid option. The correct options are: '${EnumToString(
      PostCategory,
    )}'`,
  })
  @IsOptional()
  @Column({ type: 'varchar', length: 100, nullable: true })
  category?: PostCategory;

  @ApiProperty()
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @Column({ type: 'simple-array', nullable: true })
  tags?: string[];

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  @Column({ type: 'boolean', default: true })
  status?: boolean;

  @ApiProperty()
  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt: Date;

  @ApiProperty()
  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updatedAt: Date;

  @ApiProperty()
  @DeleteDateColumn({ type: 'timestamp', name: 'deleted_at' })
  deletedAt: Date;
}
