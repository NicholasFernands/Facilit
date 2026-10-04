import { Schedules } from 'src/schedules/entities/schedules.entites';
import { Services } from 'src/services/entities/services.entities';
import { Times } from '../../times/entities/times.entities'
import { Workers } from '../../workers/entities/workers.entities'
import * as bcrypt from 'bcrypt'
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, BeforeInsert } from 'typeorm';


@Entity()
export class Shop {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cnpj: string;

  @Column()
  shopname: string;

  @Column()
  phone: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  street: string;

  @Column('bigint', {name: 'number'})
  number: number;

  @Column()
  district: string;

  @Column()
  city: string;

  @Column()
  cep: string;

  @Column()
  state: string;

  @Column()
  coordinate: string;

  @Column('time', {name: 'openingTimeOne'})
  openingTimeOne: string;

  @Column('time', {name: 'closingTimeOne'})
  closingTimeOne: string;

  @Column('time', {name: 'startBreak'})
  startBreak: string;

  @Column('time', {name: 'finalBreak'})
  finalBreak: string;

  @Column()
  tag: string;

  @OneToMany(() => Services, Services => Services.shop)
  services: Services[]

  @OneToMany(() => Schedules, Schedules => Schedules.shop)
  schedules: Schedules[]

  @OneToMany(() => Times, Times => Times.shop)
  times: Times[]

  @OneToMany(() => Workers, Workers => Workers.shop)
  workers: Workers[]

  @BeforeInsert()
  HashPassword() {
    this.password = bcrypt.hashSync(this.password, 10)
  }
}
