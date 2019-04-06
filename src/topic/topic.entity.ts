import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Topic {
  @PrimaryGeneratedColumn()
  uid: number;

  @Column()
  id: number;

  @Column()
  tag: string;

}
