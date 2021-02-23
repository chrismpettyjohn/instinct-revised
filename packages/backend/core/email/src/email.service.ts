import Sendgrid from '@sendgrid/mail';
import {Injectable} from '@nestjs/common';
import {ConfigRepository} from '@instinct-prj/database-api';

@Injectable()
export class EmailService {
  constructor(private readonly configRepo: ConfigRepository) {}

  async sendEmail<T>(
    recipient: string,
    templateID: string,
    payload: T
  ): Promise<void> {
    const config = await this.configRepo.getConfig();
    Sendgrid.setApiKey(config.sendGridAPIKey);
    await Sendgrid.send({
      to: recipient,
      from: config.sendGridAPISender,
      templateId: templateID,
      dynamicTemplateData: payload,
    });
  }
}
