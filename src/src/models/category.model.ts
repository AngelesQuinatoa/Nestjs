import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
@Entity('categories', { schema: 'ventas' })

export class CategoryEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @CreateDateColumn({
        name: 'create_at',
        type: 'timestamp',
        default: () => 'CURRERNT_TIMESTAMP',
    })
    createAt: Date;
    @UpdateDateColumn({
        name: 'update_at',
        type: 'timestamp',
        default: () => 'CURRERNT_TIMESTAMP',
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
        comment: 'nombre de la categoria',
    } )
    title:string;
    @Column('varchar',{
        name:'description',
        nullable:false,
    comment: 'description de la categoria',
    } )
    description:string;
    
}