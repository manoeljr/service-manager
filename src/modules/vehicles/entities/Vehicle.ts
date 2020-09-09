import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import Client from '../../clients/entities/Client';

@Entity('vehicles')
class Vehicle {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    type: string;

    @Column()
    manufacturer: string;

    @Column()
    model: string;

    @Column()
    plate: string;

    @Column()
    color: string;

    @Column()
    client_id: string;

    @ManyToOne(() => Client)
    @JoinColumn({ name: 'client_id' })
    client: Client;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Vehicle;
