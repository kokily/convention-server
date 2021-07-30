import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Survey extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'text' })
  native!: string;

  @Column({ type: 'text' })
  belong!: string;

  @Column({ type: 'simple-array' })
  purpose!: string[];

  @Column()
  servicePoint!: number;

  @Column()
  mealsPoint!: number;

  @Column()
  facility!: number;

  @Column()
  reuse!: number;

  @Column({ type: 'text', nullable: true })
  etc!: string | null;

  @Column({ type: 'timestamptz' })
  @CreateDateColumn()
  created_at!: Date;
}
