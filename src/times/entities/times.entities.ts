import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Shop } from '../../shop/entities/shop.entities'
import { Workers } from '../../workers/entities/workers.entities'

@Entity()
export class Times {

  @PrimaryGeneratedColumn()
  id: number

  @Column('time', {name: 'Date'})
  date: string

  @JoinColumn({name: 'shopId'})
  @ManyToOne(() => Shop, Shop => Shop.times, {eager: true, cascade: true})
  shop: Shop

  @JoinColumn({name: 'workersId'})
  @ManyToOne(() => Workers, Workers => Workers.times, {eager: true, cascade: true})
  workers: Workers

}
