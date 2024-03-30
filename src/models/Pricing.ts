// src/models/Pricing.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Organization } from './Organization';

@Entity()
export class Pricing {
    @PrimaryGeneratedColumn()
    id: string;

    @ManyToOne(() => Organization, organization=> organization.pricing)
    organization: string;

    @Column({name: "itemType", enum:["perishable", "non-perishable"]})
    itemType: string;

    @Column()
    zone: string;

    @Column({ name: 'base_distance_in_km' })
    baseDistanceInKm: number;

    @Column({ name: 'km_price' })
    kmPrice: number;

    @Column({ name: 'fixed_price' })
    fixedPrice: number;
}
