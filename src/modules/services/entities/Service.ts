import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import Vehicle from '../../vehicles/entities/Vehicle';

@Entity('services')
class Service {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    description: string;

    @Column()
    value: number;

    @Column()
    vehicle_id: string;

    @ManyToOne(() => Vehicle)
    @JoinColumn({ name: 'vehicle_id' })
    vehicle: Vehicle;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Service;
