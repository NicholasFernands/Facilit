import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Shop } from '../../shop/entities/shop.entities'
import { User } from '../../user/entities/user.entities'


@Entity()
export class Schedules {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column('date', {name: 'date'})
  date: string

  @Column('time', {name: 'time'})
  time: string

  @Column()
  price: number

  @Column()
  status: string

  @Column()
  shopName: string

  @Column('time', {name: 'duration'})
  duration: string

  @JoinColumn({name: 'shopId'})
  @ManyToOne(() => Shop, Shop => Shop.schedules, {eager: true, cascade: true})
  shop: Shop

  @JoinColumn({name: 'userId'})
  @ManyToOne(() => User, User => User.schedules, {eager: true, cascade: true})
  user: User


}
