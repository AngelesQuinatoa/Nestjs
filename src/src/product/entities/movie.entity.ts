import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    OneToMany,
  } from 'typeorm';
  import { CustomerEntity } from './customer.entity';
  
  @Entity('movies', { schema: 'views' })
  export class MovieEntity {
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
    updateAt: Date;
  
    @DeleteDateColumn({
      name: 'delete_at',
      type: 'timestamp',
      nullable: true,
    })
    deleteAt: Date;
  
    @Column('varchar', {
      name: 'title',
      nullable: false,
      comment: 'nombre de la pelicula',
    })
    title: string;
  
    @Column('varchar', {
      name: 'description',
      nullable: false,
      comment: 'descripcion de la pelicula',
    })
    description: string;
  
    @OneToMany(() => CustomerEntity, customer => customer.movie)
    customers: CustomerEntity[];
  }
  