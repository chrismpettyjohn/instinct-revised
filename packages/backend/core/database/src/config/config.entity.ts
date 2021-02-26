import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('instinct_config')
export class ConfigEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({name: 'site_name'})
  siteName!: string;

  @Column({name: 'site_link'})
  siteLink!: string;

  @Column({name: 'site_beta', type: 'tinyint'})
  siteBeta!: number;

  @Column({name: 'emulator_ip'})
  emulatorIP!: string;

  @Column({name: 'emulator_port'})
  emulatorPort!: string;

  @Column({name: 'swf_admin_habbo'})
  swfAdminHabbo!: string;

  @Column({name: 'swf_habbo'})
  swfHabbo!: string;

  @Column({name: 'swf_external_variables'})
  swfExternalVariables!: string;

  @Column({name: 'swf_external_texts'})
  swfExternalTexts!: string;

  @Column({name: 'swf_productdata'})
  swfProductData!: string;

  @Column({name: 'swf_furnidata'})
  swfFurniData!: string;

  @Column({name: 'swf_figuredata'})
  swfFigureData!: string;

  @Column({name: 'swf_base_url'})
  swfBaseURL!: string;

  @Column({name: 'swf_badge_url'})
  swfBadgeURL!: string;

  @Column({name: 'swf_override_variables'})
  swfOverrideVariables!: string;

  @Column({name: 'swf_override_texts'})
  swfOverrideTexts!: string;

  @Column({name: 'loading_message'})
  loadingMessage!: string;

  @Column({name: 'group_badge_url'})
  groupBadgeURL!: string;

  @Column({name: 'sendgrid_api_key'})
  sendGridAPIKey!: string;

  @Column({name: 'sendgrid_api_sender'})
  sendGridAPISender!: string;

  @Column({name: 'sendgrid_template_forgot_password'})
  sendGridForgotPasswordTemplate!: string;

  @Column({name: 'google_recaptcha_site_key'})
  googleRecaptchaClientKey!: string;
  @Column({name: 'google_recaptcha_secret_key'})
  googleRecaptchaSecretKey!: string;

  @Column({name: 'websocket_enabled', type: 'tinyint'})
  websocketEnabled!: number;

  @Column({name: 'websocket_ip'})
  websocketIP!: string;

  @Column({name: 'websocket_port'})
  websocketPort!: string;
}
