import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //Método em que não precisa esperar o outro serviço estar disponível
  // @EventPattern('storage-ec')
  // getStorage(@Payload() message) {
  //   console.log('Message recived ', message);
  // }

  //Método em que precisamos esperar o outro serviço estar disponível
  @MessagePattern('storage-ec')
  getStorage(@Payload() message) {
    console.log('Message recived ', message);
  }
}
