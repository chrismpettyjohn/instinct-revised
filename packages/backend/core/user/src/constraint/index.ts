import {Class} from '@instinct-prj/interface';
import {UserExistsConstraint} from './user-exists';
import {UniqueEmailConstraint} from './unique-email';
import {UniqueUsernameConstraint} from './unique-username';
import {ValidatorConstraintInterface} from 'class-validator';

export const userConstraints: Array<Class<ValidatorConstraintInterface>> = [
  UniqueEmailConstraint,
  UniqueUsernameConstraint,
  UserExistsConstraint,
];

export * from './user-exists';
export * from './unique-email';
export * from './unique-username';
