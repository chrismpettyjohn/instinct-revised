import {UpdateConfigDTO} from './config.dto';
import {HasScope} from '@instinct-prj/session-api';
import {Config, ConfigDTO} from '@instinct-prj/interface';
import {Body, Controller, Get, Post} from '@nestjs/common';
import {
  ConfigRepository,
  configDTOWire,
  configWire,
} from '@instinct-prj/database-api';

@Controller('config')
export class ConfigController {
  constructor(private readonly configRepo: ConfigRepository) {}

  @Get()
  async getConfig(): Promise<Config> {
    const config = await this.configRepo.getConfig();
    return configWire(config);
  }

  @Get('full')
  @HasScope('websiteManageConfig')
  async getFullConfig(): Promise<ConfigDTO> {
    const config = await this.configRepo.getConfig();
    return configDTOWire(config);
  }

  @Post()
  @HasScope('websiteManageConfig')
  async updateConfig(@Body() configDTO: UpdateConfigDTO): Promise<Config> {
    await this.configRepo.update(
      {},
      {
        ...configDTO,
        siteBeta: configDTO.siteBeta ? 1 : 0,
        websocketEnabled: configDTO.websocketEnabled ? 1 : 0,
        maintenanceEnabled: configDTO.maintenanceEnabled ? 1 : 0,
      }
    );
    const updatedConfig = await this.configRepo.findOneOrFail();
    return configWire(updatedConfig);
  }
}
