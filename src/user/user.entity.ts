import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  uid: number;

  // token
  @Column({
    unique: true    
  })
  id: string;

  @Column({
    default:''
  })
  phone: string;

  // 已用次数
  @Column({
    type: 'int',
    default:0
  })
  times: number;

  @Column({
    default: false
  })
  Africa: boolean;

  @Column({
    default: false
  })
  Asia: boolean;

  @Column({
    default: false
  })
  Oceania: boolean;

  @Column({
    default: false
  })
  Europe: boolean;

  @Column({
    default: false
  })
  America: boolean;
}
