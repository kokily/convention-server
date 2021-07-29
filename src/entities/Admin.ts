import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Admin extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'text' })
  username!: string;

  @Column({ type: 'text' })
  password!: string;

  @Column({ type: 'text', nullable: true })
  businessName!: string | null;

  @Column({ type: 'text', nullable: true })
  businessNumber!: string | null;

  @Column({ type: 'text', nullable: true })
  leader!: string | null;

  @Column({ type: 'text', nullable: true })
  email!: string | null;

  @Column({ type: 'text', nullable: true })
  privacyNeed!: string | null;

  @Column({ type: 'text', nullable: true })
  address!: string | null;

  @Column({ type: 'text', nullable: true })
  telephone!: string | null;

  @Column({ type: 'text', nullable: true })
  fax!: string | null;

  @Column({ type: 'text', nullable: true })
  facebook!: string | null;

  @Column({ type: 'text', nullable: true })
  instagram!: string | null;

  @Column({ type: 'text', nullable: true })
  youtube!: string | null;

  @Column({ type: 'text', nullable: true })
  twitter!: string | null;

  @Column({ type: 'text', nullable: true })
  blog!: string | null;
}
