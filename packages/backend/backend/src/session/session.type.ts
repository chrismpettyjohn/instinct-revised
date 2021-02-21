import {Request} from 'express';
import {UserEntity} from '../database/user';

export interface RequestWithSession extends Request {
  user: UserEntity;
}
