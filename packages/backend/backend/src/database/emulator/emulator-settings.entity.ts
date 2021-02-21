import {Column, Entity, PrimaryColumn} from 'typeorm';

@Entity('emulator_settings')
export class EmulatorSettingsEntity {
  @PrimaryColumn()
  key!: string;

  @Column()
  value!: string;
}
