import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('posts')
export class Post {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column({ type: 'varchar', length: 150 })
    title!: string;

    @ApiProperty()
    @Column({ type: 'text' })
    slug!: string;

    @ApiProperty()
    @Column({ type: 'varchar', length: 255, nullable: true })
    excerpt?: string;

    @ApiProperty()
    @Column({ type: 'text' })
    content!: string;

    @ApiProperty()
    @Column({ type: 'varchar', length: 100, nullable: true })
    category?: string;

    @ApiProperty()
    @Column({ type: 'simple-array', nullable: true })
    tags?: string[];

    @ApiProperty()
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
