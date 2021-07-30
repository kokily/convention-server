import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Banner extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'text' })
  title!: string;

  @Column()
  order!: number;

  @Column({ type: 'boolean' })
  isUse!: boolean;

  @Column({ type: 'text' })
  image!: string;

  @Column({ type: 'timestamptz' })
  @CreateDateColumn()
  created_at!: Date;
}
