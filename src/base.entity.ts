import {
    CreateDateColumn,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  
  export class BaseEntity {
    @PrimaryGeneratedColumn()
    id?: number;
  
    @CreateDateColumn({ nullable: true })
    updatedAt?: Date;
  
    @UpdateDateColumn({ nullable: true })
    createdAt?: Date;
  }
  