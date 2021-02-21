import { FindConditions } from 'typeorm';
export interface BaseRepositoryEvents<Entity> {
    OBJECT_CREATED: (newObject: Entity) => void;
    OBJECT_UPDATED: (conditions: FindConditions<Entity>, changes: Partial<Entity>) => void;
    OBJECT_DELETED: (deletedObject: FindConditions<Entity>) => void;
}
