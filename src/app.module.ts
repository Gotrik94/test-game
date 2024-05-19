import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [MongooseModule.forRoot('your_mongodb_connection_string')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
