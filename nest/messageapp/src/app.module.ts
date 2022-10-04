import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { MensajesController } from './mensajes/mensajes.controller'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'rob',
      password: '1234',
      database: 'sendmeapp',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),],
  controllers: [AppController, MensajesController],
  providers: [AppService],
})
export class AppModule {}
