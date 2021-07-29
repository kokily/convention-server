import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Seo extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'text', nullable: true })
  title!: string | null;

  @Column({ type: 'text', nullable: true })
  description!: string | null;

  @Column({ type: 'text', nullable: true })
  keywords!: string | null;

  @Column({ type: 'text', nullable: true })
  headTag!: string | null;

  @Column({ type: 'text', nullable: true })
  bodyTag!: string | null;
}
