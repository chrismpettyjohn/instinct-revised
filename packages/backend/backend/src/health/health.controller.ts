import {Controller, Get} from '@nestjs/common';
import {exampleHealth, Health} from '@instinct-prj/interface';

@Controller('health')
export class HealthController {
  @Get()
  getHealth(): Health {
    return {
      ...exampleHealth,
      systemVersion: '1.0.0',
    };
  }
}
