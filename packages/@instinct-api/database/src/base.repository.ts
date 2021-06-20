import {OrderBy} from './database.types';
import EventEmitter from 'eventemitter3';
import {FindConditions, QueryBuilder, Repository} from 'typeorm';
import {BaseRepositoryEvents} from './base.repository.types';

export abstract class BaseRepository<Entity> {
  readonly eventEmitter: EventEmitter<BaseRepositoryEvents<Entity>> =
    new EventEmitter();

  constructor(
    readonly repo: Repository<Entity>,
    readonly eagerRelations: string[]
  ) {}

  async create(newEntity: Entity): Promise<Entity> {
    const newObject = await this.repo.save(newEntity);

    // @ts-ignore
    if (!newObject.id) {
      throw new Error('Entity missing `id`');
    }

    this.eventEmitter.emit('OBJECT_CREATED', newObject);
    // @ts-ignore It's expected for entities to have an `id`
    return this.findOneOrFail({id: newObject.id!});
  }

  find(
    where?: FindConditions<Entity>,
    order?: OrderBy<Entity>
  ): Promise<Entity[]> {
    return this.repo.find({
      where,
      ...order,
      relations: this.eagerRelations,
    });
  }

  findOne(
    where?: FindConditions<Entity>,
    order?: OrderBy<Entity>
  ): Promise<Entity | undefined> {
    return this.repo.findOne({
      where,
      ...order,
      relations: this.eagerRelations,
    });
  }

  findOneOrFail(
    where?: FindConditions<Entity>,
    order?: OrderBy<Entity>
  ): Promise<Entity> {
    return this.repo.findOneOrFail({
      where,
      ...order,
      relations: this.eagerRelations,
    });
  }

  async update(
    conditions: FindConditions<Entity>,
    changes: Partial<Entity>
  ): Promise<void> {
    await this.repo.update(conditions, changes as any);
    this.eventEmitter.emit('OBJECT_UPDATED', conditions, changes);
  }

  async delete(conditions: FindConditions<Entity>): Promise<void> {
    await this.repo.delete(conditions);
    this.eventEmitter.emit('OBJECT_DELETED', conditions);
  }

  getInstance(): Repository<Entity> {
    return this.repo;
  }
}
