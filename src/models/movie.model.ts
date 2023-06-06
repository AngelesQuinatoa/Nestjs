import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { CustomerEntity } from "./customer.model";
//Angeles Quinatoa-Johan Garcia
//una pelicula puede ser vista por muchos clientes 
// pero los clientes solo puede ver una pelicula a la vez
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
    UpdateAt: Date;

    @DeleteDateColumn({
        name: 'delete_at',
        type: 'timestamp',
        nullable: true,
    })
    DeleteAt: Date;

    @Column('varchar',{
        name:'title',
        nullable:false,
        comment: 'nombre de la pelicula',
    } )
    title:string;

    @Column('varchar',{
        name:'description',
        nullable:false,
        comment: 'description de la pelicula',
    } )
    description:string;

    @OneToMany(() => CustomerEntity, customer => customer.movie)
    customers: CustomerEntity[];
}


