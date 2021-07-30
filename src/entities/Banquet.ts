import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Banquet extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'text' })
  title!: string;

  @Column({ type: 'text' })
  startTime!: string;

  @Column({ type: 'text' })
  endTime!: string;

  @Column()
  num!: number;

  @Column({ type: 'text' })
  eventDate!: string;

  @Column({ type: 'timestamptz' })
  @CreateDateColumn()
  created_at!: Date;
}
