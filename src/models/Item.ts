// src/models/Item.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Pricing } from './Pricing';

@Entity()
export class Item {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    type: string;

    @Column()
    description: string;

    @OneToMany(() => Pricing, pricing => pricing.itemType)
    pricing: Pricing[];
}
