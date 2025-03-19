import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Address {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  streetAddress: string

  @Column()
  addressLine: string

  @Column()
  City: string



}