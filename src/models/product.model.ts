import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CategoryEntity } from "./category.model";

@Entity('products', { schema: 'ventas' })
export class ProductEntity {
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

  @Column('varchar', {
    name: 'title',
    nullable: false,
    comment: 'nombre del producto',
  })
  title: string;
  @Column('number', {
    name: 'price',
    nullable: false,
    comment: 'precio del producto',
  })
  prince: number;
  @Column('varchar', {
    name: 'description',
    nullable: true,
    comment: 'descripion del producto',
  })
  description: string;
  @Column('varchar', {
    name: 'image',
    nullable: false,
    comment: 'imagen del producto',
  })
  image: string;
  @Column('number', {
    name: 'category',
    nullable: false,
    comment: 'categoria del producto',
  })
  category: CategoryEntity;

  /*@BeforeInsert()
    @BeforeUpdate()
    setMail({
        if(!this.mail){
            return;
        }
        this.mail = this.mail.tolowerCase().trim();
    })
    */
}
