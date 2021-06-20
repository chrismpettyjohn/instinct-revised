import {ForumSection} from '@instinct-prj/interface';
import {ForumSectionEntity} from './forum-section.entity';

export function forumSectionWire(entity: ForumSectionEntity): ForumSection {
  return {
    id: entity.id!,
    parentSection: entity.parentSection
      ? forumSectionWire(entity.parentSection)
      : undefined,
    childSections: entity.childSections!.map(_ => forumSectionWire(_)),
    title: entity.title,
    description: entity.description,
    icon: entity.icon,
  };
}
