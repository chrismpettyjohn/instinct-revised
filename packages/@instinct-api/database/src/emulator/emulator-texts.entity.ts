import {Column, Entity, PrimaryColumn} from 'typeorm';

@Entity('emulator_texts')
export class EmulatorTextsEntity {
  @PrimaryColumn()
  key!: string;

  @Column()
  value!: string;
}
