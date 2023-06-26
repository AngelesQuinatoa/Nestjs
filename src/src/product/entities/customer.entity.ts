import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    ManyToOne,
  } from 'typeorm';
  import { MovieEntity } from './movie.entity';
  
  @Entity('customers', { schema: 'views' })
  export class CustomerEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @CreateDateColumn({
      name: 'create_at',
      type: 'timestamp',
      default: () => 'CURRENT_TIMESTAMP',
    })
    createAt: Date;
  
    @UpdateDateColumn({
      name: 'update_at',
      type: 'timestamp',
      default: () => 'CURRENT_TIMESTAMP',
    })
    updatedAt: Date;
  
    @DeleteDateColumn({
      name: 'delete_at',
      type: 'timestamp',
      nullable: true,
    })
    deletedAt: Date;
  
    @Column('varchar', {
      name: 'title',
      nullable: false,
      comment: 'nombre del cliente',
    })
    title: string;
  
    @Column('integer', {
      name: 'age',
      nullable: false,
      comment: 'edad del cliente',
    })
    age: number;
  
    @Column('varchar', {
      name: 'description',
      nullable: true,
      comment: 'descripcion del cliente',
    })
    description: string;
  
    @Column('varchar', {
      name: 'image',
      nullable: false,
      comment: 'imagen del cliente',
    })
    image: string;
  
    @ManyToOne(() => MovieEntity, movie => movie.customers)
    movie: MovieEntity;
  }
  