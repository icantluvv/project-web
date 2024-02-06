import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PromoModule } from './promo/promo.module';

@Module({
  imports: [PromoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
