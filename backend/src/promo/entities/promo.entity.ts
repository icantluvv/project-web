import { ProductEntity } from 'src/product/entities/product.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('promo')
export class PromoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  image: string;

  @OneToOne(() => ProductEntity)
  @JoinColumn()
  product: ProductEntity;
}
