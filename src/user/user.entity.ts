import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  uid: number;

  @Column()
  id: number;

  @Column()
  phone: string;

  @Column()
  Africa: boolean;

  @Column()
  Asia: boolean;

  @Column()
  Oceania: boolean;

  @Column()
  Europe: boolean;

  @Column()
  America: boolean;
}
