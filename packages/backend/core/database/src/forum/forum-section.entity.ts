import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('instinct_forum_sections')
export class ForumSectionEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'section_id', type: 'integer', nullable: true})
  sectionID?: number;

  @Column()
  title!: string;

  @Column()
  icon!: string;

  @Column({type: 'text'})
  description!: string;

  @ManyToOne(() => ForumSectionEntity, forumSection => forumSection.id)
  @JoinColumn({name: 'section_id'})
  parentSection?: ForumSectionEntity;

  @OneToMany(
    () => ForumSectionEntity,
    forumSection => forumSection.parentSection
  )
  childSections?: ForumSectionEntity[];
}
