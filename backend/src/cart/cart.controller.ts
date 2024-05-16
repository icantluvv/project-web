import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Req,
  Patch,
  Delete,
  Param
} from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { UpdateCartDto } from './dto/update-cart.dto';
import { DeleteResult } from 'typeorm';

@ApiTags('cart')
@Controller('cart')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class CartController {
  constructor(private readonly cartService: CartService) { }

  @Post()
  async create(@Body() dto: CreateCartDto, @Req() req: any) {
console.log("**", req.id);
    return this.cartService.create(dto, req.id);
  }

  @Get()
  get(@Req() req: any) {
    console.log(req);
    return this.cartService.getItemsInCart(req.id);
  }

  @Patch()
  patch(@Body() dto: UpdateCartDto, @Req() req: any) {
    return this.cartService.update(dto, req.id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<DeleteResult> {
    return this.cartService.remove(+id);
  }
}
