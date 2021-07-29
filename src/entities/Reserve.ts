import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Reserve extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'text' })
  husbandName!: string;

  @Column({ type: 'text' })
  husbandNative!: string;

  @Column({ type: 'text' })
  husbandPhone!: string;

  @Column({ type: 'text', nullable: true })
  husbandEmail!: string | null;

  @Column({ type: 'text' })
  brideName!: string;

  @Column({ type: 'text' })
  brideNative!: string;

  @Column({ type: 'text' })
  bridePhone!: string;

  @Column({ type: 'text', nullable: true })
  brideEmail!: string | null;

  @Column({ type: 'text' })
  firstWeddingDate!: string;

  @Column({ type: 'text' })
  firstWeddingTime!: string;

  @Column({ type: 'text', nullable: true })
  secondWeddingDate!: string | null;

  @Column({ type: 'text', nullable: true })
  secondWeddingTime!: string | null;

  @Column({ type: 'text', nullable: true })
  etcAsk!: string | null;

  @Column({ type: 'boolean', default: false })
  isConfirm!: boolean;

  @Column({ type: 'text', nullable: true })
  confirmDate!: string | null;

  @Column({ type: 'text', nullable: true })
  confirmTime!: string | null;

  @Column({ type: 'timestamptz' })
  @CreateDateColumn()
  created_at!: Date;
}
