import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Ask extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'text' })
  native!: string;

  @Column({ type: 'text' })
  name!: string;

  @Column({ type: 'text' })
  phone!: string;

  @Column({ type: 'text' })
  email!: string;

  @Column({ type: 'text' })
  reserveDate!: string;

  @Column({ type: 'text' })
  reserveTime!: string;

  @Column({ type: 'text' })
  num!: number;

  @Column({ type: 'text' })
  body!: string;

  @Column({ type: 'timestamptz' })
  @CreateDateColumn()
  created_at!: Date;
}
