import {Request} from 'express';
import {UserEntity} from '@instinct-prj/database-api';

export interface RequestWithSession extends Request {
  user: UserEntity;
}
