// src/models/Organization.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Pricing } from './Pricing';

@Entity()
export class Organization {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @OneToMany(() => Pricing, pricing => pricing.organization)
    pricing: Pricing[];
}
