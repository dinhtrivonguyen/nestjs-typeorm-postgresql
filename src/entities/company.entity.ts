import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('companies')
export class Company {
    @PrimaryGeneratedColumn()
    id: number;

    @Column() 
    name: string;

    @Column()
    domain: string;

    @Column()
    description: string;

    @CreateDateColumn({ type: 'timestamp', default: new Date() })
    createdAt: Date;
    
    @CreateDateColumn({ type: 'timestamp', nullable: true })
    updatedAt: Date;
}