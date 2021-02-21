import { OrderBy } from './database.types';
import EventEmitter from 'eventemitter3';
import { FindConditions, Repository } from 'typeorm';
import { BaseRepositoryEvents } from './base.repository.types';
export declare abstract class BaseRepository<Entity> {
    readonly repo: Repository<Entity>;
    readonly eagerRelations: string[];
    readonly eventEmitter: EventEmitter<BaseRepositoryEvents<Entity>>;
    constructor(repo: Repository<Entity>, eagerRelations: string[]);
    create(newEntity: Entity): Promise<Entity>;
    find(where?: FindConditions<Entity>, order?: OrderBy<Entity>): Promise<Entity[]>;
    findOne(where?: FindConditions<Entity>, order?: OrderBy<Entity>): Promise<Entity | undefined>;
    findOneOrFail(where?: FindConditions<Entity>, order?: OrderBy<Entity>): Promise<Entity>;
    update(conditions: FindConditions<Entity>, changes: Partial<Entity>): Promise<void>;
    delete(conditions: FindConditions<Entity>): Promise<void>;
}
