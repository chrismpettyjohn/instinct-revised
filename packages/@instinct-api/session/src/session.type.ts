import {Request} from 'express';
import {UserEntity} from '@instinct-api/database';

export interface RequestWithSession extends Request {
  user: UserEntity;
}
