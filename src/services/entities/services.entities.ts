import { Entity ,Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm'
import { Shop } from '../../shop/entities/shop.entities'

@Entity()
export class Services {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  price: number

  @Column('text', {name: 'description'})
  description: string

  @JoinColumn({name: 'shopId'})
  @ManyToOne(() => Shop, Shop => Shop.services, {eager: true ,cascade: true})
  shop: Shop

  @Column()
  category: string

  @Column('time', {name: 'time'})
  time: string


}
