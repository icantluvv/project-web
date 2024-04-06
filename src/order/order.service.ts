import { OrderEntity } from './entities/order.entity';
import { OrderItemEntity } from './entities/order_item.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CartService } from 'src/cart/cart.service';
import { UserEntity } from 'src/users/entities/user.entity';
import { Injectable } from '@nestjs/common';
import { ProductEntity } from 'src/product/entities/product.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(OrderItemEntity)
    private orderItemRepository: Repository<OrderItemEntity>,
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    @InjectRepository(OrderEntity)
    private orderRepository: Repository<OrderEntity>,
    private cartService: CartService,
  ) {}

  async order(user: UserEntity, address: string): Promise<any> {
    //find user's cart items
    const cartItems = await this.cartService.getItemsInCart(user.id);

    const subTotal = cartItems
      .map((cartItem) => cartItem.quantity * cartItem.item.price)
      .reduce((acc, next) => acc + next);


    const order = this.orderRepository.create();
    order.items = [];
    for (let i = 0; i <= cartItems.length; i++) {
      if (cartItems[i] && cartItems[i].item) {
        const orderItem = this.orderItemRepository.create({
          item: cartItems[i].item,
          // user: authUser,
          quantity: cartItems[i].quantity,
        });
        await this.orderItemRepository.save(orderItem);
        order.items.push(orderItem);
      }
    }
    order.address = address;
    order.totalPrice = subTotal;
    order.user = user;
    this.orderRepository.save(order);
    this.cartService.clearCart(user.id);
  }

  async getOrders(userId: number): Promise<OrderItemEntity[]> {
    const userOrder = await this.orderItemRepository
      .createQueryBuilder()
      .select('t.*')
      .from(OrderItemEntity, 't')
      .where('t.userId = :userId', { userId: userId })
      .execute();
    return userOrder;
  }
}
