import { Schedules } from 'src/schedules/entities/schedules.entites';
import * as bcrypt from 'bcrypt'
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, BeforeInsert } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cpf: string;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  gender: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Schedules, Schedules => Schedules.user)
  schedules: Schedules[]

  @BeforeInsert()
  HashPassword() {
    this.password = bcrypt.hashSync(this.password, 10)
  }
}
