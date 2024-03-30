// src/models/Pricing.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Organization } from './Organization';
import { Item } from './Item';

@Entity()
export class Pricing {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    organizationId: string;

    @ManyToOne(() => Organization, organization => organization.id)
    organization: string;

    @ManyToOne(() => Item, item => item.type)
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
