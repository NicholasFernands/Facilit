import { Times } from 'src/times/entities/times.entities';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne } from 'typeorm';
import { Shop } from '../../shop/entities/shop.entities'


@Entity()
export class Workers {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column('time', {name: 'openingTimeOne'})
  openingTimeOne: string

  @Column('time', {name: 'closingTimeOne'})
  closingTimeOne: string

  @Column('time', {name: 'breakTime'})
  breakTime: string

  @JoinColumn({name: 'shopId'})
  @ManyToOne(() => Shop, Shop => Shop.workers, {eager: true, cascade: true})
  shop: Shop

  @OneToMany(() => Times, Times => Times.workers)
  times: Times[]

}
